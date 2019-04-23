import React from "react"
import styles from "./Projects.module.scss"
import Project from "../Project"
import vstJsLogo from "../../images/vstjs-logo.png"
import nodeAudioLogo from "../../images/node-audio-logo.png"

export default () => (
  <div className={styles.container} id="projects">
    <div className={styles.row}>
      <h2 className={styles.h2}>Projects</h2>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={styles.projectList}>
        <Project
          title="vst.js"
          logoSrc={vstJsLogo}
          projectLink="https://github.com/ramirezd42/vst-js"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Project>
        <Project
          title="node-audio"
          logoSrc={nodeAudioLogo}
          projectLink="https://github.com/ramirezd42/node-audio"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Project>
      </div>
    </div>
  </div>
)
