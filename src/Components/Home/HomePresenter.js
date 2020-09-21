import React from "react";
import styled, { keyframes } from "styled-components";
import Loader from "../Loader";
import device from "../Device";

const typing = keyframes`
  0% {
    width: 0;
  }
  30% {
    width: 100%;
  }
  50% {
    width: 100%;
    text-decoration: underline;
  }
  60% {
    width: 100%;
    text-decoration: none;
  }
  80% {
    width: 0%;
  }
  100% {
    width: 0%;
  }
`;

const blinkCaret = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
`;

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55px);
  position: relative;
`;

const BackGround = styled.div`
  background-position: center center;
  background-size: cover;
  background-image: url(${props => props.image});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: ${fadeIn} 0.5s linear;
`;

const Title = styled.span`
  font-size: 50px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    padding: 70px;
  }

  @media ${device.mobileL} {
    padding: 100px;
    font-size: 35px;
    text-align: center;
  }

  @media ${device.mobileM} {
    padding: 90px;
    font-size: 35px;
    text-align: center;
  }

  @media ${device.mobileS} {
    padding: 60px;
    font-size: 35px;
    text-align: center;
  }
`;

const ChangingTitle = styled.span`
  overflow: hidden;
  border-right: 0.1em solid white;
  white-space: nowrap;
  letter-spacing: 0.1em;
  animation: ${typing} 7s steps(30, end) infinite,
    ${blinkCaret} 1s step-start infinite;
  max-width: 290px;
  font-size: 50px;
  margin-bottom: 50px;
`;

export default ({ image, loading }) => (
  <Container>
    {loading ? <Loader /> : null}
    <BackGround image={loading ? null : image.src} />
    <Title>挑戦</Title>
    <ChangingTitle>キムウヨル</ChangingTitle>
  </Container>
);
