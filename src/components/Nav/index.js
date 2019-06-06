import React from "react"
import UserIcon from "react-feather/dist/icons/user"
import CodeIcon from "react-feather/dist/icons/code"
import MicIcon from "react-feather/dist/icons/mic"
import styles from "./Nav.module.scss"
import { ScrollAnchor } from "../atoms/Anchor"

const NavLink = ({ to, ...restProps }) => (
  <ScrollAnchor
    smooth
    duration="400"
    to={to}
    className={styles.link}
    {...restProps}
  />
)

const Links = ({ theme }) => (
  <>
    <NavLink to="about-me" theme={theme}>
      <UserIcon className={styles.icon} /> About Me
    </NavLink>
    <NavLink to="projects" theme={theme}>
      <CodeIcon className={styles.icon} /> Projects
    </NavLink>
    <NavLink to="speaking" theme={theme}>
      <MicIcon className={styles.icon} /> Speaking
    </NavLink>
  </>
)

export const Nav = props => (
  <div className={styles.container} {...props}>
    <Links theme="dark" />
  </div>
)

export const FloatingNav = ({ visible, ...restProps }) => {
  const className = `${styles.container} ${styles.floating} ${
    visible ? styles.visible : styles.hidden
  }`
  return (
    <div className={className} {...restProps}>
      <Links theme="light" />
    </div>
  )
}
