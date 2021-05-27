import React from "react";
import ContentCard from "../../components/ContentCard";
import Endnote from "../../components/Endnote";

import FermenSensorPi from "../../assets/images/project/FermenSensorPi.png"

export default class Description extends React.Component {
  render() {
    return (
      <div>
        <ContentCard align="center" width="400px">
          <h2>Description</h2>
        </ContentCard>
        <ContentCard>
          <p>
            <strong>The FermenSensorPi</strong>
            <br/>
            During fermentation, yeast consumes the sugars found in the wort (sugar liquid) and creates both alcohol and
            carbon dioxide as byproducts. This can only happen if the brew is within a certain temperature range that
            the yeast is able to survive (and thrive) in, thereby consuming the sugars. This, first of three systems,
            below is designed to read these byproducts then compare them to a database of “what this should look like”.
            After taking that reading, it can communicate with additional units to control temperature, both heating and
            cooling, to ensure the fermentation is proceeding in a desired manner. The outcome of this should be to have
            repeatable brews, initially the lager beer type, that are mostly automated after the wort is placed into the
            fermenter and fermentation fridge.
            <br/>
            The first of these is <a target="_blank"
                                     href={"https://www.circuito.io/app?components=9443,35286,200000,333429,398783"}>a
            Raspberry Pi with Temp and CO2 sensors</a> as well as an alcohol detector.
            <br/>
            <br/>
            <strong>The Pi:</strong>
            <br/>
            The base of this unit is a Raspberry Pi 3, Model B
            <Endnote
              tooltip="1"
              placement="bottom"
              note="Buy a Raspberry Pi 3 Model B – Raspberry Pi"
              link="https://www.raspberrypi.org/products/raspberry-pi-3-model-b/"
            />
            . This unit is more than likely overkill, being that it
            has a quad core 1.2ghz 64-bit CPU, 1gb of ram and full-sized HDMI port, but it also has a lot of room for
            additional features, including ethernet and camera ports. In order to make use of this system however it
            will require an operating system, in this instance Raspbian which is a Debian (Linux) based operating
            system. This will be installed via the onboard microSD card and will require a mouse and keyboard
            connection, plus a monitor (via the full-size HDMI) and power.
            <br/>
            <br/>
            <strong>The Temperature:</strong>
            <br/>
            In order to read the ambient temperature, we will be using the LM35DZ Temperature Sensor. The reason this
            part has been chosen is due to the fact it reads temperatures in Celsius; it measures temperatures from -55c
            to 150c and is very low cost (from $3 to $5 per unit in AUD)
            <Endnote
              tooltip="2"
              placement="bottom"
              note="Arduino Temperature Sensor Using LM35 : 3 Steps - Instructables"
              link="https://www.instructables.com/Arduino-Temperature-Sensor-Using-LM35/"
            />{" "}
            making this a very versatile, robust and
            inexpensive part of this build. Being able to monitor the temperature.
            <br/>
            <br/>
            <strong>CO2:</strong>
            <br/>
            During the fermentation process the amount of Co2 being produced will indicate how active the yeast is, as
            well as how far along in the fermentation process the brew is. In order to measure this, we have used the
            Adafruit SGP30
            <Endnote
              tooltip="3"
              placement="bottom"
              note="Adafruit SGP30 Air Quality Sensor Breakout"
              link="https://www.adafruit.com/product/3709"
            />{" "}
            due to its ability to detect Co2 within a range of 400 to 60,00 parts per million (ppm).
            This will be able to detect the rate of Co2 over time, giving the brewer and indication of how much time may
            be remaining in the fermentation process.
            <br/>
            <br/>
            <strong>Alcohol:</strong>
            <br/>
            Finally, there is the MQ-3 Alcohol Gas Sensor
            <Endnote
              tooltip="4"
              placement="bottom"
              note="MQ-3 Alcohol Gas Sensor"
              link="https://components101.com/sensors/mq-3-alcohol-gas-sensor "
            />{" "}
            which will be able to detect the alcohol volume in the area.
            While this is normally done via a hydrometer or refractometer, having this module could allow a brewer to
            see that the alcohol in the fermenting area and that the process is indeed under way. The Alcohol reader is
            a nice-to-have but not a requirement in the process.
            <br/>
            <br/>
            <strong>Build Diagram:</strong>
            <br/>
          </p>
          <img src={FermenSensorPi}/>
        </ContentCard>
      </div>
    );
  }
}
