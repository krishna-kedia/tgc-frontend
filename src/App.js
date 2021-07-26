/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/HomePage/home.page";
import TeamPage from "./pages/TeamPage/team.page";
import AllComponents from "./pages/allcomponents";
import IndividualChapter from "./pages/IndividualChapter/individualchapter.page";
import JoinUs from "./pages/JoinUsPage/joinus.page";
import Workshop from "./pages/WorkshopPage/workshop.page";
import Chapter from "./pages/ChapterPage/chapter.page";
import IndWorkshop from "./pages/IndWorkshopPage/IndWorkshop.page";
import BuildPrevious from "./pages/Build/build.notactive.component";
import BuildActive from "./pages/Build/build.active.component";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/workshops" component={Workshop} />
        <Route exact path="/all" component={AllComponents} />
        {/* <Route exact path="/form" component={Form} /> */}
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/chapter/:chapterId" component={IndividualChapter} />
        <Route exact path="/joinus" component={JoinUs} />
        <Route exact path="/" component={Home} />
        <Route exact path="/chapter" component={Chapter} />
        <Route exact path="/workshop/:workshopId" component={IndWorkshop} />
        <Route exact path="/buildnotactive" component={BuildPrevious} />
        <Route exact path="/build" component={BuildActive} />
      </Router>
    );
  }
}

export default App;
