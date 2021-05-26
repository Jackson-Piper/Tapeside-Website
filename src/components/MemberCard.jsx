import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import grey from "@material-ui/core/colors/grey";

export default class MemberCard extends React.Component {
  render() {
    return (
      <div>
        <Card id="card-custom">
          <CardContent id="card-custom-content">
            <Accordion id="accordion-custom">
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: grey[50] }} fontSize="large" />}>
                <h5><strong>
                  {this.props.firstName} {this.props.lastName} | {this.props.studentID}
                </strong></h5>
              </AccordionSummary>
              <AccordionDetails>{this.props.description}</AccordionDetails>
              <AccordionDetails>{this.props.personality}</AccordionDetails>
              <AccordionDetails><strong>Assessment 1 Mark</strong>: {this.props.mark}/100</AccordionDetails>
            </Accordion>
            <Accordion id="accordion-custom">
              <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: grey[50] }} fontSize="large" />}>
                <h5><strong>
                  {this.props.firstName}'s Career Plans
                </strong></h5>
              </AccordionSummary>
              <AccordionDetails>{this.props.description}</AccordionDetails>
            </Accordion>
          </CardContent>
          <CardMedia
            id="card-custom-media"
            image={this.props.profileImage}
            title={this.props.name}
          />
        </Card>
      </div>
    );
  }
}
