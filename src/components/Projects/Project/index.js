import React from "react"
import styles from "./Project.module.scss"
import { P, H3 } from "../../atoms/Typography"

export default ({ title, children, logoSrc, projectLink }) => {
  return (
    <a className={styles.container} href={projectLink}>
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
    </a>
  )
}
