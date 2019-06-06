import React from "react"
import styles from "./Hero.module.scss"
import headshot from "../../images/headshot.png"
import config from "../../config"
import { Button } from "../atoms/Button"
import SocialIcon from "../atoms/SocialIcon"
import { P, H2, HR } from "../atoms/Typography"
import Anchor from "../atoms/Anchor"
import { Nav } from "../Nav"

export default ({ showContactForm }) => (
  <div className={styles.container}>
    <Nav />
    <div className={styles.hero}>
      <div className={styles.row}>
        <div className={styles.left}>
          <img className={styles.headshot} src={headshot} alt="headshot" />
          <div className={styles.socialLinks}>
            <Anchor href={config.twitterUrl} aria-label="twitter" theme="dark">
              <SocialIcon type="twitter" />
            </Anchor>
            <Anchor href={config.githubUrl} aria-label="github" theme="dark">
              <SocialIcon type="github" />
            </Anchor>
            <Anchor
              href={config.linkedInUrl}
              aria-label="linkedIn"
              theme="dark"
            >
              <SocialIcon type="linkedIn" />
            </Anchor>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.heading}>Hey, I'm Dave!</h1>
          <HR className={styles.hr} />
          <h2 className={styles.subheading} theme="dark">
            Fullstack Engineer
          </h2>
          <h2 className={styles.subheading} theme="dark">
            Lorem Ipmsum Guru
          </h2>
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
        <div>
          <H2 theme="dark" underline>
            About Me
          </H2>
          <P theme="dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
        </div>
      </div>
    </div>
  </div>
)
