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
  width: 100%;
  height: 100%;
  min-height: 1500px;
  max-width: 540px;
  @media (min-width: 1450px) {
    max-width: 40%;
  }
`;

type RowProps = {
  verticalChildren?: boolean;
  flexWrap?: boolean;
  around?: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${(props) => (props.around ? "space-around" : "start")};
  flex-direction: ${(props) => (props.verticalChildren ? "column" : "row")};
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "inherit")};
`;

const Title = styled.h1`
  font-family: Futura;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  width: 100%;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  font-family: Futura;
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
          <PageTitle>{title}</PageTitle>
          {children}
        </CenterPiece>
      </Wrapper>
    </main>
  );
}
