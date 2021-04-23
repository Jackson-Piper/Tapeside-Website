import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "react-bootstrap/Container";

export default class ContentCard extends React.Component {
  render() {
    return (
      <Container style={{ maxWidth: this.props.width || "1500px" }}>
        <Paper
          class="contentBox"
          elevation={3}
          style={{ textAlign: this.props.align }}
        >
          {this.props.children}
        </Paper>
      </Container>
    );
  }
}
