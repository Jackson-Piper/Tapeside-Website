import React from "react";
import ContentCard from "../../components/ContentCard";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

import Proto from "../../assets/images/project/Proto.png"
import Proto1 from "../../assets/images/project/proto1.png"

export default class Theory extends React.Component {
  createData(week, szedhane, hans, oscar, jackson, miles) {
    return {week, szedhane, hans, oscar, jackson, miles};
  }

  rows = [
    this.createData(
      "WK 1\nMilestone:\n\nassign task and have an idea on how to approach tasks.",
      "Meeting on assigning tasks to team.",
      "Meeting on assigning tasks to team.",
      "Meeting on assigning tasks to team.",
      "Meeting on assigning tasks to team.",
      "Meeting on assigning tasks to team.\n\nBrought up idea of having a home brewing device that helps in the fermentation process."
    ),
    this.createData(
      "WK 2\nMilestone:\n\nAgree on project idea, limitations and how to get started.",
      "Meeting on how to attack assigned tasks.\n\nBrought up how to approach presentation idea.",
      "Meeting on how to attack assigned tasks.\n\nAdded to presentation idea to be like news report, based on daily news and have TapeSide News be the news outlet.",
      "Meeting on how to attack assigned tasks.\n\nAdded to project idea that Raspberry Pi (R-Pi) and Arduino was needed to tackle the project idea.",
      "Meeting on how to attack assigned tasks.\n\nAssigned written tasks everyone and made individual tasks for everyone.",
      "Meeting on how to attack assigned tasks.\n\nStarted looking into Raspberry Pi (R-Pi from here on) and what it does."
    ),
    this.createData(
      "WK 3\nMilestone:\n\nStart working on written tasks and start creating / coding for the project.\n(device)",
      "Started working on research tasks.\n\nStarted working on the draft and storyboard.",
      "Market research, identifying current Technologies that are being used.",
      "Doing research on various programming languages, Python and C++ especially.",
      "N/A",
      "Researching existing devices and Technologies that are in use."
    ),
    this.createData(
      "WK 4\nMilestone:\n\nStart building device, research application side.",
      "Finished off 2/3 research task.",
      "N/A",
      "Added final coding to project for assignment functionality.",
      "Research how to build and use breadboards and electrical wiring.",
      "Purchased required parts – Raspberry Pi and various sensors."
    ),
    this.createData(
      "WK 5\nWork on presentation, prototype/proof of concept.",
      "Wrote up script for presentation.",
      "Researched database technologies",
      "Wrote scripts using Python to allow device to read sensor data.",
      "Find best cloud-based systems, such as AWS to host cloud data.",
      "Built and tested R-Pi and Sensor system, prototype completed."
    ),
    this.createData(
      "WK 6\nApplication and Database research.",
      "Finalised presentation, recording and editing, ready for investors.",
      "Applied database technologies, decided on AWS. Report written on why AWS is suitable.",
      "Once sensor data retrievable, application design research coding languages for app design.",
      "Start outline for AWS that best host the data for system, ideally Relational. Quotes drafted into written report.",
      "Testing in real world environment, additional prototype build with different/other parts in use."
    ),
    this.createData(
      "WK 7\nMilestone:\n\nProgress update applied research.",
      "Meetings with team to discuss project status, plan for next phase.\n\nResearching secure login services.",
      "Meetings with team to discuss project status, plan for next phase.\n\nContinue database research.",
      "Meetings with team to discuss project status, plan for next phase.\n\nSuggested AWS Timestream for Data collection",
      "Meetings with team to discuss project status, plan for next phase.",
      "Meetings with team to discuss project status, plan for next phase.\n\nTesting other similar products for integration purposes."
    ),
    this.createData(
      "WK 8\nMilestone:\n\nImplement App Technologies. Alpha testing underway.",
      "Adding inclusion to application for user login functionality, researching AWS Cognito",
      "Building database to have multiple brew options available.",
      "Application with GUI built for first phase alpha testing in non-production environment.",
      "Assisting with Application, ensuring App is communicating with device.",
      "Device upgraded to communicate with additional devices, such as Fridge control and Hydrometer."
    ),
    this.createData(
      "WK 9\nMilestone:\n\nApplication and Device in Beta test.",
      "Implement AWS Cognito, beta testing login phase and security.",
      "Database access tested and uploaded to allow app to pull data.",
      "Application enters beta testing. User Login testing, database access tested.",
      "Testing connectivity between R-Pi and App testing. Update report at weeks end.",
      "Program device to communicate with one device – fridge thermometer."
    ),
    this.createData(
      "WK 10\nMilestone:\n\nFinal test prior to “live” testing.",
      "App installed, testing access to database for data.",
      "Database information uploaded to allow testing.",
      "Final coding completed to allow for at least one brew and ready for live testing.",
      "Research additional Arduino to build companion device.",
      "Monitor real time data flow using both digital and analogue means to cross reference."
    ),
    this.createData(
      "WK 11\nMilestone:\n\nApp live, working with device in Beta, no major roadblocks.",
      "Research adding app to App Store/Play Store, report on requirements to have app listed and price point (if any).",
      "Add extra brews to database to allow multiple selections for users.",
      "Coding app to allow selection of different brew types to be selected, adding manual data input options.",
      "Building IoT device to control fridge, based on existing temp control technology but used with this device only.",
      "Work on programming R-Pi to speak to new IoT device for automated fridge/temp control based on data variables."
    ),
    this.createData(
      "WK 12\nMilestone:\n\nIt works!",
      "Meeting on App packaging, confirming App and Device communicate",
      "Meeting on App packaging, confirming App and Device communicate",
      "Meeting on App packaging, confirming App and Device communicate",
      "Meeting on App packaging, confirming App and Device communicate",
      "Meeting on App packaging, confirming App and Device communicate"
    ),
    this.createData(
      "WK 13\nMilestone:\n\nReproduce results.",
      "Building second and third R-Pi devices, as well as final stage beta testing on App, bug crashes to be reported.",
      "Building second and third R-Pi devices, as well as final stage beta testing on App, bug crashes to be reported.",
      "App has additional user features, such as error reporting and failsafe systems implemented, for example push notifications for brew warnings.",
      "IoT Device programmed to turn fermentation fridge, based on sensor data from Device.",
      "Device speaking to IoT Device, controlling the temperature automatically. Additional R-Pi and sensor units built for stress testing app and device."
    ),
    this.createData(
      "WK 14\nMilestone:\n\nRefine device and app for aesthetics.\n\nFailsafe data collection.",
      "Draw up design ideas for casing R-Pi and IoT device to appear more pleasing to the eye.",
      "Work on method to store data if network outage occurs so once reconnected all previous data can be viewed.",
      "App aesthetics refined, more user-friendly colours and logo design. Notification if network drops out.",
      "Refine R-Pi and IoT device to work together independent of Wi-Fi network connectivity.",
      "Ensure R-Pi and IoT device can work without Wi-Fi connection in the event of network outage."
    ),
    this.createData(
      "WK 15\nMilestone:\n\nFinal product ready for investors.",
      "Build new container for R-Pi and IoT so unit can be packaged and sent to potential investors.",
      "Finalise database failsafe information, implement data recovery plan.",
      "App 1.0 finished, tested and confirmed as working both with and without network connectivity.",
      "Build new container for R-Pi and IoT so unit can be packaged and sent to potential investors.",
      "Build new container for R-Pi and IoT so unit can be packaged and sent to potential investors."
    ),
    this.createData(
      "WK 16\nMilestone:\n\nProject Complete..... For now.",
      "Launch Party!",
      "Launch Party!",
      "Launch Party!",
      "Launch Party!",
      "Launch Party!"
    ),
  ];

  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Theory</h2>
        </ContentCard>
        <ContentCard>
          <h4><strong>Aims of Project: Yeast</strong></h4>
          <br/>
          <p>
            This project is for the home brewers who are looking to take their brews to the next level, for those that
            appreciate the creation of the sacred brew, for the many that “just want beer that tastes like real beer”
            and the craft beer snobs. The aim for this project is to help home brewers create the optimum fermentation
            environment when making beer. Its purpose, initially, is to remind and instruct users to change temperatures
            whilst in the process of the home brewing. Once the device and app was working as planned it would allow for
            full automation of this process with the users being able to simply monitor (a watched pot never boils!) the
            brews progress. This device would need the user to connect and run the system, as well as any equipment used
            in the brewing process, but this would be straightforward enough so long as they had a small amount of
            computer/gadget literacy. Within the brew, sensors would be used to detect any changes in the fermentation
            and internal data would be put into activated to alert the user that a change has been made to the brew, or
            if set to a manual option then to re-adjust the configuration of their setup.
            <br/>
            <br/>
            The goal of this device would be to help home brewers achieve the desired brew. The fermentation is THE MOST
            IMPORTANT step in the brewing process as it controls how the ale’s result will eventually be. A failed
            fermentation can produce off flavours, or worse become undrinkable. The device's goal is to read sensor data
            to see how well the yeast cells are performing within the brew. The key is to keep the consistency of the
            fermentation process at the optimum temperature which is usually around 18-22c, depending on the brew type.
            The reasoning behind keeping the temperature at this range is to produce the ester compounds from the yeast,
            the ester compounds are what gives the beer its flavour this is from the yeast growing and multiplying and
            that creates the ester compound. The yeast is available to create ester from yeast characteristics; wort
            composition and fermentation conditions and this project would assist in the fermentation process creating
            what people want which they “just want beer that tastes like real beer“. A simple process in theory, but in
            practice it has to be carefully monitored and maintained to ensure the final result can be placed into a mug
            and toasted amongst friends (responsibly!)
          </p>
        </ContentCard>
        <ContentCard>
          <h4><strong>Plans and Progress</strong></h4>
          <br/>
          <p>
            Originally, we started assignment 2 with an application for streamers to use to allow them to have music
            playing without risking copyright infringements against them, but the team decided that project wasn’t one
            that we all felt we could contribute and work on together. We bandied about a few different ideas such as a
            system that aggregated VOD (streaming services) into one central place and allowed users to select shows
            from a central hub that was in their paid stream selections. We discussed this idea but worried about
            copyright and the legality of a system like this. While it was an interesting idea it wasn’t something
            everyone had a great deal of interest in.
            <br/>
            <br/>
            After a bit of discussion, the group decided that a system to help with home brewing, specifically the
            fermentation side, would be both a challenge as well as interesting for everyone in the group. The basic
            idea was to have a system that could monitor temperature and emissions and then automate the temperature
            control side based on additional parameters. We knew there was a system –the BrewPi – as well as couple
            others that did temperature control, but it was based only on that - the temperature.
            <br/>
            <br/>
            No other system considered the yeast activity levels by measuring the carbon dioxide emissions as well as
            the alcohol vapour levels to perform automation.Thus, this new project idea was born. While we didn’t have a
            clever name for it, we simply called it “Project: Yeast”. Presently this name has not changed but a few
            ideas such as “FermenSensorPi” and Brew-o -Matic were thrown around.
            <br/>
            <br/>
            The first steps to even get this project started was to fork our original GitHub repository and strip out
            the unnecessary elements from Assignment 2.
            <br/>
            <br/>
            <b>Oscar</b> was the first to get underway with the theory side by the following:
            <br/>
            <br/>
            <b>Oscar:</b> “I have created the Java files we will need for the device and am currently writing comments
            and
            empty
            methods to then implement functionality after I know which sensors will be used and how to calculate the
            data. The next step I will be taking is creating configuration files. Once I have the data needed to add the
            sensor data collection, I will implement that and create calculations to be run.”At this point we knew we
            had the base line software and coding available, at least based on the research that had been done by Oscar.
            <br/>
            <br/>
            <b>Miles</b> then went online to try and see if an Arduino board or a Raspberry Pi would make for a better
            controller, upon finding some information online it turned out that there were multiple sensors for
            everything we had planned to implement. Air Quality sensors, Alcohol Vapour Sensors and of course
            Temperature sensors were all available and even in stock at local stores.
            <br/>
            <br/>
            <b>Miles</b> then went online to try and see if an Arduino board or a Raspberry Pi would make for a better
            controller, upon finding some information online it turned out that there were multiple sensors for
            everything we had planned to implement. Air Quality sensors, Alcohol Vapour Sensors and of course
            Temperature sensors were all available and even in stock at local stores.
            <br/>
            <br/>
            <b>Miles:</b> Made a digital prototype of the device using Raspberry Pi and Arduino parts. Have ordered the
            parts to
            build a functional Proof of Concept device then will do a brew to test systems. Started work on the write up
            part under tasks too.
            <br/>
            <br/>
            Completed “Tools Needed”
            <br/>
            <br/>
            Once a conceptual design was made, it needed to be brought into the physical world, so the parts were
            purchased:
            <br/>
            Raspberry Pi 3
            <br/>
            ½ size Breadboard
            <br/>
            Air Quality Sensor breakout board
            <br/>
            Temperature sensor breakout board
            <br/>
            Alcohol Sensor breakout board.
            <br/>
            Super Starter UNO R3 Kit (contained wiring and resistors etc.).
            <br/>
            We did have to wait for the Super Starter kit from Amazon, but it was a fairly quick delivery.
            <br/>
            <br/>
            During this time <b>Szedhane</b> and <b>Jackson:</b> Started a rough draft for a “TapeSide Technologies
            News” broadcast,
            explaining a little as to why the system was being created and its end goals.
            <br/>
            <br/>
            We did some further research to see if it was possible to build our own heat/cooling system but that turned
            out to be a gargantuan undertaking so that idea was dropped and left to the existing technologies.
            <br/>
            As the scope of this project grew and expanded, we did have a moment where we had to re-examine what the
            goal was going to be with our allocated timeframe. It had been originally planned to have a fully working
            prototype device AND rudimentary application to monitor the data, but we realised that the amount of
            research we were doing and with (for lack of a better term) an inexperienced team we would be lucky to build
            the prototype, let alone get full testing underway.
            <br/>
            <br/>
            <b>Miles:</b> Purchased Arduino components as well as soldering equipment. Downloaded Raspberry Pi OS to
            MicroSD
            card to push install once the prototype is ready to be worked on some more.
            <br/>
            <br/>
            Meanwhile, <b>Szedhane</b> and <b>Jackson</b> filmed their “News” segment and edited it.
            <br/>
            Also, during this, <b>Szedhane</b> wrote up the aims of this project as well as the as the roles required.
            He
            included some “dream team” job titles to show what level the ultimate finished product would need to have to
            be considered a professional and quality product.
            <br/>
            <br/>
            <b>Oscar:</b> Wrote up Tools and Tech document. Will begin on career plans document tomorrow as well as
            working on
            the website.He also took the time to find existing, open source, code for the various sensors so that he can
            program the device to read and interpret the data.
            <br/>
            <br/>
            <b>Miles:</b> has built the Project: Yeast device! It took a fair bit of research and ton of trial and error
            to
            achieve this, but we now have a physical device, complete with Raspberry Pi Operating System installed as
            well as a fully wired-up breadboard with all the breakout boards wired in:
            <img src={Proto}/>
            <br/>
            As well as a prototype:
            <br/>
            <img src={Proto1}/>
            <br/>
            <br/>
            This isn't the ideal spot for the device but given it is a prototype and doesn’t have a housing this would
            have to suffice.
            <br/>
            While the prototype has been built, we were unable to get testing done properly as the team is located all
            over Australia and <b>Miles</b> works away from home, the device couldn’t be shipped safely or in time to be
            programmed.
            <br/>
            This is the one thing that we really wanted to be able to do within the timeframe that we had but if we were
            given an extra week or so this would definitely be, at a minimum, programmed to read sensor data.
            <br/>
            A brew would also need to be made for this but as a brew takes two weeks to ferment, we would need to have
            someone monitor the process, as stated above <b>Miles</b> (our head brewer!) is away and can’t make a batch
            of beer
            yet.
            <br/>
            <b>Oscar:</b> Has now added content to website for the project and preparing the pages for other components
            of the assessment.
            <br/>
            <b>Jackson</b> has finished writing the Group Process document, which needed to be done near the very end of
            the project.
            <br/>
            The rest of the team is taking the time to reflect on the last few weeks and get ready to finalise the
            project.
            <br/>
            <br/>
            <b><u>This is as far as we managed to get as a team.</u></b>
            <br/>
            <br/>
            <b><u>The future:</u></b>
            <br/>
            As a part of a handover, we would advise anyone else (even our own team) to focus on the sensor
            configuration first and foremost, once this is readable then you can start the testing phase to see that the
            information being gathered is useful and viable.
            <br/>
            Once that is confirmed (fingers crossed) then beginning work on creating a companion app that can monitor
            the information is second – it doesn’t matter if it is a desktop application or mobile specific but
            something that can allow the user to see the data being generated, ideally, in real time.
            <br/>
            After these are completed, the next part is configuring the R-Pi to control the fridge cooling system and a
            heat pad. This will prove the trickiest part of the whole operation as you would be working with “dumb”
            devices. One of these is a system that monitors the internal temperature of the fridge and then just turns
            the fridge off (or on) for temp control but we want to be able to push this to do it at our devices command,
            rather than just by its own programmed variable.
            <br/>
            This will likely require an additional unit to be constructed. This can be a much simpler Arduino IoT device
            that communicates with the main control system – The Raspberry Pi/Sensor array. This part would be highly
            complicated and will need help from an electrical engineer or someone similar (and qualified).
            <br/>
            Another thing that would be amazing would be to have a housing made, quite likely with a 3D Printer, so it
            can be customised depending on how we want the device to look and access for the sensors to the atmosphere
            within the fermentation chamber.
          </p>
        </ContentCard>
        <ContentCard>
          <h4><strong>Roles</strong></h4>
          <br/>
          <ul>
            <li>
              <ul><strong><u>Roles for the Project</u></strong></ul>
            </li>
            <ul>
              Defining roles for such a large project is very useful and can be a huge benefit to a team’s overall
              performance and functionality. Positions being allocated are usually brought upon by themselves since some
              people have certain skills in certain roles, for example having a person who has an excellent
              understanding of app development, operating systems and computing skills are usually given a job as <i>Lead
              Developer</i> and someone who has a creative mind, understands the goals/aims deeply and is not afraid to
              take
              risks should be given a role like a technical designer. Defining roles for participants is very beneficial
              in the grand scheme of things as it bypasses past any unclear air that can cause any tension between the
              team.
              <br/>
              <br/>
              Roles can be changed throughout the duration of a project and roles can also be shared if need be.
              Positions in a team are set for functionality to achieve optimum performance, the purpose of having roles
              and positions is to make sure that every single task is accomplished in an orderly way and to not cause
              any confusion or any dilemma, if a certain task is finished and the role thereby becomes no longer needed
              then it is possible for roles to be changed or in a better way shared / helped with. For the benefit of a
              team’s cohesion, it is better to have roles shared and not changed and if someone’s role is changed that
              may cause them to feel like their skills are not wanted but for roles to be shared it creates a sense of
              comradery and great team chemistry plus it shows how well people within a team can work together on the
              same task.
            </ul>
            <br/>
            <li>
              <ul><strong><u>What roles would we like?</u></strong></ul>
            </li>
            <ul>
              For our project there were several defined roles that could have been implemented, but due to the nature
              of the device and its very early stages, these roles are more so “dream roles” to have working on the
              project.
              <br/>
              <br/>
              The first role that was partly defined was the ‘Head Brewer’. This position was a must for the project as
              it needed to create the brews that the device will be monitoring. This person needs to be able to relay
              information to the development team on how a fermentation works and why this device is needed, this role
              is vital for the project because if the project did not have the role of <i>brewer</i> no one would know
              how to
              use the application and give feedback on how the project is achieving its goal of getting <i>“beer that
              takes
              like real beer“.</i>
              <br/>
              <br/>
              Had we continued with this trend, the next role would be the role of Software Engineer, this role is
              desired because without a software engineer there would no application/software further down the project
              timeline. This role is the backbone to the future of this project as the job is to create and to design
              the software that can collect and read the data from the device. This role would be considered crucial to
              the project because without a software engineer/’s there simply no project, this role demands knowledge
              into C++ and Python as the project needs these code languages to write with a Raspberry Pi and Arduino.
              <br/>
              <br/>
              Given that this is a very data heavy project, another key role would be that of the Data Analyst. This
              role describes itself, but to explain why we would need this is because the purpose of a data analyst is
              to collect, collate and interpret data for the project. They would be able to analyse the data to turn
              into accurate information, which can be used and refined further down the project line. This role is
              defined for its high demand in reading the data and being able to turn the information collected into
              reliable feedback for the team to process and make educated decisions on the next steps.
              <br/>
              <br/>
              Finally, the last “dream role” would be a Project Manager qualified with PMP and Agile as they would be
              able to run the entire project from start to finish, while keeping everyone's tasks in check and having
              accountability. As no one in this team has ever met before and everyone is unsure of each other's
              abilities a centralised manager who can direct and manage the project would be an absolute blessing. This
              would be beneficial in ANY team environment, especially one that requires application building and
              testing.
            </ul>
            <br/>
            <li>
              <ul><strong><u>Why didn’t we choose to allocate roles? </u></strong></ul>
            </li>
            <ul>
              Within this project there haven't been any specific roles assigned, mostly in part to everyone being new
              to the Information Technology Project scene. It is hard to define a role as “RedHat Linux Programmer” or
              “Lead Software Engineer” for someone who is, for example, a chef by trade. With that in mind, it is also a
              group assignment and by that virtue all parts of the work needed to be shared out equally or at least as
              equal as everyone's scope and abilities are concerned. Going back to the very first paragraph here,
              “Positions being allocated are usually brought upon by themselves since some people have certain skills in
              certain roles” we trusted everyone to step in and assist where they could do as much as possible.
              <br/>
              <br/>
              For example:
              <br/>
              Oscar understands GitHub and the website creation much better than Szedhane, but Szedhane can draft
              storyboards and shoot videos comfortably. Miles can type and write 1000s of words quickly but can't edit
              videos as well as Jackson.
              <br/>
              <br/>
              The team also understands that we all work full time jobs while doing this course part time, so the
              important thing is one person is checking to make sure we are progressing and making progress before the
              deadline. We all took turns at checking in and making sure things were going as well as possible.
              <br/>
              With that being said, we would have our reflections at the end this project to see if our methodology
              worked, or not. The proof will be in the drinking.
            </ul>
            <br/>
            <ul>
              That role that needs to be defined is the Data Analyst, this role describes itself. The purpose of a
              data analyst is to collect data for the projects device and be able to analyse the data to turn into
              accurate
              information. This role is defined for its high demand in reading the data and being able to turn the
              information collected into reliable feedback to user for creating that “beer that tastes like real beer“.
            </ul>
          </ul>
        </ContentCard>
        <ContentCard>
          <h4><strong>Timeframe</strong></h4>
          <br/>
          <TableContainer id="timeframe-table" component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{color: "white"}} align="center">
                    <strong> </strong>
                  </TableCell>
                  <TableCell style={{color: "white"}} align="center">
                    <strong>Szedhane: 36 hours</strong>
                  </TableCell>
                  <TableCell style={{color: "white"}} align="center">
                    <strong>Hans: 36 hours</strong>
                  </TableCell>
                  <TableCell style={{color: "white"}} align="center">
                    <strong>Oscar: 36 hours</strong>
                  </TableCell>
                  <TableCell style={{color: "white"}} align="center">
                    <strong>Jackson: 36 hours</strong>
                  </TableCell>
                  <TableCell style={{color: "white"}} align="center">
                    <strong>Miles: 36 hours</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell style={{color: "white"}}><strong>{row.week}</strong></TableCell>
                    <TableCell style={{color: "white"}}>{row.szedhane}</TableCell>
                    <TableCell style={{color: "white"}}>{row.hans}</TableCell>
                    <TableCell style={{color: "white"}}>{row.oscar}</TableCell>
                    <TableCell style={{color: "white"}}>{row.jackson}</TableCell>
                    <TableCell style={{color: "white"}}>{row.miles}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ContentCard>
        <ContentCard>
          <h4><strong>Group Process</strong></h4>
          <br/>
          <p>
            Similarly, to Assignment Two the main tool for our group’s communication will be through Microsoft Teams.
            This application available both on our mobile devices and computers allows a constant connection between
            each team member that is not as slow or easy to ignore as other methods of communication such as Email or
            Facebook. This application has everything a team could need from file sharing to task allocation.
            <br/>
            The communication will be broken down into two parts, messaging, and meetings. The chat function within
            teams is the informal instant messaging approach that will consist of on the fly updating/assessing and
            confirming changes that will allow any member anywhere to input and express their opinions or offer their
            help.
            <br/>
            <br/>
            Ideas, the larger tasks, and planning will all be finalised in meetings which are held at least twice a week
            with this number ramping up in the final week. All members of the team are asked to attend any meeting they
            can and if there is a serious subject they are looking to raise, then it falls to them to organise a meeting
            and having anyone who can join attend is the most important part. Typically, our team meetings take place
            any time after 5-6pm Melbourne time and range from 30 mins to 1 1/2hours. These meetings are finalised with
            either notes being sent to everyone student email or withing the specific chat for that meeting itself.
            <br/>
            <br/>
            The meetings went very well in Assignment two, as they were pre-planned and scheduled in advance from the
            start of the project to the end.
            <br/>
            <br/>
            In Assignment Two there were periods of time where certain members for the group were unreachable and this
            is a complication that as a team we will need to work together to overcome. Obviously, it is not an ideal
            situation but delegating any work that is over due to active members of the group is our backup plan for
            unresponsive members. They will try to be contacted through other means outside of Teams through Email or
            Discord and if they continued to be unresponsive then they may be removed from future planning.
            <br/>
            <br/>
            For this assignment less meetings were scheduled to allow more time for people to work on tasks
            uninterrupted.
          </p>
        </ContentCard>
      </div>
    );
  }
}
