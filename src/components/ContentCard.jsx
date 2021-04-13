import React from "react";
import Paper from "@material-ui/core/Paper";

export default class ContentCard extends React.Component {
  render() {
    return (
      <Paper class="contentBox" elevation={3} style={{textAlign: this.props.align, }}>
        {this.props.children}
      </Paper>
    );
  }
}
