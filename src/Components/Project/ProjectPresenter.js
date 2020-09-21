import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Poster from "../Poster";
import mybluejay from "../../images/mybluejay.jpg";
import wetube from "../../images/wetube.jpg";
import guessMind from "../../images/guessmind.jpg";
import nomflix from "../../images/nomflix.jpg";
import thinkful from "../../images/thinkful.jpg";
import kakao from "../../images/kakao.jpg";
import device from "../Device";

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 80px 150px;
  grid-gap: 50px;
  animation: ${fadeIn} 0.5s linear;

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default () => (
  <Container>
    <Link to="/project/mybluejay">
      <Poster title="MyBlueJay" imageUrl={mybluejay}>
        Twitter and instagram Cloning
      </Poster>
    </Link>
    <Link to="/project/wetube">
      <Poster title="Wetube" imageUrl={wetube}>
        Youtube Cloning
      </Poster>
    </Link>
    <Link to="/project/guessmind">
      <Poster title="Guess-Mind" imageUrl={guessMind}>
        Catch-Mind Game Cloning
      </Poster>
    </Link>
    <Link to="/project/kakaotalk">
      <Poster title="kokoa Talk" imageUrl={kakao}>
        kakao Talk Cloning
      </Poster>
    </Link>
    <Link to="/project/nomflix">
      <Poster title="Nomflix" imageUrl={nomflix}>
        Movie App
      </Poster>
    </Link>
    <Link to="/project/thinkful">
      <Poster title="Thinkful" imageUrl={thinkful}>
        Thinkful WebSite Cloning
      </Poster>
    </Link>
  </Container>
);
