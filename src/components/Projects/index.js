import React, { useState } from "react"
import styles from "./Projects.module.scss"
import Project from "../Project"
import vstJsLogo from "../../images/vstjs-logo.png"
import nodeAudioLogo from "../../images/node-audio-logo.png"
import axios from "axios"

const submit = (event, formData) => {
  event.preventDefault()
  return axios
    .post("", encode({ "form-name": "contact", ...formData }), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      timeout: 5000,
    })
    .then(() => alert("success!"))
    .catch(e => alert(e))
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    message: "",
    realFieldPlzUse: "",
  })

  return (
    <div className={styles.container} id="projects">
      <div className={styles.row}>
        <h2 className={styles.h2}>Projects</h2>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.projectList}>
          <Project
            title="vst.js"
            logoSrc={vstJsLogo}
            projectLink="https://github.com/ramirezd42/vst-js"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Project>
          <Project
            title="node-audio"
            logoSrc={nodeAudioLogo}
            projectLink="https://github.com/ramirezd42/node-audio"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Project>
        </div>
      </div>
      <form
        onSubmit={e => submit(e, formData)}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="realFieldPlzUse"
      >
        <p style={{ display: "none" }}>
          <label htmlFor="contact-real-field">
            This is not real. Don't use it.
          </label>
          <input
            id="contact-real-field"
            name="realFieldPlzUse"
            type="text"
            value={formData.realFieldPlzUse}
            onChange={e =>
              setFormData({
                ...formData,
                realFieldPlzUse: e.target.value,
              })
            }
          />
        </p>
        <label htmlFor="#contact-email">Your email address</label>
        <input
          id="contact-email"
          name="emailAddress"
          type="text"
          value={formData.emailAddress}
          onChange={e =>
            setFormData({
              ...formData,
              emailAddress: e.target.value,
            })
          }
        />
        <label htmlFor="#contact-email">What's up?</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={e =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
        />
        <input type="submit" />
      </form>
    </div>
  )
}
