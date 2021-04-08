import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

export default class Endnote extends React.Component {
  render() {
    return (
      <OverlayTrigger
        key={this.props.placement}
        placement={this.props.placement}
        overlay={
          <Tooltip id={`tooltip-${this.props.placement}`}>
            {this.props.note}
          </Tooltip>
        }
        style={{display: "inline"}}
      >
        <Button
          disabled={this.props.disabled}
          href={this.props.link}
          target="_blank"
          id="endnote-button"
        >
          <sup>[{this.props.tooltip}]</sup>
        </Button>
      </OverlayTrigger>
    );
  }
}
