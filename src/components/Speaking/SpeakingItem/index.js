import React from "react"
import styles from "./SpeakingItem.module.scss"
import { P } from "../../atoms/Typography"

export default () => {
  return (
    <div className={styles.container}>
      <h3>
        LibertyJS <span>OCT 2018</span>
      </h3>
      <h4>Embracing the Native of React Native</h4>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
      <a href="https://google.com">Slides</a>
      <a href="https://google.com">Website</a>
    </div>
  )
}
