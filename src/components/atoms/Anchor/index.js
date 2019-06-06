import React from "react"
import { Link } from "react-scroll"
import styles from "./Anchor.module.scss"

const createAnchor = Container => ({ className, theme, ...restProps }) => {
  return (
    <Container
      className={`${styles.container} ${styles[theme]} ${className}`}
      {...restProps}
    />
  )
}

export default createAnchor("a")

export const ScrollAnchor = createAnchor(Link)
