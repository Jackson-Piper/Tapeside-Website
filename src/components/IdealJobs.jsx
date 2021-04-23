import React from "react";
import ContentCard from "./ContentCard";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "react-bootstrap/container";

export default class IdealJobs extends React.Component {
  createData(name, role, compare, changed) {
    return { name, role, compare, changed };
  }

  rows = [
    this.createData(
      "Szedhane Goh",
      "Software Engineer",
      "Software will be needed for the application, especially a GUI or visual application. Also, able to perform testing prior to go-live.",
      "Being involved in software is the main objective and being able to test and evaluate other software is equally"
    ),
    this.createData(
      "Hans Mendoza",
      "Quality Assurance/Auditor",
      "Overall quality assurance is needed to ensure all systems that are being implemented are optimal before final release to production environment.",
      ""
    ),
    this.createData(
      "Jackson Piper",
      "Java Developer",
      "Can help verify and test code with Oscar, leading to less mistakes and cleaner code. Can also cover and help bounce ideas of the other team members.",
      "Jacksons original Ideal job was a Backend Developer job at Roam Creative, however after discussing with our team and having a better understanding of job requirements in IT, he Agreed that Java Developer was a better overall fit."
    ),
    this.createData(
      "Miles Wilson",
      "Service Delivery Manager",
      "Management to keep everyone on track is important, keeping KPI and SLA in mind, and helping work in an Agile Method and helping keep the team motivated.",
      "Ideally still want to be a Tech mogul, but still also very happy to be a manager, or team lead."
    ),
    this.createData(
      "Oscar Hurst",
      "Java Developer",
      "Can write code like a champion for the program, getting a framework in place for the team. Able to have a senior developer to assist others with code.",
      "Oscar still dreams of being a game developer but to develop this program he has accepted the role of being a Java Developer. Luckily enough the second job after being a game developer for Oscar is to be a desktop application developer so this is still well within his element."
    ),
  ];

  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Ideal Jobs</h2>
        </ContentCard>
        <Container>
          <TableContainer id="job-table" component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "white" }} align="center">
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    <strong>Ideal Role</strong>
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    <strong>How does this compare?</strong>
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="center">
                    <strong>Has this changed?</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      style={{ color: "white" }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell style={{ color: "white" }}>{row.role}</TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.compare}
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {row.changed}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  }
}
