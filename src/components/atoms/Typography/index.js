import React from "react"
import styles from "./Typography.module.scss"

/* eslint-disable jsx-a11y/heading-has-content */

export const Span = ({ className, theme, ...restProps }) => (
  <span
    className={`${styles.span} ${styles[theme]} ${className}`}
    {...restProps}
  />
)

export const P = ({ className, theme, ...restProps }) => (
  <p className={`${styles.p} ${styles[theme]} ${className}`} {...restProps} />
)

export const H2 = ({ className, theme, underline, ...restProps }) => (
  <h2
    className={`${styles.h2} ${styles[theme]} ${underline &&
      styles.fancyUnderline} ${className}`}
    {...restProps}
  />
)

export const H3 = ({ className, theme, ...restProps }) => (
  <h3 className={`${styles.h3} ${styles[theme]} ${className}`} {...restProps} />
)

export const H4 = ({ className, theme, ...restProps }) => (
  <h4 className={`${styles.h4} ${styles[theme]} ${className}`} {...restProps} />
)

export const HR = ({ className, theme, ...restProps }) => (
  <hr className={`${styles.hr} ${styles[theme]} ${className}`} {...restProps} />
)
