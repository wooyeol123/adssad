import React from "react";
import kakao from "../../../images/kakao.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.04 ~ 2019.05",
  "html, css, Javascript(ES6)",
  "반응형, CSS design",
  "kakao talk을 cloning 함으로써, html, css ,javaScript의 기본기를 익혔으며, class 작명 센스능력을 길렀습니다."
];

export default () => (
  <ProjectDetail
    title="Kokoa talk"
    imageUrl={kakao}
    webUrl="https://giseokkang.github.io/kakao-clone-v2/"
    GithubUrl="https://github.com/Giseokkang/kakao-clone-v2"
  >
    {children}
  </ProjectDetail>
);
