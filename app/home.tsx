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

// ─── ICC data ──────────────────────────────────────────────────────────────

const BASE = "https://space.ideaofcommunism.com/icc/en";

const ICC_PARTS = [
  {
    label: "Introduction",
    chapters: [
      {
        title: "Introduction",
        url: `${BASE}/title-and-introductory-note.pdf`,
      },
    ],
  },
  {
    label: "Part One",
    chapters: [
      {
        title: "I. What Does a Communist Do?",
        url: `${BASE}/i-what-does-a-communist-do.pdf`,
      },
      {
        title: "II. The Challenge for Communists Today",
        url: `${BASE}/ii-the-challenge-for-communists-today.pdf`,
      },
      {
        title: "III. The peripheralization of the world",
        url: `${BASE}/iii-the-peripheralization-of-the-world.pdf`,
      },
      {
        title: "IV. The peripheralization of the left",
        url: `${BASE}/iv-the-peripheralization-of-the-left.pdf`,
      },
    ],
  },
  {
    label: "Part Two",
    chapters: [
      {
        title: "V. A theory for communist practice",
        url: `${BASE}/v-a-theory-for-communist-practice.pdf`,
      },
      {
        title: "VI. The organization's point of view",
        url: `${BASE}/vi-the-organizations-point-of-view.pdf`,
      },
      {
        title: "VII. The logics of social organization",
        url: `${BASE}/vii-the-logics-of-social-organization.pdf`,
      },
      {
        title: "VIII. Concrete organization and social dominance",
        url: `${BASE}/viii-concrete-organization-and-social-dominance.pdf`,
      },
      {
        title: "IX. The worker and marginalization",
        url: `${BASE}/ix-the-worker-and-marginalization.pdf`,
      },
    ],
  },
  {
    label: "Part Three",
    chapters: [
      {
        title: "X. Political organization",
        url: `${BASE}/x-political-organization.pdf`,
      },
      {
        title: "XI. Political struggle",
        url: `${BASE}/xi-political-struggle.pdf`,
      },
      {
        title: "XII. Political thought",
        url: `${BASE}/xii-political-thought.pdf`,
      },
      {
        title: "XIII. Political transformation",
        url: `${BASE}/xiii-political-transformation.pdf`,
      },
    ],
  },
  {
    label: "Part Four",
    chapters: [
      {
        title: "XIV. Communist construction",
        url: `${BASE}/xiv-communist-construction.pdf`,
      },
      {
        title: "XV. Dimensions of communist practice",
        url: `${BASE}/xv-dimensions-of-communist-practice.pdf`,
      },
      {
        title: "XVI. Communist investigations",
        url: `${BASE}/xvi-communist-investigations.pdf`,
      },
      {
        title: "XVII. Common Space of Organizations",
        url: `${BASE}/xvii-common-space-of-organizations.pdf`,
      },
    ],
  },
  {
    label: "Continue",
    chapters: [
      {
        title: "Continue",
        url: `${BASE}/continue.pdf`,
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
            </ChapterLink>
          ))}
        </div>
      ))}

      <DownloadLink
        href={`${BASE}/full-text.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the complete book (EN)
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
