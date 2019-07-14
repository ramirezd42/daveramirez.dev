import React from "react"
import styles from "./Projects.module.scss"
import Project from "./Project"
import vstJsLogo from "../../images/vstjs-logo.png"
import nodeAudioLogo from "../../images/node-audio-logo.png"
import { P, H2 } from "../atoms/Typography"

export default () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.row}>
        <H2 underline>Pet Projects</H2>
        <P className={styles.p}>
          In addition to my day job, I also enjoy experimenting with technology
          in areas that interest me. As an amateur musician I find audio
          technology to be a particularly fun space to play around in.
        </P>
        <div className={styles.projectList}>
          <Project
            title="vst.js"
            logoSrc={vstJsLogo}
            projectLink="https://github.com/ramirezd42/vst-js"
          >
            vst.js was an experiment in enabling NodeJS applications to interact
            with native audio plugin formats such as VST, VST3 and AudioUnit.
            This began as a reseach project since I wasn't very familiar with
            C++ or audio plugin SDKs initially but I was able to stand up a
            working prototype.
          </Project>
          <Project
            title="node-audio"
            logoSrc={nodeAudioLogo}
            projectLink="https://github.com/ramirezd42/node-audio"
          >
            The goal of node-audio was to create an api compatable version of
            the Web Audio API as a NodeJS package that could be extended with
            additional AudioNode implemented in C++. The library contains an
            example of one such node called the "PluginNode" that makes use of
            vst-js to allow developers to connect audio plugins to an audio
            graph.
          </Project>
        </div>
      </div>
    </div>
  )
}
