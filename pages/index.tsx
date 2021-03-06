import type { NextPage } from "next";
import { fetchAPI } from "../lib/api";
import { format as formatMeetings } from "./api/meetings";
import { format as formatBibliographies } from "./api/bibliography";
import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import {
  sortByMeetingDate,
  findNextMeeting,
  formatMeetingDate,
  formatDate,
} from "../lib/dates";
import { Meeting } from "../lib/types";
import MeetingCard from "../lib/components/MeetingCard";
import { NavProps } from "../lib/components/Nav";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

const Text = styled.p`
  font-size: 14px;
`;

type LightTextProps = {
  isDate?: boolean;
  isTitle?: boolean;
};

const LightText = styled(Text)<LightTextProps>`
  font-family: Raleway;
  font-weight: 300;
  margin-right: ${(props) => (props.isDate ? 20 : 0)}px;
  text-align: ${(props) => (props.isTitle ? "right" : "inherit")};
  min-width: ${(props) => (props.isDate ? "150px" : "inherit")};
`;

const Filter = styled.input`
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #444;
  padding: 5px;
  font-family: Futura;
  font-weight: 700;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  cursor: pointer;
  &:after {
    display: inline-block;
    content: "\u2179";
  }
`;

const FilterContainer = styled.div`
  position: relative;
`;

interface Props extends NavProps {
  meetings: Meeting[];
}

const Home: NextPage<Props> = ({ meetings, bibliography }) => {
  const [term, setTerm] = React.useState<string>("");
  const sortedMeetings = React.useMemo<Meeting[]>(
    () => (meetings ? meetings.sort(sortByMeetingDate) : []),
    [meetings]
  );
  const [nextMeeting, idx] = React.useMemo<[Meeting | null, number]>(() => {
    const idx = sortedMeetings?.findIndex(findNextMeeting);
    if (idx > -1) {
      return [sortedMeetings[idx], idx];
    }
    return [null, -1];
  }, [sortedMeetings]);

  const futureMeetings = React.useMemo<Meeting[]>(
    () => (sortedMeetings && idx > -1 ? sortedMeetings.slice(idx + 1) : []),
    [sortedMeetings, idx]
  );

  const filterMeetings = React.useCallback(
    (m: Meeting) => {
      if (m.id === nextMeeting?.id) {
        return false;
      }
      if (term) {
        const lowerTerm = term.toLowerCase();
        if (
          m.name.toLowerCase().includes(lowerTerm) ||
          m.description?.toLowerCase().includes(lowerTerm) ||
          m.tags?.find(({ Name }) => Name.toLowerCase().includes(lowerTerm))
        ) {
          return true;
        }
        return false;
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

  return (
    <PageWrapper bibliography={bibliography}>
      <Text>
        Next Meeting:{" "}
        {nextMeeting
          ? formatMeetingDate(nextMeeting?.date || "")
          : "Not scheduled currently"}
      </Text>
      {nextMeeting ? (
        <MeetingCard raised current {...(nextMeeting || {})} />
      ) : null}
      <div>
        <Text>Planned Meetings</Text>
        {futureMeetings.map((m) => (
          <Row key={m.date}>
            <LightText isDate>{formatDate(m.date)}</LightText>
            <LightText isTitle>{m.name}</LightText>
          </Row>
        ))}
        <Text>Previous Meetings ({filteredPastMeetings.length})</Text>
        <FilterContainer>
          <Filter
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search for a meeting"
          />
          {term ? <Close onClick={() => setTerm("")} /> : null}
        </FilterContainer>
      </div>
      {filteredPastMeetings.map((m) => (
        <MeetingCard key={m.date} {...m} setSearch={setTerm} />
      ))}
      {!filteredPastMeetings.length ? (
        <div>
          <LightText>Sorry, no meetings matched your search terms.</LightText>
        </div>
      ) : null}
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const bibliography = await fetchAPI("bibliographies");
  const meetings = await fetchAPI("meetings?populate=*&pagination[limit]=200");
  return {
    props: {
      meetings: meetings?.data?.map(formatMeetings) || [],
      bibliography: bibliography?.data?.map(formatBibliographies) || [],
    },
    revalidate: 60,
  };
}

export default Home;
