import React from "react";
import mybluejay from "../../../images/mybluejay.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.10 ~ 2019.12",
  "React, NextJS, NodeJS, Redux, Redux-saga,Styled Components, SSR, Mysql, Sequelize, AWS s3, AWS EC2, AWS Route 53",
  "게시글 CRUD 및 좋아요 댓글 기능, 프로필 기능, 해쉬테그 검색 기능, infinite scroll",
  "기존에 존재하는 SNS를 Cloning함으로써, 전반적인 기술력을 늘렸으며, Redux, Redux-saga의 기능을 활용하여 비동기 상태 관리의 노하우들을 배웠습니다."
];

export default () => (
  <ProjectDetail
    title="MyBlueJay"
    imageUrl={mybluejay}
    webUrl="http://mybluejay.net/"
    GithubUrl="https://github.com/Giseokkang/mybluejay"
  >
    {children}
  </ProjectDetail>
);
