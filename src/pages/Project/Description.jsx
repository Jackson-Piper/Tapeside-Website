import React from "react";
import ContentCard from "../../components/ContentCard";

export default class Description extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Description</h2>
        </ContentCard>
        <ContentCard>
          <h1></h1>
          <br/>
          <p>

          </p>
        </ContentCard>
      </div>
    );
  }
}
