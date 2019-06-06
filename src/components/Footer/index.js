import React from "react"
import styles from "./Footer.module.scss"
import { Button } from "../atoms/Button"
import SocialIcon from "../atoms/SocialIcon"
import Anchor from "../atoms/Anchor"
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
        <Anchor
          aria-label="twitter"
          className={styles.socialSection}
          href={config.twitterUrl}
          theme="dark"
        >
          <SocialIcon type="twitter" size="sm" className={styles.socialIcon} />
          <div className={styles.socialLink}>@daveramirez</div>
        </Anchor>
        <div className={styles.separator} />
        <Anchor
          aria-label="github"
          className={styles.socialSection}
          href={config.githubUrl}
          theme="dark"
        >
          <SocialIcon type="github" size="sm" className={styles.socialIcon} />
          <div className={styles.socialLink}>/ramirezd42</div>
        </Anchor>
        <div className={styles.separator} />
        <Anchor
          aria-label="linkedIn"
          className={styles.socialSection}
          href={config.linkedInUrl}
          theme="dark"
        >
          <SocialIcon className={styles.socialIcon} size="sm" type="linkedIn" />
          <div className={styles.socialLink}>/dave-ramirez</div>
        </Anchor>
      </div>
    </div>
  </footer>
)
