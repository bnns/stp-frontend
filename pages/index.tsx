import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import axios from "axios";
import styled from "@emotion/styled";
import {
  sortByMeetingDate,
  findNextMeeting,
  formatMeetingDate,
} from "../lib/dates";
import { Meeting } from "../lib/types";
import MeetingCard from "../lib/components/MeetingCard";
import Nav from "../lib/components/Nav";
import PageWrapper, { Row } from "../lib/components/PageWrapper";

const Text = styled.p`
  font-size: 14px;
`;

const LightText = styled(Text)`
  font-family: Raleway;
  font-weight: 300;
`;

const Filter = styled.input`
  font-size: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #444;
  padding: 5px;
  font-family: Futura;
  font-weight: 700;
  max-width: 420px;

  &:focus {
    outline: none;
  }
`;

const Home: NextPage = () => {
  const [term, setTerm] = React.useState<string>("");
  const { data, error } = useSWR("/api/meetings", axios);
  const meetings = data?.data?.meetings;
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
          m.description.toLowerCase().includes(lowerTerm)
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
        ? sortedMeetings.slice(0, idx > -1 ? idx : sortedMeetings.length).filter(filterMeetings).reverse()
        : [],
    [sortedMeetings, filterMeetings, idx]
  );

  return (
    <PageWrapper error={error} loading={!data}>
      <Text>
        Next Meeting:{" "}
        {nextMeeting
          ? formatMeetingDate(nextMeeting?.date || "")
          : "Not scheduled currently"}
      </Text>
      {nextMeeting ? <MeetingCard raised current {...(nextMeeting || {})} /> : null}
      <Text>Planned Meetings</Text>
      {futureMeetings.map((m) => (
        <Row key={m.date}>
          <LightText>{formatMeetingDate(m.date)}</LightText>
          <LightText>{m.name}</LightText>
        </Row>
      ))}
      <Text>Previous Meetings</Text>
      <Filter
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for a meeting"
      />
      {filteredPastMeetings.map((m) => (
        <MeetingCard key={m.date} {...m} />
      ))}
    </PageWrapper>
  );
};

export default Home;
