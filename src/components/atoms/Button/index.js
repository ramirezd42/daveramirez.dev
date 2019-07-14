import React from "react"
import styles from "./Button.module.scss"

const createButton = (Container, containerProps = {}) => ({
  onClick,
  children,
  size,
  theme,
  block,
  className,
  disabled,
  value,
}) => {
  const classNames = `
    ${styles.button}
    ${styles[size]}
    ${styles[theme]}
    ${block && styles.block}
    ${className}
  `

  return (
    <Container
      {...containerProps}
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      value={value}
    >
      {children}
    </Container>
  )
}

export const Button = createButton(`button`)
export const Submit = createButton(`input`, { type: "submit" })
