import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import device from "../Device";

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
  align-items: center;
  justify-items: center;
  padding: 100px 300px;
  animation: ${fadeIn} 0.5s linear;
  max-height: 200%;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const SLink = styled(Link)`
  width: 80%;
  height: 100%;

  @media ${device.tablet} {
    margin-bottom: 30px;
  }

  @media ${device.mobileL} {
    height: 100px;
  }
`;

const ItemContainer = styled.div`
  border: 5px solid ${probs => probs.color};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(0.95);
    opacity: 1;
    background-color: ${probs => probs.color};
    animation: ${fadeIn} 0.5s linear;
  }

  @media ${device.tablet} {
    background-color: ${probs => probs.color};
    opacity: 1;

    &:hover {
      transform: none;
      animation: none;
    }
  }
`;

const ItemTitle = styled.div`
  font-size: 40px;
  font-weight: 600;

  @media ${device.laptop} {
    font-size: 35px;
  }
`;

const ProjectPresenter = () => (
  <Container>
    <SLink to="/profile/introduce">
      <ItemContainer color="#e74c3c">
        <ItemTitle>自己紹介</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/technologies">
      <ItemContainer color="#3498db">
        <ItemTitle>技術</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/interview">
      <ItemContainer color="#9b59b6">
        <ItemTitle>プロジェクト</ItemTitle>
      </ItemContainer>
    </SLink>
    <SLink to="/profile/contact">
      <ItemContainer color="#2ecc71">
        <ItemTitle>Contact</ItemTitle>
      </ItemContainer>
    </SLink>
  </Container>
);

export default ProjectPresenter;
