import React from "react";
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
  height: 100%;
  @media (min-width: 1450px) {
    max-width: 40%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 540px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 300;
`;

type PageWrapperProps = {
  children: React.ReactNode;
  title?: string;
};

export default function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <main>
      <Head>
        <title>
          `Subset of Theoretical Practice${title ? " - " : ""}${title}`
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper>
        <CenterPiece>
          <Row>
            <Title>Subset of Theoretical Practice</Title>
          </Row>
          {children}
        </CenterPiece>
      </Wrapper>
    </main>
  );
}
