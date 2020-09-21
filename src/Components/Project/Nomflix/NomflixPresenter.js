import React from "react";
import nomflix from "../../../images/nomflix.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.07 ~ 2019.08",
  "ReactJS, Javascript(ES6), NodeJS, Axios, AJAX, styled component, TMDB API",
  "인기 영화 또는 티비쇼 정보 열람, 검색 기능, 예고편 열람, 시리즈 정보 열람",
  "TMDB API를 이용해 SPA movie Application를 제작하였습니다. 이 과정을 통해 React의 구조 및 lifecycle를 파악하게 되었으며, SPA의 장단점에 대해 알게되었습니다."
];

export default () => (
  <ProjectDetail
    title="Nomflix"
    imageUrl={nomflix}
    webUrl="https://laughing-villani-11c8fc.netlify.com/"
    GithubUrl="https://github.com/Giseokkang/nomflix"
  >
    {children}
  </ProjectDetail>
);
