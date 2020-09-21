import React from "react";
import styled, { keyframes } from "styled-components";

import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/santiago.jpg";
import Loader from "../../Loader";
import device from "../../Device";

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to {
    opacity:1;
  }
  `;

const Container = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
  max-height: 200%;

  @media ${device.mobileL} {
    max-height: 200%;
  }
`;

const Question = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 10px;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

const Answer = styled.span`
  font-size: 20px;
  margin-bottom: 30px;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const InterviewPresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="引きこもり芸術家" imageUrl={myPhoto}>
      <Question> </Question>

      <Answer>
        &nbsp; &nbsp;&nbsp; &nbsp; 今しているプロジェクトは周りの生活が大変な芸術家を支援するためのシステムです。
        私は芸術家が芸術活動を通じて収益をもらえるシステムを作ろうと思います。
        消費者が依頼書を製作して上げると、その依頼書を見て芸術家たちが自分が欲しい価格で逆競売をします。
        一番欲しがっている芸術家が依頼をもらって、消費者は芸術家は二人で相談をするようになります。
        相談をして世界で一つしかない芸術作品を作って販売することになります。
        だったら、競売による価格競争力と、芸術家と消費者がともに作るハンドメイドの感じを与えることができます。
        このように、私は周りの芸術家を支援しようと思います。
      </Answer>

      
    </ProfileDetail>
  </Container>
);

export default InterviewPresenter;
