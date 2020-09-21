import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: rgba(20, 20, 20, 0.8);
  color: white;
  font-size: 20px;
  position: fixed;
  top: 0;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const SLink = styled(Link)`
  padding: 15px 20px;
  border-bottom: 5px solid ${probs => (probs.current ? "red" : "transparent")};
  transition: border 0.3s linear;
  opacity: ${probs => (probs.current ? 1 : 0.6)};

  &:hover {
    opacity: 1;
  }
`;

export default withRouter(({ location: { pathname } }) => (
  <Container>
    <SLink to="/" current={pathname === "/"}>
      Home
    </SLink>
    <SLink to="/profile" current={pathname === "/profile"}>
      Profile
    </SLink>
    {/* <SLink to="/project" current={pathname === "/project"}>
      Project
    </SLink> */}
  </Container>
));
