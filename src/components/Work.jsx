import React from "react";
import ContentCard from "./ContentCard";

export default class Work extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>IT Work</h2>
        </ContentCard>
        <ContentCard align="center">
          <p>
            <strong>Who have we interviewed:</strong>
            <br />
            Nathan O’Brien
            <br />
            <br />
            <strong>What does he do? </strong>
            <br />
            QGC IT Manager
            <br />
            <br />
            <strong>What is QGC?</strong>
            <br />
            QGC is the Queensland Gas Company, which is a subsidiary of Shell
            Australia. There are 2 main parts to the business, Upstream where
            the gas is mined and Midstream where it is refined and sold.
            Nathans’s role in the business is to manage the IT across both
            assets.
            <br />
            <br />
            <strong>How does IT come into the mining sector?</strong>
            <br />
            During both processes (production and refinement) there are IT
            requirements like in any industry, across every facet of production.
            From simple Wi-Fi in the offices, to monitoring software, alert and
            alarm systems, devices such as tablets for mobile workers and
            laptops for desk and technical staff. There are also industry
            specific applications which may even be created solely for use in
            QGC, not to mention broader systems that are globally utilized such
            as SAP. All of this must be managed to make sure everything works
            properly and efficiently to minimize the workers downtime and
            maximize production.
            <br />
            <br />
            <strong>Why did the team ask Nathan? </strong>
            <br />
            We chose to speak with Nathan as he has been working in IT for many
            years and has gone from strength to strength. He has the experience
            of a “boots on the ground” worker right up to management, a rare
            combination that offers a powerful insight to all levels of IT
            within the industry. We felt that someone like Nathan would show the
            kind of scope that a career in IT can provide.
          </p>
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
