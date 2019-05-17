import React from "react"
import { Link } from "react-scroll"
import UserIcon from "react-feather/dist/icons/user"
import CodeIcon from "react-feather/dist/icons/code"
import MicIcon from "react-feather/dist/icons/mic"
import styles from "./Nav.module.scss"

const NavLink = props => (
  <Link className={styles.link} smooth duration="400" {...props} />
)

const Links = () => (
  <>
    <NavLink to="about-me">
      <UserIcon className={styles.icon} /> About Me
    </NavLink>
    <NavLink to="projects">
      <CodeIcon className={styles.icon} /> Projects
    </NavLink>
    <NavLink to="speaking">
      <MicIcon className={styles.icon} /> Speaking
    </NavLink>
  </>
)

export const Nav = props => (
  <div className={styles.container} {...props}>
    <Links />
  </div>
)

export const FloatingNav = ({ visible, ...restProps }) => {
  const className = `${styles.container} ${styles.floating} ${
    visible ? styles.visible : styles.hidden
  }`
  return (
    <div className={className} {...restProps}>
      <Links />
    </div>
  )
}
