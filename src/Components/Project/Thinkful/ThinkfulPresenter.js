import React from "react";

import thinkful from "../../../images/thinkful.jpg";
import ProjectDetail from "../../ProjectDetail";

const children = [
  "2019.04 ~ 2019.05",
  "HTML, CSS",
  "Html structure, CSS design",
  "https://www.thinkful.com/ 사이트를 Cloning 함으로써, HTML구조와 CSS의 숙련도를 높였습니다."
];

export default () => (
  <ProjectDetail
    title="Thinkful"
    imageUrl={thinkful}
    webUrl="https://giseokkang.github.io/thinkful-clone/"
    GithubUrl="https://github.com/Giseokkang/thinkful-clone"
  >
    {children}
  </ProjectDetail>
);
