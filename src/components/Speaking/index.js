import React from "react"
import styles from "./Speaking.module.scss"
import SpeakingItem from "../SpeakingItem"

export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <h2>Speaking</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className={styles.list}>
        <SpeakingItem />
        <SpeakingItem />
        <SpeakingItem />
      </div>
    </div>
  </div>
)
