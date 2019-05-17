import React from "react"
import styles from "./Footer.module.scss"
import { Button } from "../atoms/Button"
import SocialIcon from "../atoms/SocialIcon"
import config from "../../config"

export default ({ showContactForm }) => (
  <footer className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <Button
          theme="dark"
          size="sm"
          onClick={showContactForm}
          className={styles.button}
        >
          Contact Me
        </Button>
      </div>
      <div className={styles.right}>
        <a className={styles.socialSection} href={config.twitterUrl}>
          <SocialIcon type="twitter" size="sm" className={styles.socialIcon} />
          <div className={styles.socialLink}>@daveramirez</div>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.githubUrl}>
          <SocialIcon type="github" size="sm" className={styles.socialIcon} />
          <div className={styles.socialLink}>/ramirezd42</div>
        </a>
        <div className={styles.separator} />
        <a className={styles.socialSection} href={config.linkedInUrl}>
          <SocialIcon className={styles.socialIcon} size="sm" type="linkedIn" />
          <div className={styles.socialLink}>/dave-ramirez</div>
        </a>
      </div>
    </div>
  </footer>
)
