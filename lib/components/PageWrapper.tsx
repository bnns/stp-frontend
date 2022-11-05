import React from "react";
import Nav, { NavProps } from "./Nav";
import Head from "next/head";
import styled from "@emotion/styled";

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
  align-items: center;
  height: 100%;
  min-height: 1500px;
  @media (min-width: 1450px) {
    max-width: 40%;
  }
`;

type RowProps = {
  verticalChildren?: boolean;
}

export const Row = styled.div <RowProps> `
  display: flex;
  justify-content: space-between;
  max-width: 540px;
  flex-direction: ${props => props.verticalChildren ? 'column' : 'row'}
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 300;
`;

interface PageWrapperProps extends NavProps {
  children: React.ReactNode;
  title?: string;
}

export default function PageWrapper({
  children,
  title,
  ...navProps
}: PageWrapperProps) {
  return (
    <main>
      <Head>
        <title>{title ?? "Subset of Theoretical Practice"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <CenterPiece>
          <Row>
            <Title>Subset of Theoretical Practice</Title>
          </Row>
          <Nav {...(navProps as NavProps)} />
          {children}
        </CenterPiece>
      </Wrapper>
    </main>
  );
}
