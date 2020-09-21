import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/me.jpg";
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

const Motto = styled.span`
  font-size: 30px;
  text-align: center;
  padding: 0px 50px 30px 50px;
  font-weight: 600;
  line-height: 40px;
  color: white;

  @media ${device.mobileL} {
    font-size: 20px;
    line-height: 25px;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const SayHello = styled.span`
  font-size: 25px;
  text-align: center;
  font-weight: 500;

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

const Description = styled.span`
  font-size: 20px;
  line-height: 35px;

  @media ${device.mobileL} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const IntroducePresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="自己紹介" imageUrl={myPhoto}>
      <Motto>
        {" "}
        私について <br />
         
      </Motto>
      {/* <SayHello></SayHello> */}
      <Description>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;私はキム・ウヨルと申します。
        2年前に中国上海交通大学を卒業しました。 以前ビッグデータを学ぶ機会があり、
        IT業界に興味を持つようになりました。また私はどんなことを見ても疑問を抱く人です。
        商品を見ても、それがなぜこうやって作るんだろうか、なぜそうだろうかなどを考えるようになりました。
        私はいつも消費者の立場ですから、消費者の観点で考えるのですが、
        私は消費者の立場ではなく、生産者の立場でも考えます。
        ITとその考えを合わせてもっと便利なプログラムが作りたいです。
        御社の力になってプログラマーから、エンジニアまで成長して働きたいです
        <br />
      </Description>
    </ProfileDetail>
  </Container>
);

export default IntroducePresenter;
