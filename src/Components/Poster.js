import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import device from "./Device";

const BgImg = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center top;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: 9;
  border-radius: 20px;
  transition: transform 0.5s ease-in-out;

  @media ${device.mobileL} {
    display: none;
    position: static;
  }
`;

const Container = styled.div`
  background-color: #273747;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    ${BgImg} {
      transform: scale(0.5) translateY(-100px);
    }
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 50px;
    position: static;
    text-align: center;
    margin-bottom: 50px;
    background-color: #e67e22;
    padding: 30px;
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
  background-color: black;

  @media ${device.mobileL} {
    position: static;
    padding: 0;
    background-color: #e67e22;
  }
`;

const Title = styled.span`
  font-size: 30px;
`;

const Description = styled.span`
  margin-top: 10px;
  font-size: 15px;

  @media ${device.mobileL} {
    display: none;
  }
`;

const Poster = ({ title, imageUrl, children }) => (
  <Container>
    <BgImg imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </Content>
  </Container>
);

Poster.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Poster;
