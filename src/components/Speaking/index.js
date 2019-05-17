import React from "react"
import styles from "./Speaking.module.scss"
import SpeakingItem from "./SpeakingItem"
import { P } from "../atoms/Typography"

export default () => (
  <div className={styles.container} id="speaking">
    <div className={styles.row}>
      <h2>Speaking</h2>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </P>
      <div className={styles.list}>
        <SpeakingItem />
        <SpeakingItem />
        <SpeakingItem />
      </div>
    </div>
  </div>
)
