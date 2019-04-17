import React from "react"
import styles from "./Hero.module.scss"
import headshot from "../../images/headshot.png"
import TwitterIcon from "react-feather/dist/icons/twitter"
import GitHubIcon from "react-feather/dist/icons/github"
import LinkedInIcon from "react-feather/dist/icons/linkedin"
import config from "../../config"

export default () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <img className={styles.headshot} src={headshot} alt="headshot" />
        <div className={styles.socialContainer}>
          <div className={styles.socialContainerInner}>
            <a
              href={config.twitterUrl}
              aria-label="View my twitter page"
              className={styles.socialIconWrapper}
            >
              <TwitterIcon className={styles.socialIcon} />
            </a>
            <a
              href={config.githubUrl}
              aria-label="View my GitHub page"
              className={styles.socialIconWrapper}
            >
              <GitHubIcon className={styles.socialIcon} />
            </a>
            <a
              href={config.linkedInUrl}
              aria-label="View my linkedin page"
              className={styles.socialIconWrapper}
            >
              <LinkedInIcon className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.h1}>Hey, I'm Dave!</h1>
        <hr className={styles.hr} />
        <h2 className={styles.h2}>Fullstack Engineer</h2>
        <h2 className={styles.h2}>Lorem Ipmsum Guru</h2>
        <div className={styles.buttonContainer}>
          <a className={styles.button} href="https://google.com">
            Contact Me
          </a>
        </div>
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.aboutMe}>
        <h1>About Me</h1>
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
