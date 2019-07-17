import React from "react"
import { Link } from "react-scroll"
import styles from "./Anchor.module.scss"

const createAnchor = Container => ({
  className,
  theme,
  underline,
  ...restProps
}) => {
  const classNames = `
    ${styles.container}
    ${styles[theme]}
    ${className}
    ${underline && styles.underline}
  `
  return <Container className={classNames} {...restProps} />
}

export default createAnchor("a")

export const ScrollAnchor = createAnchor(Link)
