import React from "react";
import styled from "styled-components";
import icon from "../images/icon.gif";

const Loader = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 20px;
  background-image: url(${icon});
  background-position: center center;
  background-size: cover;
  background-color: black;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export default () => <Loader />;
