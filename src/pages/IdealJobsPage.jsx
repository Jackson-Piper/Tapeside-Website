import React from "react";
import Header from "../components/Header";
import IdealJobs from "../components/IdealJobs";
import Footer from "../components/Footer";

export default class IdealJobsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <IdealJobs />
        <Footer />
      </div>
    );
  }
}
