import React from "react";
import ContentCard from "../ContentCard";

export default class Overview extends React.Component {
  render() {
    return (
      <ContentCard>
        <h1>Description</h1>
        <br />
        <p>
          This will be a user friendly and easily accessible tool in most
          streamers application library. A streamer, especially on a platform
          with copyright issues, will be able to run audio and even programs
          though a virtual audio device. The program will be a much more
          simplified and specific version of some existing software, such as
          VoiceMeeter Banana which has an audio mixer built in but this proves
          to be cumbersome and rarely, if ever, used.
          <br />
          <br />
          The program will also be miniscule in file size which will be ideal
          for any gamer/streamer looking to maximize storage space, so this
          shouldn’t be more than 100mb which can be downloaded rapidly on almost
          every modern internet and even mobile internet connection. Further to
          this the installer will be a very simple NSIS or Nullsoft Scriptable
          Install System, which is an open-source Windows installer with a lot
          of customization available based on the install script.
          <br />
          <br />
          After the installation is complete the application itself will be a
          simple, one page and very user intuitive program written in C++ as
          this will allow for multi-platform applications that allows direct
          access to the audio controllers. The single page app will have
          controls for volume, audio input and output as well as some basic
          volume and equalizer controls. One of the main benefits to an
          application that uses both NSIS and C++ is that this will require
          minimal resource usage, allowing more computational power for the
          streamer to focus on having high quality both audio and visual for
          their streams. Being that this application has such a small file size
          also means that a very minimal cloud footprint is needed. Hosting can
          be done on a small-scale server such as AccuWeb, that is inexpensive
          but reliable.
          <br />
          <br />
          The program, from start to finish, should have as little user
          interaction as possible to keep it as simple as possible for all
          levels of streamer. No matter if the user is a complete beginner or
          streaming professional. The goal is to have software that doesn’t
          matter if the user has ever used a mixer or equalizer based program
          before, but this will be an intuitive program that is easy to
          download, install and then utilise.
          <br />
          <br />
          After successful implementation within the Windows operating system,
          the application will also be made available on MacOS, some Linux
          builds and even a possible browser extension and possible mobile app
          for social media platforms that use audio as well.
        </p>
      </ContentCard>
    );
  }
}
