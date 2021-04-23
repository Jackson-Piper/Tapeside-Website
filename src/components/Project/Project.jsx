import React from "react";
import ContentCard from "../ContentCard";
import Overview from "./Overview";
import Motivation from "./Motivation";
import Description from "./Description";
import ToolsTech from "./ToolsTech";
import Skills from "./Skills";
import Outcome from "./Outcome";

export default class Project extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Project</h2>
        </ContentCard>

        <Overview />

        <Motivation />

        <Description />

        <ToolsTech />

        <Skills />

        <Outcome />
      </div>
    );
  }
}
