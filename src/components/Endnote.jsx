import React from "react";
import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

export default class Endnote extends React.Component {
  render() {
    return (
      <div>
        <OverlayTrigger
          key={this.props.placement}
          placement={this.props.placement}
          overlay={
            <Tooltip id={`tooltip-${this.props.placement}`}>
              {this.props.note}
            </Tooltip>
          }
        >
          <Button
            disabled={this.props.disabled}
            href={this.props.link}
            target="_blank"
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <sup>[{this.props.tooltip}]</sup>
          </Button>
        </OverlayTrigger>
      </div>
    );
  }
}
