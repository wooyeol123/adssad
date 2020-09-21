import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Profile from "./Profile";
import Introduce from "./Profile/Introduce";
import Technologies from "./Profile/Technologies";
import Interview from "./Profile/Interview";
import Contact from "./Profile/Contact";
import Project from "./Project";
import MyblueJay from "./Project/MyBlueJay";
import Wetube from "./Project/Wetube";
import GuessMind from "./Project/GuessMind";
import Kakaotalk from "./Project/Kakaotalk";
import Nomflix from "./Project/Nomflix";
import Thinkful from "./Project/Thinkful";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/introduce" exact component={Introduce} />
        <Route path="/profile/technologies" exact component={Technologies} />
        <Route path="/profile/interview" exact component={Interview} />
        <Route path="/profile/contact" exact component={Contact} />

        <Route path="/project" exact component={Project} />
        <Route path="/project/mybluejay" exact component={MyblueJay} />
        <Route path="/project/wetube" exact component={Wetube} />
        <Route path="/project/guessmind" exact component={GuessMind} />
        <Route path="/project/kakaotalk" exact component={Kakaotalk} />
        <Route path="/project/nomflix" exact component={Nomflix} />
        <Route path="/project/thinkful" exact component={Thinkful} />
      </Switch>
    </>
  </Router>
);
