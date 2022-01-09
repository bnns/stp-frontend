import React from "react";
import styled from "@emotion/styled";
import { Meeting } from "types";
import Clickable from "./Clickable";

const shadow =
  "0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);";

const Card = styled.div`
  padding: 40px;
  background: #fff;
  max-width: 360px;
  border-radius: 10px;
  box-shadow: ${(props) => (props.raised ? shadow : "inherit;")}
  transition: box-shadow 240ms ease-out;
  margin: 20px 0;

  &:hover {
    box-shadow: ${shadow}
  }
`;

const Title = styled.h3`
  font-family: Futura;
  font-weight: 700;
  font-size: 18px;
`

const Description = styled.div`
  font-family: Futura Light;
  font-weight: 300;
  font-style: italic;
  font-size: 14px;
  margin: 20px 0;
`;

export default function MeetingCard({
  name,
  description,
  recording,
  link,
  raised,
}: Meeting & { raised?: boolean }) {
  return (
    <Clickable link={recording ?? link}>
      <Card raised={raised}>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Card>
    </Clickable>
  );
};
