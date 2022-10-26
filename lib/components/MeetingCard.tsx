import React from "react";
import styled from "@emotion/styled";
import { Meeting } from "../types";
import Image from "next/image";
import { getStrapiMedia } from "../media";
import { formatDate, DateMode } from "../dates";

const shadow =
  "0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);";

type CardProps = {
  raised?: boolean;
};

const Card = styled.div<CardProps>`
  padding: 40px;
  background: #fff;
  width: 360px;
  border-radius: 10px;
  box-shadow: ${(props) => (props.raised ? shadow : "inherit;")}
  transition: box-shadow 240ms ease-out;
  margin: 20px 0;

  &:hover {
    box-shadow: ${shadow}
  }

  @media (max-width: 450px) {
    width: inherit;
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

const Title = styled.div`
  font-family: Futura;
  font-weight: 700;
  font-size: 18px;
flex: 3;
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

const Row = styled.div<{center?: boolean}>`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
`;

const Date = styled.div`
  font-weight: 700;
  font-size: 24px;
  border: 2px solid #444;
  text-align: center;
  padding: 10px 25px;
  flex: 1;
  margin-right: 20px;
  height: 70px;
`

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
    <Card raised={raised}>
      <Row center>
        <Date>{formatDate(date, DateMode.CARD)}</Date>
        <Title>{name}</Title>
      </Row>
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
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Icon
                name="/zoomus-icon.svg"
                tooltip="Click to join the meeting."
                height={32}
                width={32}
                alt="Zoom link"
              />
            </a>
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
  );
}
