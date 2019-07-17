import React from "react"
import styles from "./Project.module.scss"
import { P, H3 } from "../../atoms/Typography"
import Anchor from "../../atoms/Anchor"

export default ({ title, children, logoSrc, projectLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={logoSrc}
            alt={`logo for ${title}`}
          />
        </div>
        <H3>{title}</H3>
      </div>
      <P>{children}</P>
      <Anchor href={projectLink} underline>
        GitHub
      </Anchor>
    </div>
  )
}
