"use client";

import React from "react";
import styled from "@emotion/styled";
import { cx } from "@emotion/css";
import {
  sortByMeetingDate,
  findNextMeeting,
  formatMeetingDate,
  formatDate,
} from "../lib/dates";
import { Bibliography, Meeting } from "../lib/types";
import MeetingCard from "../lib/components/MeetingCard";
import { LightText } from "../lib/components";
import type { SiteConfig } from "../lib/site-config";

// ─── Layout ────────────────────────────────────────────────────────────────

const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px 80px;
  @media (max-width: 600px) {
    padding: 0 24px 60px;
  }
`;

// ─── Hero ──────────────────────────────────────────────────────────────────

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: 64px;
  padding: 64px 0 52px;
  align-items: start;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 40px 0 32px;
  }
`;

const BigTitle = styled.h1`
  font-size: 62px;
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  margin: 0;
  color: #111;
  @media (max-width: 900px) {
    font-size: 48px;
  }
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroDesc = styled.div`
  font-size: 16px;
  line-height: 1.75;
  color: #111;
  padding-top: 6px;
  p {
    margin: 0 0 1em;
  }
  a {
    color: #111;
    text-decoration: underline;
  }
`;

// ─── Dividers & structure ──────────────────────────────────────────────────

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #111;
  margin: 0;
`;

const FeatureLink = styled.a`
  display: block;
  font-size: 16px;
  color: #be0000;
  text-decoration: none;
  padding: 28px 0;
  &:hover {
    text-decoration: underline;
  }
  strong {
    font-weight: 700;
  }
`;

const SectionHeader = styled.h2`
  font-size: 46px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 52px 0 8px;
  color: #111;
  @media (max-width: 800px) {
    font-size: 34px;
  }
`;

const SectionDesc = styled.p`
  font-size: 15px;
  font-style: italic;
  color: #444;
  margin: 0 0 32px;
  a {
    color: #444;
    text-decoration: underline;
  }
`;

// ─── ICC chapters ──────────────────────────────────────────────────────────

const PartLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #777;
  margin: 32px 0 8px;
`;

const ChapterLink = styled.a`
  display: block;
  font-size: 16px;
  line-height: 1.9;
  color: #111;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PlaceholderNote = styled.span`
  font-size: 12px;
  color: #aaa;
  margin-left: 6px;
  font-style: italic;
`;

const DownloadLink = styled.a`
  display: inline-block;
  font-size: 15px;
  color: #111;
  text-decoration: underline;
  margin-top: 32px;
`;

// ─── Meetings ──────────────────────────────────────────────────────────────

const MeetingsWrap = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 60px;
`;

const MeetingsTitle = styled.p`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #777;
  margin: 0 0 20px;
  text-align: center;
`;

const Filter = styled.input`
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #444;
  padding: 5px;
  font-family: inherit;
  font-weight: 700;
  width: 100%;
  &:focus {
    outline: none;
  }
  &.active {
    background-color: #444;
    color: #fff;
  }
`;

const Close = styled.div`
  color: #fff;
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
  &:after {
    display: inline-block;
    content: "ⅹ";
  }
`;

const FilterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const MeetingRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

// ─── ICC data (PT placeholder links — EN coming soon) ──────────────────────

