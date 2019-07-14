import React from "react"
import styles from "./SocialIcon.module.scss"
import TwitterIcon from "react-feather/dist/icons/twitter"
import GitHubIcon from "react-feather/dist/icons/github"
import LinkedInIcon from "react-feather/dist/icons/linkedin"

const iconTypeMap = {
  twitter: TwitterIcon,
  github: GitHubIcon,
  linkedIn: LinkedInIcon,
}

export default ({ className, size, type }) => {
  const Icon = iconTypeMap[type]
  const classNames = `${styles.container} ${styles[size]} ${className}`
  return (
    <div className={classNames}>
      <Icon />
    </div>
  )
}
