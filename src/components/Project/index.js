import React from "react"
import styles from "./Project.module.scss"

export default ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{title}</h3>
      <p className={styles.p}>{children}</p>
    </div>
  )
}
