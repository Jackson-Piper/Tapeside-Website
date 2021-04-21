import React from "react";
import ContentCard from "../ContentCard";

export default class ToolsTech extends React.Component {
  render() {
    return (
      <ContentCard>
        <h1>Tools and Technologies</h1>
        <br />
        <p>
          For the virtual audio cable to be created, we will need to use the
          Windows Driver Kit (WDK) to develop a custom driver that works with
          the program itself and allow us to control how audio data is passed
          through the virtual cable. The WDK needs to be written with C++ so we
          would use that as the programming language for the entire program to
          simplify the program by not mixing multiple languages together.
          <br />
          <br />
          By using C++ there are multiple advantages that we are presented with.
          Firstly, as this is a small program that we want to run fast with low
          impact on the system, it is beneficial that C++ is a compiled
          programming language as it runs faster than if it was an interpreted
          language. We also can do our own garbage collection to finely tune how
          the RAM is used and ensure that the program is not using up resources
          when there is no need for it to do so.
          <br />
          <br />
          To create a GUI program in C++ we would use the QT program and
          library. The great thing with QT is that it is easy and fast when it
          comes to developing a UI which means that the team can focus more
          effort into developing skills that we do not already have such as
          creating drivers with the WDK and moving audio data through a program.
          The downside to using QT is that it is only licensed for open-source
          programs unless you buy a QT license (which is very expensive,
          especially once you buy a license for multiple team members).
          Fortunately, this program is to be designed as an open-source
          application, so we will not need to pay for QT licenses.
          <br />
          <br />
          Additionally, to ensure that the program is installed and uninstalled
          properly, we will use installation and uninstallation wizards. If we
          do not use these wizards, users could accidentally put files in the
          wrong places or not install the driver properly. When the program is
          being uninstalled, the wizard would ensure that all the files are
          deleted properly, and the driver is removed from the computer so that
          there are not any residual files remaining that the user may overlook
          if they were to remove the program themselves.
          <br />
          <br />
          On top of the fact that the installation and uninstallation wizards
          ensure that installation and uninstallation go smoothly, it also
          simplifies these processes for the user, which reinforces the purpose
          of this program being user friendly and not being a hassle to operate,
          and this applies not just in the program itself but also when
          downloading it and deleting it.
        </p>
      </ContentCard>
    );
  }
}
