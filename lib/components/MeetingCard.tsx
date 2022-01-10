import React from "react";
import styled from "@emotion/styled";
import { Meeting } from "../types";
import Clickable from "./Clickable";
import Image from "next/image";

const shadow =
  "0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);";

type CardProps = {
  raised?: boolean;
};

const Card = styled.div<CardProps>`
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
`;

const Description = styled.div`
  font-family: Futura Light;
  font-weight: 300;
  font-style: italic;
  font-size: 14px;
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Icon = ({ name, tooltip, width = 35, height = 35, alt }: { name: string; tooltip: string; height?: number; width?: number; alt: string;}) => {
    return <Image src={name} alt={alt} height={height} width={width} title={tooltip} />;
};

export default function MeetingCard({
  name,
  description,
  recording,
  link,
  raised,
}: Meeting & { raised?: boolean }) {
  return (
    <Clickable link={!!recording ? recording : link}>
      <Card raised={raised}>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Row>
          {recording ? (
            <Icon
              name="/yt_icon_rgb.png"
              tooltip="Click to view the recording."
                          height={25}
                          width={35}
              alt="YouTube recording"
            />
          ) : null}
          {!recording && link ? (
            <Icon
              name="/stp_logo.webp"
              tooltip="Click to join the meeting when it starts."
              alt="Zoom meeting link"
            />
          ) : null}
        </Row>
      </Card>
    </Clickable>
  );
}
