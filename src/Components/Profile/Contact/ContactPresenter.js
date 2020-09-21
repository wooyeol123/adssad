import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/endoftheworld.jpg";
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
  @media ${device.mobileL} {
    max-height: 200%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  @media ${device.mobileL} {
    margin: 0;
  }
`;

const Title = styled.span`
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media ${device.mobileL} {
    font-size: 30px;
    text-align: center;
  }
`;

const Desc = styled.span`
  font-size: 25px;
  margin-bottom: 15px;

  @media ${device.mobileL} {
    font-size: 15px;
    text-align: center;
  }
`;

const ContactPresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="Contact" imageUrl={myPhoto}>
      <ContentContainer>
        <Title>Email</Title>
        <Desc>anvkf123456@naver.com</Desc>
        <Title>Phone</Title>
        <Desc>0082 - 010 - 8795 - 2638</Desc>
        <Title>github</Title>
        <Desc>https://github.com/wooyeol123</Desc>
      </ContentContainer>
    </ProfileDetail>
  </Container>
);

export default ContactPresenter;
