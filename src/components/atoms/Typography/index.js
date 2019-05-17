import React from "react"
import styles from "./Typography.module.scss"

export const P = ({ className, ...restProps }) => (
  <p className={`${styles.p} ${className}`} {...restProps} />
)
