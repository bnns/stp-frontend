import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
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

const meta =
  "The Subset of Theoretical Practice is an open group that talks and writes about philosophy, science and politics.";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const CenterPiece = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 1000px) {
    max-width: 40%;
  }
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 300;
`;

const Text = styled.p`
  font-size: 14px;
`;

const LightText = styled(Text)`
  font-family: Inter;
`

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

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 420px;
    padding: 10px 15px;
`

const Home: NextPage = () => {
  const [term, setTerm] = React.useState<string>("");
  const { data, error } = useSWR("/api/meetings", axios);
  const meetings = data?.data?.meetings;
  const sortedMeetings = React.useMemo<Meeting[]>(
    () => (meetings ? meetings.sort(sortByMeetingDate) : []),
    [meetings]
  )
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

  const filteredMeetings = React.useMemo<Meeting[]>(
    () => (sortedMeetings ? sortedMeetings.slice(0, idx).filter(filterMeetings) : []),
    [sortedMeetings, filterMeetings, idx]
  );

  if (error)
    return (
      <Wrapper>
        <CenterPiece>
          <div>failed to load</div>
        </CenterPiece>
      </Wrapper>
    );
  if (!data)
    return (
      <Wrapper>
        <CenterPiece>
          <div>loading...</div>
        </CenterPiece>
      </Wrapper>
    );

  return (
    <div>
      <Head>
        <title>Subset of Theoretical Practice</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <CenterPiece>
            <Title>Subset of Theoretical Practice</Title>
            <Nav />
            <Text>
              Next Meeting:{" "}
              {nextMeeting
                ? formatMeetingDate(nextMeeting?.date || "")
                : "Not scheduled currently"}
            </Text>
            {nextMeeting ? (
              <MeetingCard raised {...(nextMeeting || {})} />
            ) : null}
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
            {filteredMeetings.map((m) => (
              <MeetingCard key={m.date} {...m} />
            ))}
          </CenterPiece>
        </Wrapper>
      </main>
    </div>
  );
};

export default Home;
