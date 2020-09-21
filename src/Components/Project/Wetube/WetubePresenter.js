import React from "react";
import wetube from "../../../images/wetube.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.05 ~ 2019.07",
  "Pug, Scss, Webpack, Javascript, NodeJS, Express, passport, MongoDB, Mongoose, heroku, AWS S3, RESTAPI",
  "Social Login기능, 동영상 UI, 동영상 및 게시글 CRUD, 댓글, 녹화 기능, 조회수, 검색, 프로필",
  " REST API로 동영상 CRUD, passport를 통한 Facebook, Github 로그인이 기능이 있습니다. 사용자 ID를 비교하여 동영상 관리가 가능하며, 여러 편의를 위한 UI가 구성되어 있습니다."
];

export default () => (
  <ProjectDetail
    title="Wetube"
    imageUrl={wetube}
    webUrl="https://frozen-scrubland-99246.herokuapp.com/"
    GithubUrl="https://github.com/Giseokkang/wetube"
  >
    {children}
  </ProjectDetail>
);
