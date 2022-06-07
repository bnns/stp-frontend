import React from "react";
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
  error?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export default function PageWrapper({
  error,
  loading,
  children,
}: PageWrapperProps) {
  if (error)
    return (
      <Wrapper>
        <CenterPiece>
          <div>failed to load</div>
        </CenterPiece>
      </Wrapper>
    );
  if (loading)
    return (
      <Wrapper>
        <CenterPiece>
          <div>loading...</div>
        </CenterPiece>
      </Wrapper>
    );

  return (
    <main>
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
