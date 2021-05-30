import React from "react";
import ContentCard from "../components/ContentCard";
import Container from "react-bootstrap/Container";

import CCS from "../assets/images/project/CCS.png"
import CP from "../assets/images/project/CP.png"
import QA from "../assets/images/project/QA.png"
import UDB from "../assets/images/project/UDB.png"

export default class SkillsJobs extends React.Component {
  render() {
    return (
      <Container>
        <ContentCard align="center" width="400px">
          <h2>Skills and Jobs</h2>
        </ContentCard>
        <ContentCard>
          <p>
            4 positions to take the project to the next phase.
            <br/>
            <br/>
            <u>Cloud Computing Specialist:</u>
            <br/>
            This project is very data dense having so much information stored in one device would make data processing
            quite slow and information could be relayed on a slower rate than usual. If this project were to take the
            next step it would be to have more and more capability to store data, cloud computing and its glory would
            allow for more information about different environments and temperatures to be stored inside the devices
            allowing more data to be accessible to people, which in return would let people have more suitable brewing
            opportunities. The cloud computing specialist would need to have a deeper knowledge in SaaS & IaaS, the
            specialist’s expertise would be used to create an infrastructure that allows more than one device to be
            connected to the same network allowing all information to be accessible, the understanding of the Software
            as a Service would be needed to allow different sensor reading to be kept in the large network of data. This
            cloud computing specialist would need to understand how a brewing process is worked and be able to talk to
            the original team on how the stored data is being brought to the users. Someone like this would need to be
            AWS certified, preferably with at least 1 year experience in setting up AWS intergrations.
            <br/>
            <br/>
            Example of this role would be:
            <br/>
            <br/>
            <a target="_blank"
               href={"https://www.seek.com.au/job/52296021?type=standard#searchRequestToken=463566cf-3181-40bf-9e9d-8f5383ab2fac"}>AWS
              Cloud Engineer Job in Sydney - SEEK</a>
            <br/>
            <br/>
            <img src={CCS}/>
            <br/>
            <br/>
            <u>Content Planner:</u>
            <br/>
            <br/>
            The importance of having a content planner is very high, with taking this project to the next level of app
            development the significance of someone being able to plan out how topics need to be addressed is vital.
            Developing an application needs many issues and feedback to be covered on how to improve the application,
            creating a content plan to have issues, feedback from users and quality assurance to be covered is not an
            easy feat and hence that why having a content planner creating, organising as well as communicating
            instructions to take this project to the next level is very important. The influence that having someone
            listening to feedback and relaying to the information to the development team is one that is high and very
            crucial because with a good content plan / planner you can ensure that the effort being put into the further
            development of the app will return in reliable results. The content planner will need a deep understanding
            of team communications and behaviour they would also need to have the necessary technical knowledge of how
            the applications works, the technologies used and what the objective is for the app. This could also fall
            under Project Management, so ideally someone with PMP and/or Agile Certified Practitioner certifications
            would be desirable. While there is no “minimum experience time” at least a portfolio containing 3-4
            completed projects would be recommended.
            <br/>
            <br/>
            <a target={"_blank"} href={"https://www.pmi.org/certifications/agile-acp"}>Agile Certified Practitioner |
              PMI-ACP</a>
            <br/>
            <br/>
            <img src={CP}/>
            <br/>
            <br/>
            <u>Quality Assurance:</u>
            <br/>
            <br/>
            Quality assurance is a must for taking this project into a more developed level, high quality products is
            what makes anything valuable, and this project can be a valuable asset to a number of people and businesses.
            Quality assurance is used for the project to double check that the sensors are up to date, to ensure that
            the hardware being used in suitable for the environments that it will eventually be in and to enable that
            all systems are go for usage. With quality assurance being an important asset to the growth of the project
            the person holding the title of quality assurance will need a very large knowledge into Raspberry Pi,
            Ardunio, ISpindel and an addition knowledge on how the brewing process is worked / used. This person would
            need the managerial skills to give back constructive feedback to the development team this is vital to the
            development to the project because without the constructive feedback from the quality assurance ranks the
            projects improvements will take a slower approach due to the lack of professionalism. For this role it
            wouldn’t need to be a management or senior role but at least someone who has experience in the field, such
            as a Quality Assurance Engineer.
            <br/>
            <br/>
            <a target={"_blank"}
               href={"https://www.seek.com.au/job/52306419?type=standout#searchRequestToken=db9e9201-0d5b-4202-ada5-87fd9c74a6bd"}>QA
              Engineer Job in Sydney - SEEK</a>
            <br/>
            <br/>
            <img src={QA}/>
            <br/>
            <br/>
            <u>UI Designer/Builder:</u>
            <br/>
            <br/>
            A graphical user interface designer/builder would have to be the biggest development into taking the project
            to the next level. The project now only has the sensors and readings available to the user but, if the
            application were usable on a phone app that would take the project further than it was designed to do,
            having a GUI builder creating an interface that can be applicable to mobile devices would be the ultimate
            goal because it makes this project easier to understand and more accessible to home brewers whoever wants to
            take their fermentation for beer to maximum accuracy for optimum taste. The builder would need to be able to
            build an interface that shows the live readings and also be able to alert the user if the temperature needs
            to be changed. The necessary skills needed for this GUI builder are that they need have knowledge in
            wireframing and be able to input all data from the project. This role is very important and having team
            skills like working with the programmers to input all the data collecting is necessity and having the
            innovative thinking of implementing different ways of alerting user of the change in reading is vital
            knowledge in implementing software like ioBridge API is also very good addition as this application allows
            users to collect data and receive alerts. A person for this role would need to have experience in coding,
            programming languages such as Python and C++ but also systems such as Sketch and InDesign.
            <br/>
            <br/>
            <a target={"_blank"}
               href={"https://www.seek.com.au/job/52132961?type=standout#searchRequestToken=74b586ce-6e9c-40fc-a82c-f67f389deed0"}>UX/UI
              Designer Job in Brisbane - SEEK</a>
            <br/>
            <br/>
            <img src={UDB}/>
          </p>
        </ContentCard>
      </Container>
    );
  }
}
