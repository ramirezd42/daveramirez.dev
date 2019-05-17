import React from "react"
import styles from "./Project.module.scss"
import { P } from "../../atoms"

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
        <h3 className={styles.h3}>{title}</h3>
      </div>
      <P>{children}</P>
    </a>
  )
}
