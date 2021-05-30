import React from "react";
import ContentCard from "../../components/ContentCard";
import Endnote from "../../components/Endnote";

export default class Practical extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Overview</h2>
        </ContentCard>
        <ContentCard>
          <b><u><h4>Topic</h4></u></b>
          Yeast is an application-based assistant to the home brewing experience. The Project is planned to come in two
          different parts, the application, and the physical device which will help the application to monitor
          temperature and be connected to heating and cooling systems.
          <br/>
          <br/>
          The sensor and application are being put together by both Oscar and Miles as they have the most experience in
          this field. We are planning to have it running and operational so it can send data to a phone anywhere and
          receive instructions from said phone. It consists of a Raspberry Pi 3 running the standard Raspberry Pi OS
          (Linux based, GUI) and Arduino sensors, wired into a breadboard. There are three main sensor components, the
          LM35 Temperature Sensor, the MQ-3 Alcohol Vapor sensor and the SGP30 Air Quality Sensor. The purpose of these
          sensors is to read the temperature (LM35) of the fermenting brew so that the yeast can survive and convert
          sugars. The Air Sensor (SGP30) is to detect Co2, which is a sign that the yeast is active and finally the
          alcohol vapor sensor (MQ-3) to detect when the brew has finished fermentation and alcohol is present. It does
          this by having a constant reading of the latter two sensors over a period of 2 to 3 consecutive days.
          <br/>
          <br/>
          The application side will present the data collected by the Arduino sensors and passed to the user’s phone so
          that they can remotely monitor fermentation temperatures and adjust accordingly, with plans to have this part
          automated as well. There are also plans to store this data for future brews so that the same method can be
          used to help replicate the exact fermentation process as well as templates that can be used depending on the
          different brews.
          <br/>
          <br/>
          The result at the end of a very long trial and error process would be to have an all-in-one fermenter vessel
          and fridge that allows users to place an unfermented wort into the device then set and forget. The system
          would monitor all the data from temperature, carbon dioxide emissions and lastly the alcohol vapour to ensure
          the brew was completed in the correct amount of time. The last steps of Cold Crashing would be an optional
          feature, but once the system detects the brew is finished it can go into a “holding” phase until the brewer is
          ready to bottle or keg.
          <br/>
          <br/>
          <b><u><h4>Motivation</h4></u></b>
          Like our previous project Idea, an audio Virtual Machine to be used by Streamers, which came from Oscar who
          had a need for this. Yeast is a project that Miles discussed and as a group we believed it was more within our
          grasp, the skills that are present in the group came into much consideration when deciding whether to change
          the project plan but ultimately it was in the best interest of the group to make this change. Miles’s idea
          came from fermentation being the most important step in the brewing process the need to monitor temperature is
          paramount to this. While working remote Miles’s access to his home brewing setup was obviously limited and a
          gap in the market was found which we are now exploring options for. We noticed with the rise of craft beer
          popularity and the recent pandemic more and more people are looking to create their own brews. In the modern
          age being able to automate the final (and arguably the most important) part of the brewing process seems like
          a natural progression of home brewing.
          <br/>
          <br/>
          <b><u><h4>Landscape</h4></u></b>
          While similar devices are available to the market such as Precision Fermentation’s BREWMONITER, they are
          designed for commercial sized tanks and do not consider the needs of home brewers. We have downsized such
          designs so that they do not require a large amount of space and simplified the application as individual tank
          size and overall production size is often smaller than a fraction of that of commercial breweries. While they
          all have the same structure of monitoring heat, temperature and pressure, the simplified method of our sleek
          design and portability is where we stand out to our competitors.
          <br/>
          <br/>
          Presently there are a few similar systems that are in circulation, such as the BrewPi
          <Endnote
            tooltip="1"
            placement="bottom"
            note="BrewPi - Brewing Automation"
            link="https://www.brewpi.com/"
          />
          , the iSpindel
          <Endnote
            tooltip="2"
            placement="bottom"
            note="iSpindle Documentation | iSpindel"
            link="https://www.ispindel.de/docs/README_en.html"
          />
          , the Tilt
          <Endnote
            tooltip="3"
            placement="bottom"
            note="Tilt™ Hydrometer and Thermometer – Tilt Hydrometer"
            link="https://tilthydrometer.com/products/copy-of-tilt-floating-wireless-hydrometer-and-thermometer-for-brewing"
          />
          {" "}and the Plaato
          <Endnote
            tooltip="4"
            placement="bottom"
            note="PLAATO - Digitalising Brewing"
            link="https://plaato.io/?gclid=Cj0KCQjwhr2FBhDbARIsACjwLo0psl7qYGs7rCDOCSV4xS-gyDJ3LeHwSijNYgqXRoC6znieL0MJSUcaAjwjEALw_wcB"
          />
          .
          <br/>
          <br/>
          Each of these devices has one specialised function, the BrewPi that monitors the temperature and can turn the
          temp on and off in a (pre hacked
          <Endnote
            tooltip="5"
            placement="bottom"
            note="The Fridge Hacking Guide By BrewPi | Hackaday"
            link="https://hackaday.com/2014/08/03/the-fridge-hacking-guide-by-brewpi/"
          />
          ) Fridge. This device only reads the data then changes the temperature. There
          is no additional data input like our device has, such as the CO2 output and Alcohol Vapour readings.
          <br/>
          <br/>
          The closest of the aforementioned gadgets would be the Plaato Airlock, which measures the specific gravity of
          your beer during fermentation and transmits the data every fifth minute to the PLAATO App through Wi-Fi. This
          doesn’t have any temperature control or other functionality besides allowing the user to view the data.
          <br/>
          <br/>
          Additionally, the Tilt and iSpindel are essentially the same device just made with Arduino parts only, no
          controlling system such as Raspberry Pi. These are placed into the fermenting brew itself (as in floating) and
          function much like the Plaato but instead read the gravity of the brew internally. Largely speaking these
          devices aren't popular as most brewers do not like risking anything going into the brew that could cause an
          infection.
          <br/>
          <br/>
          Our device looks to be able to read all the above information, then in later iterations be able to control the
          entire brew automatically, by using multiple sensors and devices but with no risk to the brew from outside
          influences.
        </ContentCard>
      </div>
    );
  }
}