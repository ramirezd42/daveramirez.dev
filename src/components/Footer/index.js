import React from "react"
import styles from "./Footer.module.scss"
import TwitterIcon from "react-feather/dist/icons/twitter"
import GitHubIcon from "react-feather/dist/icons/github"
import LinkedInIcon from "react-feather/dist/icons/linkedin"
import config from "../../config"

export default () => (
  <footer className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <a className={styles.button} href="https://google.com">
          Contact Me
        </a>
      </div>
      <div className={styles.right}>
        <a className={styles.socialSection} href={config.twitterUrl}>
          <a className={styles.socialButton} href={config.twitterUrl}>
            <TwitterIcon className={styles.socialIcon} />
          </a>
          <a className={styles.socialLink} href={config.twitterUrl}>
            @daveramirez
          </a>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.githubUrl}>
          <a className={styles.socialButton} href={config.githubUrl}>
            <GitHubIcon className={styles.socialIcon} />
          </a>
          <a className={styles.socialLink} href={config.githubUrl}>
            /ramirezd42
          </a>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.twitterUrl}>
          <a className={styles.socialButton} href={config.twitterUrl}>
            <LinkedInIcon className={styles.socialIcon} />
          </a>
          <a className={styles.socialLink} href={config.twitterUrl}>
            /dave-ramirez
          </a>
        </a>
      </div>
    </div>
  </footer>
)
