import React from "react";
import ContentCard from "./ContentCard";

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center">
          <h2>IT Work</h2>
        </ContentCard>
        <ContentCard align="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bSXDW07oKZQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ContentCard>
      </div>
    );
  }
}
