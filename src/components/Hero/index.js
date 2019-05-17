import React from "react"
import styles from "./Hero.module.scss"
import headshot from "../../images/headshot.png"
import config from "../../config"
import { Button } from "../atoms/Button"
import SocialIcon from "../atoms/SocialIcon"

export default ({ showContactForm }) => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <img className={styles.headshot} src={headshot} alt="headshot" />
        <div className={styles.socialLinks}>
          <a href={config.twitterUrl} aria-label="twitter">
            <SocialIcon type="twitter" />
          </a>
          <a href={config.githubUrl} aria-label="github">
            <SocialIcon type="github" />
          </a>
          <a href={config.linkedInUrl} aria-label="linkedIn">
            <SocialIcon type="linkedIn" />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.h1}>Hey, I'm Dave!</h1>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>Fullstack Engineer</h2>
        <h2 className={styles.h2}>Lorem Ipmsum Guru</h2>
        <div className={styles.buttonContainer}>
          <Button
            theme="dark"
            className={styles.button}
            onClick={showContactForm}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.aboutMe}>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
)