const ICC_PARTS = [
  {
    label: "Introdução",
    chapters: [
      {
        title: "Introdução",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_d99327c86f074ae382f292c05de4395a.pdf",
      },
    ],
  },
  {
    label: "Parte Um",
    chapters: [
      {
        title: "1. O que faz um comunista?",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_1d3f74b0b7684c6cba4338a8d200627c.pdf",
      },
      {
        title: "2. O desafio dos comunistas hoje",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_7366ab27d169499f93d81318503a91a0.pdf",
      },
      {
        title: "3. A periferização do mundo",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_206cb17d688a46fbba5b83b8f4e1a1b3.pdf",
      },
      {
        title: "4. A periferização das esquerdas",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_04c8116af8934f979babef677a8042ff.pdf",
      },
    ],
  },
  {
    label: "Parte Dois",
    chapters: [
      {
        title: "5. Uma teoria para a prática comunista",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_796f114f181043338705fa00ec651b2c.pdf",
      },
      {
        title: "6. O ponto de vista da organização",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_02395f2b7b9d460ca84512efa094233c.pdf",
      },
      {
        title: "7. As lógicas da organização social",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_4f2415c942d146bfb1db4c87974feb9f.pdf",
      },
      {
        title: "8. Organização concreta e dominância social",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_d268ceef50104076b944d93c0db89849.pdf",
      },
      {
        title: "9. O trabalhador e a periferização",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_60f38b3d7e3f428fbcf86e48365f64ee.pdf",
      },
    ],
  },
  {
    label: "Parte Três",
    chapters: [
      {
        title: "10. Organização política",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_0fa6b81d99434f0cb8cc101e31c1b0ae.pdf",
      },
      {
        title: "11. Luta política",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_5c41a8f565c84cd98587ee413b6c1476.pdf",
      },
      {
        title: "12. Pensamento político",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_49cb82f1edd94df4994472a984ebdbfa.pdf",
      },
      {
        title: "13. Transformação política",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_26629aeefacc43ff97e67b17cf756b5a.pdf",
      },
    ],
  },
  {
    label: "Parte Quatro",
    chapters: [
      {
        title: "14. A construção comunista",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_211bd83fadc045639a44ee92a7725ca1.pdf",
      },
      {
        title: "15. As dimensões da prática comunista",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_591d873581c34aed85b8cd0bfff4fc96.pdf",
      },
      {
        title: "16. A investigação comunista",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_ec399eeaa013466cbfd5c999dc4667a5.pdf",
      },
      {
        title: "17. Espaço Comum de Organizações",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_b3488fb84f504fccbe87a8c68032114e.pdf",
      },
    ],
  },
  {
    label: "Continuar",
    chapters: [
      {
        title: "Continuar",
        url: "https://www.espacocomum.org/_files/ugd/e4314a_631978206af048ecbb67d7cc87c7f2a6.pdf",
      },
    ],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

type Props = {
  bibliography: Bibliography[];
  meetings: Meeting[];
  zoom: { link: string };
  siteConfig: SiteConfig;
};

const Home = ({ meetings, zoom, siteConfig }: Props) => {
  const [term, setTerm] = React.useState<string>("");

  const sortedMeetings = React.useMemo<Meeting[]>(
    () => (meetings ? meetings.sort(sortByMeetingDate) : []),
    [meetings]
  );

  const [nextMeeting, idx] = React.useMemo<[Meeting | null, number]>(() => {
    const i = sortedMeetings?.findIndex(findNextMeeting);
    return i > -1 ? [sortedMeetings[i], i] : [null, -1];
  }, [sortedMeetings]);

  const futureMeetings = React.useMemo<Meeting[]>(
    () => (sortedMeetings && idx > -1 ? sortedMeetings.slice(idx + 1) : []),
    [sortedMeetings, idx]
  );

  const filterMeetings = React.useCallback(
    (m: Meeting) => {
      if (m.id === nextMeeting?.id) return false;
      if (term) {
        const lowerTerm = term.toLowerCase();
        return (
          m.name.toLowerCase().includes(lowerTerm) ||
          m.description?.toLowerCase().includes(lowerTerm) ||
          !!m.tags?.find(({ Name }) => Name.toLowerCase().includes(lowerTerm))
        );
      }
      return true;
    },
    [nextMeeting, term]
  );

  const filteredPastMeetings = React.useMemo<Meeting[]>(
    () =>
      sortedMeetings
        ? sortedMeetings
            .slice(0, idx > -1 ? idx : sortedMeetings.length)
            .filter(filterMeetings)
            .reverse()
        : [],
    [sortedMeetings, filterMeetings, idx]
  );

  const { visibility } = siteConfig;

  return (
    <Page>
      {/* ── Hero ── */}
      <HeroGrid>
        <BigTitle>
          COMMON
          <br />
          SPACE OF
          <br />
          THEORETICAL
          <br />
          PRACTICE
        </BigTitle>
        <HeroDesc>
          <p>
            CSTP meets regularly online to discuss philosophy, science, and
            politics.
          </p>
          <p>
            If you&rsquo;re interested in study groups or joining the
            collective, <a href="/contact">get in touch</a>.
          </p>
        </HeroDesc>
      </HeroGrid>

      <Divider />

      <FeatureLink
        href="https://www.espacocomum.org/atlas"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow the launches of the book{" "}
        <strong>Atlas de Política Experimental</strong>
      </FeatureLink>

      <Divider />

      {/* ── ICC ── */}
      <SectionHeader>INVESTIGATE, COMPOSE, CONTINUE</SectionHeader>
      <SectionDesc>
        For debates and study groups,{" "}
        <a href="/contact">get in touch</a>
      </SectionDesc>

      {ICC_PARTS.map((part) => (
        <div key={part.label}>
          <PartLabel>{part.label}</PartLabel>
          {part.chapters.map((ch) => (
            <ChapterLink
              key={ch.title}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ch.title}
              <PlaceholderNote>PT — EN coming soon</PlaceholderNote>
            </ChapterLink>
          ))}
        </div>
      ))}

      <DownloadLink
        href="https://www.espacocomum.org/_files/ugd/e4314a_7a17ac9e452649669c56d26e9efddef3.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the complete book (PT)
      </DownloadLink>

      <Divider style={{ marginTop: "60px" }} />

      {/* ── Meetings ── */}
      <MeetingsWrap>
        {visibility.nextMeeting && (
          <>
            <MeetingsTitle>
              Next Meeting:{" "}
              {nextMeeting
                ? formatMeetingDate(nextMeeting?.date || "")
                : "Not scheduled currently"}
            </MeetingsTitle>
            {nextMeeting ? (
              <MeetingCard
                raised
                current
                {...(nextMeeting || {})}
                zoom={visibility.zoomLink ? zoom : undefined}
                hideYoutube={!visibility.youtubeLinks}
              />
            ) : null}
          </>
        )}

        {visibility.plannedMeetings && futureMeetings.length ? (
          <div>
            <MeetingsTitle>Planned Meetings</MeetingsTitle>
            {futureMeetings.map((m) => (
              <MeetingRow key={m.date}>
                <LightText isDate>{formatDate(m.date)}</LightText>
                <LightText isTitle>{m.name}</LightText>
              </MeetingRow>
            ))}
          </div>
        ) : null}

        {visibility.previousMeetings && (
          <>
            <MeetingsTitle>
              Previous Meetings ({filteredPastMeetings.length})
            </MeetingsTitle>
            {visibility.meetingSearch && (
              <FilterContainer>
                <Filter
                  className={cx({ active: !!term })}
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Search for a meeting"
                />
                {term ? <Close onClick={() => setTerm("")} /> : null}
              </FilterContainer>
            )}
            {filteredPastMeetings.map((m) => (
              <MeetingCard
                key={m.date}
                {...m}
                setSearch={setTerm}
                hideYoutube={!visibility.youtubeLinks}
              />
            ))}
            {!filteredPastMeetings.length ? (
              <div>
                <LightText>
                  Sorry, no meetings matched your search terms.
                </LightText>
              </div>
            ) : null}
          </>
        )}
      </MeetingsWrap>
    </Page>
  );
};

export default Home;
