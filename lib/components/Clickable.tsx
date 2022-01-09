import React from "react";
import styled from "@emotion/styled";

const ButtonWrapper = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
`;

const LinkWrapper = styled.a`
  border: 0;
  padding: 0;
  margin: 0;
  text-decoration: inherit;
  cursor: pointer;
  color: inherit;
  &:visited {
    text-decoration: inherit;
    color: inherit;
  }
`;

type ClickableProps = React.HTMLProps<HTMLButtonElement> & {
  link?: string;
  children: ReactNode;
};

export default function Clickable({ onClick, link, children, ...props }) {
  if (link) {
    return (
      <LinkWrapper href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </LinkWrapper>
    );
  }
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  );
};
