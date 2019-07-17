import React from "react"
import styles from "./Button.module.scss"

const createButton = (Container, containerProps = {}) => ({
  children,
  size,
  theme,
  block,
  className,
  ...restProps
}) => {
  const classNames = `
    ${styles.button}
    ${styles[size]}
    ${styles[theme]}
    ${block && styles.block}
    ${className}
  `

  return (
    <Container {...containerProps} {...restProps} className={classNames}>
      {children}
    </Container>
  )
}

export const Button = createButton(`button`)
export const AnchorButton = createButton(`a`)
export const Submit = createButton(`input`, { type: "submit" })
