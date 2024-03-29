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
import PageWrapper, { Row } from "../lib/components/PageWrapper";
import { Text, LightText } from "../lib/components";

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
    content: "\u2179";
  }
`;

const FilterContainer = styled.div`
  position: relative;
  width: 100%;
`;

type Props = {
  bibliography: Bibliography[];
  meetings: Meeting[];
  zoom: { link: string };
}

const Home = ({ bibliography, meetings, zoom }: Props) => {
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
      <Text center>
        Next Meeting:{" "}
        {nextMeeting
          ? formatMeetingDate(nextMeeting?.date || "")
          : "Not scheduled currently"}
      </Text>
      {nextMeeting ? (
        <MeetingCard raised current {...(nextMeeting || {})} zoom={zoom} />
      ) : null}
      {futureMeetings.length ? (
        <Row verticalChildren>
          <Text center>Planned Meetings</Text>
          {futureMeetings.map((m) => (
            <Row key={m.date}>
              <LightText isDate>{formatDate(m.date)}</LightText>
              <LightText isTitle>{m.name}</LightText>
            </Row>
          ))}
        </Row>
      ) : null}
      <Text center>Previous Meetings ({filteredPastMeetings.length})</Text>
      <FilterContainer>
        <Filter
          className={cx({ active: !!term })}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a meeting"
        />
        {term ? <Close onClick={() => setTerm("")} /> : null}
      </FilterContainer>
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

export default Home;
