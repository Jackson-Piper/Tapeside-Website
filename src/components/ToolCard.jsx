import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";

export default class ToolCard extends React.Component {
  render() {
    return (
      <div>
        <Card id="card-custom">
          <CardContent id="card-custom-content">
            <Accordion id="accordion-custom">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={{ color: grey[50] }}
                    fontSize="large"
                  />
                }
              >
                <strong>{this.props.tool}</strong>
              </AccordionSummary>
              <AccordionDetails>{this.props.children}</AccordionDetails>
            </Accordion>
          </CardContent>
          <div style={{ display: "block" }}>
            <CardMedia
              id="card-custom-media"
              image={this.props.toolImage}
              title={this.props.tool}
            />
            <CardActions>
              <Button
                href={this.props.link}
                target="_blank"
                size="large"
                style={{ color: "white", backgroundColor: "#2c3136" }}
              >
                Learn More
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
    );
  }
}
