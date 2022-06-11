import React from "react";
import styled from "@emotion/styled";
import { Meeting } from "../types";
import Clickable from "./Clickable";
import Image from "next/image";
import { getStrapiMedia } from "../media";
import { formatDate } from "../dates";

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

const RightItem = styled.div`
  margin-left: auto;
`;

const Tag = styled.div`
  padding: 5px 10px 10px;
  height: 20px;
  border-radius: 5px;
  background-color: #eee;
  font-family: Futura;
  display: flex;
  align-content: center;
  align-self: flex-start;
  cursor: pointer;
  p {
    margin: 0;
  }
`;

const Title = styled.h3`
  font-family: Futura;
  font-weight: 700;
  font-size: 18px;
`;

const Subtitle = styled.h4`
  font-family: Futura;
  font-weight: 500;
  font-size: 14px;
`;

const Text = styled.p`
  font-family: Futura;
  font-weight: 500;
  font-size: 12px;
`;

const Description = styled.div`
  font-family: Futura Light;
  font-weight: 300;
  font-style: italic;
  font-size: 14px;
  margin: 20px 0;
`;

const Row = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Icon = ({
  name,
  tooltip,
  width = 35,
  height = 35,
  alt,
}: {
  name: string;
  tooltip: string;
  height?: number;
  width?: number;
  alt: string;
}) => {
  return (
    <Image src={name} alt={alt} height={height} width={width} title={tooltip} />
  );
};

export default function MeetingCard({
  name,
  description,
  recording,
  link,
  raised,
  materials,
  date,
  tags,
  setSearch,
  current = false,
}: Meeting & {
  raised?: boolean;
  current?: boolean;
  setSearch?: (val: string) => void;
}) {
  return (
    <Clickable link={current && link ? link : undefined}>
      <Card raised={raised}>
        <Title>{name}</Title>
        <Description>{formatDate(date)}</Description>
        <Description>{description}</Description>
        {materials?.length ? <Subtitle>Meeting Materials</Subtitle> : null}
        {materials?.map((attributes) => {
          return (
            <a
              key={attributes.name}
              href={getStrapiMedia(attributes)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text>{attributes.name}</Text>
            </a>
          );
        })}
        <Row>
          {tags?.length
            ? tags.map(({ Name }) => (
                <Tag
                  key={Name}
                  onClick={() => {
                    setSearch?.(Name);
                  }}
                >
                  <p>{Name}</p>
                </Tag>
              ))
            : null}
          {current && link ? (
            <RightItem>
              <Icon
                name="/zoomus-icon.svg"
                tooltip="Click to join the meeting."
                height={32}
                width={32}
                alt="Zoom link"
              />
            </RightItem>
          ) : null}
          {recording ? (
            <RightItem>
              <a href={recording} target="_blank" rel="noopener noreferrer">
                <Icon
                  name="/yt_icon_rgb.png"
                  tooltip="Click to view the recording."
                  height={25}
                  width={35}
                  alt="YouTube recording"
                />
              </a>
            </RightItem>
          ) : null}
        </Row>
      </Card>
    </Clickable>
  );
}
