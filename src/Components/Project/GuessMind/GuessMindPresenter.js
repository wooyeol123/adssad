import React from "react";
import guessmind from "../../../images/guessmind.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.06 ~ 2019.07",
  "pug, scss, JavaScript(ES6), NodeJS, SoketIO, Gulp, heroku",
  "실시간 채팅, 실시간 Painting Game 기능, 파일 저장",
  "SocketIO를 이용한 실시간 게임 입니다. 2명이상일때 게임이 시작되며, 타이머를 이용해 시간 제한을 두었습니다. 테스트를 원하시는 경우 Chrome Secret tab을 이용하시면 됩니다."
];

export default () => (
  <ProjectDetail
    title="Guess Mind"
    imageUrl={guessmind}
    webUrl="https://powerful-everglades-98496.herokuapp.com/"
    GithubUrl="https://github.com/Giseokkang/guess-mine"
  >
    {children}
  </ProjectDetail>
);
