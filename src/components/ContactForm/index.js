import React from "react"
import { toast } from "react-toastify"
import axios from "axios"
import styles from "./ContactForm.module.scss"
import loadingImage from "../../images/loading.svg"
import AlertCircle from "react-feather/dist/icons/alert-circle"
import Modal from "../atoms/Modal"
import { P, H3 } from "../atoms/Typography"
import { Submit } from "../atoms/Button"

const honeyPotField = "realFieldPlzUse"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const isValid = formData => {
  const fieldKeys = Object.keys(formData).filter(k => k !== honeyPotField)

  return fieldKeys.reduce((acc, key) => {
    return acc && !!formData[key]
  }, true)
}

export default class ContactForm extends React.Component {
  initialFormData = { emailAddress: "", message: "", [honeyPotField]: "" }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      error: false,
      formData: { ...this.initialFormData },
    }
  }

  submit = (event, hideContactForm) => {
    event.preventDefault()
    this.setState({ isLoading: true, error: false })
    return axios
      .post("", encode({ "form-name": "contact", ...this.state.formData }), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        timeout: 5000,
      })
      .then(() => {
        hideContactForm()
        this.clearForm()
        toast("Message Sent!")
      })
      .catch(() => {
        this.setState({ error: "Error sending message. Please try again!" })
      })
      .finally(() => this.setState({ isLoading: false }))
  }

  clearForm = () => {
    this.setState({ formData: { ...this.initialFormData } })
  }

  setFieldValue = (field, value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [field]: value,
      },
    })
  }

  render() {
    const { visible, hideContactForm } = this.props
    const { formData, isLoading, error } = this.state

    return (
      <Modal isOpen={visible} onClose={hideContactForm}>
        <div className={styles.container}>
          <H3>Contact Me</H3>
          <form
            onSubmit={e => this.submit(e, hideContactForm)}
            name="contact"
            data-netlify="true"
            data-netlify-honeypot={honeyPotField}
          >
            <p style={{ display: "none" }}>
              <label htmlFor="contact-real-field">
                This is not real. Don't use it.
              </label>
              <input
                id="contact-real-field"
                name={honeyPotField}
                type="text"
                value={formData[honeyPotField]}
                onChange={e =>
                  this.setFieldValue(honeyPotField, e.target.value)
                }
              />
            </p>
            <label htmlFor="#contact-email">Your email address</label>
            <input
              id="contact-email"
              name="emailAddress"
              type="text"
              value={formData.emailAddress}
              onChange={e => this.setFieldValue("emailAddress", e.target.value)}
            />
            <label htmlFor="#contact-email">What's up?</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={e => this.setFieldValue("message", e.target.value)}
            />
            {error && (
              <div className={styles.errorMessage}>
                <AlertCircle />
                <P>{error}</P>
              </div>
            )}
            {isLoading ? (
              <div className={styles.loadingIndicator}>
                <img alt="form loading" src={loadingImage} />
              </div>
            ) : (
              <Submit
                block
                theme="light"
                disabled={isLoading || !isValid(formData)}
              />
            )}
          </form>
        </div>
      </Modal>
    )
  }
}
