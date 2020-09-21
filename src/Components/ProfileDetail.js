import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { FiChevronsLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import device from "../Components/Device";

const fadeIn = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.3s linear;
  position: relative;
  max-height: 200%;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    height: 100%;
  }
`;

const Title = styled.span`
  width: 400px;
  text-align: center;
  font-size: 50px;
  margin: 50px 0px 20px 0px;
  padding-bottom: 20px;
  border-bottom: 5px solid red;

  @media ${device.mobileL} {
    font-size: 30px;
    margin: 0;
    margin-top: 40px;
  }
`;

const DataContainer = styled.div`
  display: flex;
  padding: 50px 50px;
  border-radius: 20px;

  @media ${device.laptop} {
    padding: 30px 50px;
  }
`;

const Image = styled.div`
  background-image: url(${probs => probs.imageUrl});
  background-position: center center;
  background-size: cover;
  width: 330px;
  height: 550px;
  border-radius: 20px;
  margin-right: 30px;
  animation: ${fadeIn} 0.5s linear;

  @media ${device.laptop} {
    display: none;
  }
`;

const Description = styled.span`
  display: flex;
  flex-direction: column;
  width: 700px;
  font-size: 20px;
  margin-left: 30px;

  @media ${device.laptop} {
    width: 100%;
    margin: 0 auto;
  }
`;

const BackLink = styled(Link)`
  font-size: 150px;
  position: absolute;
  left: 5%;
  top: 45%;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transform: scale(0.98);
  }

  @media ${device.laptop} {
    font-size: 100px;

    top: 5%;
    left: 5%;
  }

  @media ${device.tablet} {
    font-size: 80px;
    top: 2%;
    left: 5%;
  }

  @media ${device.mobileL} {
    font-size: 50px;
  }
`;

const ProfileDetail = ({ title, imageUrl, children }) => (
  <Container>
    {/* <BgImg /> */}
    <BackLink to="/profile">
      <FiChevronsLeft />
    </BackLink>
    <Title>{title}</Title>
    <DataContainer>
      <Image imageUrl={imageUrl} />
      <Description>{children}</Description>
    </DataContainer>
  </Container>
);

ProfileDetail.prototype = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ProfileDetail;
