import React from "react";
import ContentCard from "../components/ContentCard";
import Container from "react-bootstrap/Container";

export default class Tools extends React.Component {
  render() {
    return (
      <Container>
        <ContentCard align="center" width="400px">
          <h2>Tools</h2>
        </ContentCard>
        <ContentCard>
          <h4><b>Links</b></h4>
          <a target="_blank" href={"https://jackson-piper.github.io/Tapeside-Website/"}>Team website</a>
          <br/>
          <a target="_blank" href={"https://github.com/Jackson-Piper/Tapeside-Website"}>Team website code</a>
          <br/>
          <a target="_blank" href={"https://github.com/Voidoz/Project-Yeast"}>Project code</a>
        </ContentCard>
        <ContentCard>
          <h4><b>Audit Trail</b></h4>
          <p>

          </p>
        </ContentCard>
      </Container>
    );
  }
}
