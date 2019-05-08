import React from "react"
import styles from "./Footer.module.scss"
import TwitterIcon from "react-feather/dist/icons/twitter"
import GitHubIcon from "react-feather/dist/icons/github"
import LinkedInIcon from "react-feather/dist/icons/linkedin"
import config from "../../config"

export default ({ showContactForm }) => (
  <footer className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <button className={styles.button} onClick={showContactForm}>
          Contact Me
        </button>
      </div>
      <div className={styles.right}>
        <a className={styles.socialSection} href={config.twitterUrl}>
          <div className={styles.socialButton}>
            <TwitterIcon className={styles.socialIcon} />
          </div>
          <div className={styles.socialLink}>@daveramirez</div>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.githubUrl}>
          <div className={styles.socialButton}>
            <GitHubIcon className={styles.socialIcon} />
          </div>
          <div className={styles.socialLink}>/ramirezd42</div>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.linkedInUrl}>
          <div className={styles.socialButton}>
            <LinkedInIcon className={styles.socialIcon} />
          </div>
          <div className={styles.socialLink}>/dave-ramirez</div>
        </a>
      </div>
    </div>
  </footer>
)
