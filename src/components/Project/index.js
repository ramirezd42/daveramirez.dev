import React from "react"
import styles from "./Project.module.scss"

export default ({ title, children, logoSrc, projectLink }) => {
  return (
    <a className={styles.container} href={projectLink}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logoSrc} />
        </div>
        <h3 className={styles.h3}>{title}</h3>
      </div>
      <p className={styles.p}>{children}</p>
    </a>
  )
}
