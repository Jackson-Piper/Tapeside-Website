import React from "react";
import ContentCard from "../../components/ContentCard";
import Endnote from "../../components/Endnote";
import ToolCard from "../../components/ToolCard";

import GitHub from "../../assets/images/tools/github.png"
import Teams from "../../assets/images/tools/teams.webp"
import Office from "../../assets/images/tools/office.png"
import Java from "../../assets/images/tools/java.svg"
import RPi from "../../assets/images/tools/Raspi.webp"
import MicroSD from "../../assets/images/tools/microSD.png"
import LM35 from "../../assets/images/tools/lm35.jpg"
import SGP30 from "../../assets/images/tools/SGP30.webp"
import MQ3 from "../../assets/images/tools/MQ3.jpeg"
import Breadboard from "../../assets/images/tools/breadboard.jpg"
import StarterKit from "../../assets/images/tools/starter.jpg"

export default class Practical extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Practical</h2>
        </ContentCard>
        <ContentCard>
          <h4><strong>Scope and Limit</strong></h4>
          <br/>
          <p>
            <b><u>Phase one:</u></b>
            <br/>
            The initial phase is just to be able to have data readings available using this device and an application.
            <br/>
            This will specifically read and report temperature (both ambient and brew), carbon dioxide levels and lastly
            alcohol vapor. Primarily we will want to just be able to see these are accurate and available in real time.
            <br/>
            <br/>
            This will mean that the temperature, co2 and alcohol readings are all accurate and visible within the
            raspberry pi operating system, which will need to be downloaded and installed
            <Endnote
              tooltip="1"
              placement="bottom"
              note="Operating system images – Raspberry Pi"
              link="https://www.raspberrypi.org/software/operating-systems/"
            />
            .
            <br/>
            To achieve this, a real-life prototype will need to be built with Raspberry Pi and Arduino components, one
            of the biggest limits here is financing the tools (soldering iron, solder, flux, parts etc) as well as the
            Raspberry Pi itself. It will also need hands on skills to be learnt to build the device, followed by testing
            to make sure all components are operating.
            <br/>
            <br/>
            <b><u>Phase Two:</u></b>
            <br/>
            Once phase one is refined and determined to have reproducible results, then the system should allow for
            automation of the temperature control, based on the data from the CO2 and Alcohol readings, as well as the
            “desired” fermentation temperature (for example, 16-20c for Lager).
            <br/>
            Secondary to this, an application will need to be built to house and display the data in a simple
            user-friendly GUI. Starting out this will only have one beer type available, the lager. The app would be
            able to connect via Wi-Fi so the data can be monitored in real time.
            <br/>
            In order for this device/app to be considered as “working” under the phase two banner, it will need to be
            able to “run” the fermentation process entirely from start to finish without any human interference besides
            putting the fermenter in and selecting what kind of brew is being fermented.
            <br/>
            <br/>
            <b><u>Phase Three:</u></b>
            <br/>
            Refinement of the Pi based device into a small unit that is aesthetically pleasing as well as functional.
            The refinements to the application make it available on both iOS and Android via the respective App stores,
            requiring standard user login (email and password) to proceed. This may require authentication services,
            such as Amazon Cognito
            <Endnote
              tooltip="2"
              placement="bottom"
              note="Amazon Cognito - Simple and Secure User Sign Up & Sign In | Amazon Web Services (AWS)"
              link="https://aws.amazon.com/cognito/"
            />
            <br/>
            The result will be an automatically fermented beer that once the process is finished is also cold crashed
            and requires only bottling/kegging and cleaning from the user.
            <br/>
            As well as this, the application that runs the process should also come with manual alert options, useful
            notifications and even manual overrides, for things such as cold crashing and even dry hopping.
            <br/>
            <br/>
            <b><u>Phase Four:</u></b>
            <br/>
            While the very basic design to be able to automate one brew from the start of fermentation to the end,
            including temp control, the ultimate end goal is to be able to run most of the popular beers and even
            non-alcoholic fermentable options such as Kombucha, all within one app that can be checked in on via Wi-Fi
            from anywhere on earth. For this to be achievable we will need servers and data storage facilities.
            <br/>
            Naturally this will mean that the data collection would extend to 100s of different beer types and allow for
            user input to allow custom beers to be created and even added to a community portal for user added templates
            that can be shared and used by anyone.
            <br/>
            <br/>
            <b><u>Phase Five:</u></b>
            <br/>
            After the above, being able to have multiple systems that can allow for greater control over the
            fermentation process, even being able to automate the kegging process once a brew has completed fermentation
            and been cold crashed. This will of course require far more sensors, moving parts and data collection
            devices but would allow even further automation of the process past the initial brew. Something of this
            scale would possibly be able to even move past the homebrewer and into craft breweries and possibly larger
            companies as well.
          </p>
        </ContentCard>
        <ContentCard>
          <h4><strong>Tools and Tech</strong></h4>
          <br/>
          <b>Collaborative Tools:</b>
          <br/>
          <ToolCard
            tool="GitHub"
            toolImage={GitHub}
            link="https://github.com/about"
          >
            <p>
              GitHub is being used to store our code for the project and for our website. This helps us to easily
              collaborate in developing our product and keeping our website up to date.Our GitHub doesn’t reflect at all
              the effort the team went into as we did so much typing and manual handling (building the device for
              example) that doesn’t show up in GitHub.
            </p>
          </ToolCard>
          <ToolCard
            tool="Microsoft Teams"
            toolImage={Teams}
            link="https://www.microsoft.com/en-au/microsoft-teams/group-chat-software"
          >
            <p>
              Microsoft Teams is being used as our main line of communication, task management. It is also the tool we
              use to host and record our meetings.
            </p>
          </ToolCard>
          <ToolCard
            tool="Microsoft Office"
            toolImage={Office}
            link="https://www.office.com/"
          >
            <p>
              The full suite is used by everyone in the team, from Outlook to Word, even PowerPoint for simple
              presentations. The Office suite is a very powerful tool and one that cannot be overlooked for its use in
              any project.
            </p>
          </ToolCard>
          <ToolCard
            tool="Java"
            toolImage={Java}
            link="https://www.java.com/en/"
          >
            <p>
              Java is being used to develop our project as it is a powerful, object oriented, and fast programming
              language which is perfect for our project.
            </p>
          </ToolCard>
          <br/>
          <b>Collaborative Tools:</b>
          <br/>
          <ToolCard
            tool="Raspberry Pi 3"
            toolImage={RPi}
            link="https://www.raspberrypi.org/"
          >
            <p>
              The Raspberry Pi is being used to prototype our product so we can test it before manufacturing consumer
              editions of the product. There are various models of this available, but we chose to use the Raspberry Pi
              3 as it was still supported and was an affordable option for the project.
            </p>
          </ToolCard>
          <ToolCard
            tool="Raspberry Pi OS"
            toolImage={RPi}
            link="https://www.raspberrypi.org/software/"
          >
            <p>
              A Linux based Operating System that is loaded via MicroSD card. This is a very simple procedure to do, it
              involves having a MicroSD card of at least 34gb, downloading the image software from the R-Pi website and
              running the installer. Once installed on the MicroSD no further action is needed. The Raspberry Pi boots
              from the MicroSD.
            </p>
          </ToolCard>
          <ToolCard
            tool="MicroSD"
            toolImage={MicroSD}
            link="https://en.wikipedia.org/wiki/SD_card"
          >
            <p>
              Need to install the above Raspberry Pi operating system. These can be purchased from just about anywhere,
              from Amazon, JB-HiFi, Officeworks and even eBay. The minimum suggested size is 8gb but most folks will opt
              for at least 32 to 64gb allowing for extra storage if needed.
            </p>
          </ToolCard>
          <br/>
          <b>Arduino Parts:</b>
          <br/>
          <ToolCard
            tool="LM35 Temp Sensor"
            toolImage={LM35}
            link="https://components101.com/sensors/lm35-temperature-sensor"
          >
            <p>
              To measure the temperature within the fermentation area, in this instance an old fridge.
            </p>
          </ToolCard>
          <ToolCard
            tool="SGP30 Air Sensor"
            toolImage={SGP30}
            link="https://www.adafruit.com/product/3709"
          >
            <p>
              To detect CO2 levels, which indicates that the yeast is converting sugar to alcohol as CO2 is a
              by-product.
            </p>
          </ToolCard>
          <ToolCard
            tool="MQ3 Alcohol Sensor"
            toolImage={MQ3}
            link="https://components101.com/sensors/mq-3-alcohol-gas-sensor"
          >
            <p>
              This is to be able to read the alcohol vapour and give an indication that fermentation has completed, and
              the sugars have been converted to alcohol.
            </p>
          </ToolCard>
          <ToolCard
            tool="Breadboard"
            toolImage={Breadboard}
            link="https://en.wikipedia.org/wiki/Breadboard"
          >
            <p>
              We used a half size breadboard as it was able to fit all the parts with ease and is relatively small so as
              to take up as little space as possible.
            </p>
          </ToolCard>
          <ToolCard
            tool="Arduino Starter Kit"
            toolImage={StarterKit}
            link="https://store.arduino.cc/usa/arduino-starter-kit"
          >
            <p>
              This kit contained all the wiring and extra pieces that would be needed, outside of the above Sensors.
            </p>
          </ToolCard>
        </ContentCard>
        <ContentCard>
          <h4><strong>Testing</strong></h4>
          <br/>
          <p>
            In order to test this device, we will need to have brews fermenting. There are multiple ways in which a beer
            can be brewed, starting with the simplest “kit and kilo” method
            <Endnote
              tooltip="1"
              placement="bottom"
              note="Brewing your first beer, kit & kilo style - Craft 'N Brew (craftnbrew.com)"
              link="https://craftnbrew.com/2018/07/26/brewing-your-first-beer-kit-kilo-style/"
            />
            . This only requires a can of malt extract,
            additional sugars (usually in the form of dextrose) and of course the star of the show, yeast. Besides the
            above, you will need a fermenting vessel, typically LDPE, which can hold 30l of wort (the sugar water),
            airlock and some cleaning products. Additionally, it will require both a heating belt and refrigeration
            system which can be coupled up with a system such as the Inkbird Wireless Temperature controller
            <Endnote
              tooltip="2"
              placement="bottom"
              note="Inkbird ITC-308 WiFi Digital Temperature Controller 220V Outlet Thermostat, 2-Stage, 2200w, w/Sensor Smart Thermostat Google Alexa IFTTT APP Support Remote Monitor Control: Amazon.com.au: Kitchen"
              link="https://www.amazon.com.au/Inkbird-ITC-308-Temperature-Controller-Thermostat/dp/B07Q2VTWNK"
            />
            .
            <br/>
            Once a brew has been added to the fermenter, that will need to be placed inside the fridge and have a heat
            belt attached.
            <br/>
            The device itself will sit in a space above the fermenter, ideally in the top section of the fridge so that
            it can record the ambient temperature as well as the gases that are being detected. Co2 is heavier than air
            but should safely fill the small area of a fridge with relative ease despite this
            <Endnote
              tooltip="3"
              placement="bottom"
              note="If CO2 is heavier than air why does it rise?"
              link="https://qr.ae/pGrz96"
            />
            . It will require location
            testing to see if any spot is beneficial for the output data.
            <br/>
            The simple way to test the device is to have a brew and monitor the outputs, confirming that fermentation is
            occurring by taking manual gravity readings throughout the brew as well as running a concurrent analogue
            thermometer. These will allow the data to be checked off against what is being reported, allowing for live
            results and changes to be made as the brew progresses. Thankfully, a usual brew takes around 2 weeks to
            ferment so this allows for plenty of opportunities to run diagnostics on the data capture side.
            <br/>
            We will know we have succeeded when multiple temperate readings are within a 0.5-degree Celsius variance
            compared to analogue over the course of several days, CO2 is being observed within the fridge and any
            estimated alcohol readings are backed up by manual readings taken over a 3-day period at the end of
            fermentation.
            <br/>
            After that we will want to move onto being able to control the temperature based on the successful readings.
          </p>
        </ContentCard>
        <ContentCard>
          <h4><strong>Risks</strong></h4>
          <br/>
          <p>
            Some of the risks involved with this project start with being able to build the device. While using
            Raspberry Pi is exactly like using a PC (it is a PC after all) building the additional components and wiring
            them up using a breadboard and various Arduino components. While this part is not incredibly difficult and
            there are a lot of guides out there on how to do it, you still must have some manual manipulation skill as
            well as a basic understanding of electronics and computing.
            <br/>
            <br/>
            Once the breadboard is built and all the sensors have been attached then you need to connect the breadboard
            to the Raspberry Pi, then use a program such as PuTTY to SSH into the Raspberry Pi, this does not come
            easily for a lot of people.
            <br/>
            <br/>
            In order to achieve this, you will need to have a basic understanding of Linux, specially the CLI (Command
            Line Interface) to be able to “talk” to the sensors. This will also need some python libraries. Admittedly
            if you have no programming experience it will seem daunting. A team would need to have someone who can
            program in Python or the project is dead in the water.
            <br/>
            <br/>
            One of the main risks to the project here is that most users are only familiar with Windows or MacOS, so
            there will be a learning curve and a fairly steep one at that if you have never seen anything other than the
            basic home operating systems.
            <br/>
            <br/>
            Thankfully, the vast majority of the code needed is open source, freely available online and can be
            copy-pasted into the CLI to run a program using Python (most often) or similar (C/C++ and Scratch), which
            will then allow data to be read.
            <br/>
            <br/>
            Another risk is that the Raspberry Pi systems are not overly cheap, with the R-Pi coming in at an entry
            price of $80-120 AUD, excluding all the extra components. A single prototype could run to $200 AUD easily
            which is an expensive addition that home brewers may not wish to spend.
            <br/>
            It may be better to use an Arduino board in lieu of the R-Pi, as it is a much simpler system, but we will
            not know this for sure until after the prototype is built and tested. It is likely that we have gone the
            wrong way around on this, but you cannot be sure until after prototyping is completed.
            <br/>
            Some of the components, especially the gas/alcohol sensors may require calibration before/after use which
            could cause the system to malfunction if not done properly.
            <br/>
            There is also the ultimate risk, in that it does not read the data accurately, failing to see the correct
            temperatures and therefore having a totally pointless system that cost time and money to be a paperweight.
          </p>
        </ContentCard>
      </div>
    );
  }
}
