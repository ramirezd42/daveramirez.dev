import React from "react"
import styles from "./SpeakingItem.module.scss"
import { Span, P, H3, H4 } from "../../atoms/Typography"
import Anchor from "../../atoms/Anchor"

export default ({
  name,
  date,
  title,
  children,
  slideLink,
  websiteLink,
  videoLink,
}) => {
  return (
    <div className={styles.container}>
      <H3 theme="dark">
        {name} <Span className={styles.span}>{date}</Span>
      </H3>
      <H4 theme="dark">{title}</H4>
      <P theme="dark">{children}</P>
      {videoLink && <Anchor href={videoLink}>Watch</Anchor>}
      {slideLink && <Anchor href={slideLink}>Slides</Anchor>}
      {websiteLink && <Anchor href={websiteLink}>Website</Anchor>}
    </div>
  )
}
