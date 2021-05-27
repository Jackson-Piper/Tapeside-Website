import React from "react";
import ContentCard from "../components/ContentCard";
import ToolCard from "../components/ToolCard";
import Endnote from "../components/Endnote";
import Container from "react-bootstrap/Container";

import OutlookLogo from "../assets/images/tools/outlook.png";
import TeamsLogo from "../assets/images/tools/teams.webp";
import StreamLogo from "../assets/images/tools/stream.png";
import CanvasLogo from "../assets/images/tools/canvas.png";
import DiscordLogo from "../assets/images/tools/discord.png";
import GitHubLogo from "../assets/images/tools/github.png";
import VSCodeLogo from "../assets/images/tools/vscode.png";
import ReactLogo from "../logo.svg";
import ReactBootstrapLogo from "../assets/images/tools/reactbootstrap.png";
import MaterialUILogo from "../assets/images/tools/materialui.png";
import SassLogo from "../assets/images/tools/sass.png";

export default class Tools extends React.Component {
  render() {
    return (
      <Container>
        <ContentCard align="center" width="400px">
          <h2>Tools</h2>
        </ContentCard>
        <ToolCard
          tool="Microsoft Outlook"
          toolImage={OutlookLogo}
          link="https://outlook.live.com/owa/"
        >
          <p>
            Outlook was used in parallel with Microsoft Teams as a planning and
            organisation method for the team. Since the beginning of the project
            meeting notes and task allocation have been divided up through the
            web-based email platform and important data sharing as well. It also
            has provided a secondary notification system for communicating in
            other forms as update emails are sent when messages are sent in the
            Teams app. It has allowed for a formal experience of a workplace
            environment.
          </p>
        </ToolCard>
        <ToolCard
          tool="Microsoft Teams"
          toolImage={TeamsLogo}
          link="https://www.microsoft.com/en-au/microsoft-teams/group-chat-software"
        >
          <p>
            Microsoft Teams is and was the backbone of TapeSides Tech DigiWave
            project as it allowed for instant communication to the direct
            members of our team. Almost daily we were updating each other and
            planning the next steps in the project as well as sharing files and
            the streams of meetings for those who missed them. The Task planner
            allowed for each member to know exactly what their job was and when
            it had to be completed by. Being able to edit each other’s files
            within the program meant that the work we have produced through it
            is not just a bunch of sperate peoples but instead a team effort.
          </p>
        </ToolCard>
        <ToolCard
          tool="Microsoft Stream"
          toolImage={StreamLogo}
          link="https://www.microsoft.com/en-au/microsoft-365/microsoft-stream"
        >
          <p>
            The ability to stream and record the meetings has been paramount to
            the success of our project. Using MS Stream multiple times, a week
            has allowed for our group members to stay in contact and up to date
            with each other. The recording feature of this application has
            allowed team members such as Jackson or Hans, who have been unable
            to attend multiple meetings due to work and other conflicts the
            ability to watch and understanding the planning and though process
            behind the team decisions.
          </p>
        </ToolCard>
        <ToolCard
          tool="Canvas"
          toolImage={CanvasLogo}
          link="https://www.instructure.com/en-au/canvas"
        >
          <p>
            The canvas calendar has been the last backup in terms of planning
            the teams’ meetings and due dates for steps of the project. The
            calendar has kept us up to date with meeting times and
            availabilities while also allowing us to be aware of our own
            educational workload and other due dates around the assignment.
            While the calendar itself can be sometimes confusing Miles has made
            sure to keep a concerted effort to keep our team plans up to date on
            it.
          </p>
        </ToolCard>
        <ToolCard
          tool="Discord"
          toolImage={DiscordLogo}
          link="https://discord.com/"
        >
          <p>
            Discord is a VOIP program that allows for voice calls, video calls,
            instant messaging, screen sharing and file sharing. This application
            was key in the creation of TapeSide Tech as it is where most of the
            members reached out to each other to create this Team. We are all
            part of the student run RMIT discord server and have due to our
            activity on there were drawn to each other. We used this application
            as the basis for founding our team.
          </p>
        </ToolCard>
        <ToolCard
          tool="GitHub"
          toolImage={GitHubLogo}
          link="https://github.com/"
        >
          <p>
            TapeSide Technologies uses GitHub to store the code for our website
            where we can all access it and allow collaboration on the website
            between all the team members. We also use GitHub for it’s version
            control so that everyone can see changes that have been made and if
            something goes wrong we can roll back to a stable version of the
            website.
            <br/>
            <br/>
            The TapeSide website is being hosted with the GitHub Pages service.
            We are using this service as it is free, and it integrates straight
            into our GitHub repository so we can see the deploy status straight
            on the repository home page which is helpful to confirm that a
            deploy has gone up properly and everything is working properly
            without errors.
          </p>
        </ToolCard>
        <ToolCard
          tool="Visual Studio Code"
          toolImage={VSCodeLogo}
          link="https://code.visualstudio.com/"
        >
          <p>
            Visual Studio Code is a lightweight text editor that is highly
            configurable and has a massive library of extensions to make
            development easier. All the website code has been written using VS
            Code. It has an integrated terminal for running scripts to run test
            versions of the site and to deploy a build of the website to GitHub
            Pages. The extensions that the community has made for VS Code can be
            incredibly helpful, such as extensions that automatically edits the
            closing HTML tag when the opening one is edited or formats your code
            for you.
          </p>
        </ToolCard>
        <ToolCard
          tool="React.JS"
          toolImage={ReactLogo}
          link="https://reactjs.org/"
        >
          <p>
            React.JS is an open-source JavaScript library developed by Facebook
            that is used for front-end web development and building reusable UI
            components.
            <br/>
            <br/>
            We use React.JS to develop our website as we can easily reuse
            components of the web pages and edit the parent component to ensure
            consistency throughout the entire website. It also reduces amount of
            code that needs to be written as the components are completely
            reusable.
            <br/>
            <br/>
            Another significant advantage to using React.JS is that it is one of
            the fastest web development frameworks currently available and it is
            important that our website is nice and fast so that the user
            experience is streamlined, rather than slow and encumbering.
          </p>
        </ToolCard>
        <ToolCard
          tool="React Bootstrap"
          toolImage={ReactBootstrapLogo}
          link="https://react-bootstrap.github.io/"
        >
          <p>
            React Bootstrap is the popular front-end framework, Bootstrap,
            rebuilt for React. It includes many components that implement
            Bootstrap and has been worked on for such a long time that it is one
            of the oldest React libraries, making it a greatly robust and
            matured library to use in web development with React. It is very
            similar to Material UI and is essentially another version of
            Material UI. We have chosen to use both React Bootstrap and Material
            UI as React Bootstrap is a much larger library and is built off the
            Bootstrap framework, which is a massive front-end framework, so
            React Bootstrap has many components that Material UI does not have,
            and Material UI has some components that React Bootstrap does not
            have.
          </p>
        </ToolCard>
        <ToolCard
          tool="Material UI"
          toolImage={MaterialUILogo}
          link="https://material-ui.com/"
        >
          <p>
            Material UI is a React.JS framework of customisable, pre-built
            components that are used to speed up the development of a website
            written in React. Material UI is used by large companies such as
            NASA, Netflix, Amazon, Shutterstock, and Spotify. This framework has
            been extremely helpful as we have access to more advanced components
            without needing to create them ourselves and then we can customise
            these components to look exactly how we want them to. This has
            greatly benefitted the look and usability of the website from both a
            user’s perspective, and a developer’s perspective.
          </p>
        </ToolCard>
        <ToolCard
          tool="SASS (SCSS)"
          toolImage={SassLogo}
          link="https://sass-lang.com/"
        >
          <p>
            According to Wikipedia
            <Endnote
              tooltip="i"
              placement="bottom"
              note="Sass (stylesheet language)"
              link="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
            />
            , “Sass is a preprocessor scripting language that is interpreted or
            compiled into Cascading Style Sheets. SassScript is the scripting
            language itself.”
            <br/>
            <br/>
            We have used Sass as a replacement to standard CSS as it is a more
            powerful form of CSS with more features and is easier to write. Sass
            has been around for 14 years and is therefore very well matured and
            stable. The added power of Sass was something that we wanted to tap
            into for the website as we are customising prebuilt components
            finely and want to be able to simplify that process by using the
            tools provided by Sass.
          </p>
        </ToolCard>
      </Container>
    );
  }
}
