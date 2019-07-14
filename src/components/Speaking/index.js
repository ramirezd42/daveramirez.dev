import React from "react"
import styles from "./Speaking.module.scss"
import SpeakingItem from "./SpeakingItem"
import { H2 } from "../atoms/Typography"

export default () => (
  <div className={styles.container} id="speaking">
    <div className={styles.row}>
      <H2 theme="dark" underline>
        Speaking
      </H2>
      <div className={styles.list}>
        <SpeakingItem
          name="LibertyJS"
          date="Oct 2018"
          title="Embracing the Native of React Native"
          slideLink="https://github.com/ramirezd42/libertyjs2018-talk"
          websiteLink="https://libertyjs.com"
        >
          It can be intimidating to crack open the “ios” and “android” folders
          of a React Native project. In this talk I offered a guided tour of how
          React Native works behind the scenes. I also showed how this knowledge
          can help you make better design decisions and expose your own native
          UI components.
        </SpeakingItem>
        <SpeakingItem
          name="Audio Developer Conference"
          date="Nov 2017"
          title="Developing audio applications with JavaScript"
          videoLink="https://www.youtube.com/watch?v=WxRWgafjXSA"
          websiteLink="https://juce.com/adc"
        >
          This talk was a presentation on my work with vst.js and node-audio. I
          demoed a simplistic Electron-based DAW application that used
          node-audio and the PluginNode powered by vst.js to allow for
          multitrack mixing with audio plugin support. I also offered a deeper
          look at at vst.js and node-audio to explain how it all worked under
          the hood.
        </SpeakingItem>
        <SpeakingItem
          name="Philly Tech Week"
          date="May 2017"
          title="Getting the most out of JavaScript (without using JavaScript)"
          slideLink="https://github.com/ramirezd42/philly-tech-week-2017-talk"
          websiteLink="http://2017.phillytechweek.com/people/DaveRamirez"
        >
          The NodeJS and JavaScript communities offer several ways of
          interfacing with native code and each approach is best suited to
          certain use cases. This talk offered an introduction to two
          approaches, WebAssembly and native C/C++ NodeJS addons.
        </SpeakingItem>
      </div>
    </div>
  </div>
)
