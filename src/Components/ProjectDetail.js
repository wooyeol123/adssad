import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import device from "./Device";

const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const scale = keyframes`
  from{
    transform: translateX(-1000px) scale(0.1)
  }
  to{
     transform:translateX(0)
}
`;

const Container = styled.div`
  height: calc(100vh - 60px);
  animation: ${fadeIn} 0.5s linear;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e272e;
  max-height: 200%;
`;

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-size: cover;
  background-position: center top;
  filter: blur(5px);
  opacity: 0.3;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  max-height: 200%;
`;

const ContentContainer = styled.div`
  width: 50%;
  height: 90%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  z-index: 5;
  border-radius: 50px;
  color: black;
  position: relative;
  animation: ${scale} 0.7s ease-in-out;

  @media ${device.laptop} {
    width: 85%;
  }

  @media ${device.mobileL} {
    width: 85%;
    height: 600px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  width: 100%;

  @media ${device.mobileL} {
    padding: 0 30px;
  }
`;

const Title = styled.span`
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 20px 0px;

  @media ${device.laptop} {
    margin-top: 0;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    font-size: 2em;
  }

  @media ${device.mobileL} {
    font-size: 27px;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

const ContentTitle = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 150px;
  border-bottom: 3px solid #1e272e;
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 1.5em;
  }

  @media ${device.mobileL} {
    margin-bottom: 7px;
    font-size: 15px;
  }
`;

const Description = styled.span`
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 30px;

  @media ${device.mobileL} {
    margin-bottom: 20px;
    font-size: 13px;
    line-height: 20px;
  }
`;

const LinkContaier = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  right: 0;

  @media ${device.mobileL} {
    bottom: 20px;
  }
`;

const WebLink = styled.div`
  text-align: center;
  padding: 10px 20px;
  width: 100px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #3498db;
  color: white;
  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const GitLink = styled.div`
  text-align: center;
  padding: 10px 20px;
  width: 100px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #464646;
  color: white;

  opacity: 0.8;
  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }
`;

const BgLink = styled(Link)`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  cursor: default;
`;

const ProjectDetail = ({ title, imageUrl, children, webUrl, GithubUrl }) => (
  <Container>
    <BgLink to="/project">
      <BgImg imageUrl={imageUrl} />
    </BgLink>
    <ContentContainer>
      <Title>{title}</Title>
      <ItemContainer>
        <ContentTitle>제작 시기</ContentTitle>
        <Description>{children[0]}</Description>

        <ContentTitle>사용 기술</ContentTitle>
        <Description>{children[1]}</Description>

        <ContentTitle>주요 기능</ContentTitle>
        <Description>{children[2]}</Description>

        <ContentTitle>설명</ContentTitle>
        <Description>{children[3]}</Description>
        <LinkContaier>
          <a href={webUrl} target="_blank" rel="oopener noreferrer">
            <WebLink>WebSite</WebLink>
          </a>
          <a href={GithubUrl} target="_blank" rel="oopener noreferrer">
            <GitLink>Github</GitLink>
          </a>
        </LinkContaier>
      </ItemContainer>
    </ContentContainer>
  </Container>
);

ProjectDetail.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
  GithubUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProjectDetail;
