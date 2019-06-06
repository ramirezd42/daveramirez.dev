import React from "react"
import styles from "./SpeakingItem.module.scss"
import { Span, P, H3, H4 } from "../../atoms/Typography"
import Anchor from "../../atoms/Anchor"

export default () => {
  return (
    <div className={styles.container}>
      <H3 theme="dark">
        LibertyJS <Span className={styles.span}>OCT 2018</Span>
      </H3>
      <H4 theme="dark">Embracing the Native of React Native</H4>
      <P theme="dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
      <Anchor href="https://google.com">Slides</Anchor>
      <Anchor href="https://google.com">Website</Anchor>
    </div>
  )
}
