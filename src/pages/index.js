import React, { useState } from "react"
import Layout from "../layouts"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Speaking from "../components/Speaking"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const IndexPage = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false)
  const showContactForm = () => setContactFormVisible(true)
  const hideContactForm = () => setContactFormVisible(false)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Hero showContactForm={showContactForm} />
      <Projects />
      <Speaking />
      <ContactForm
        visible={contactFormVisible}
        hideContactForm={hideContactForm}
      />
      <Footer showContactForm={showContactForm} />
    </Layout>
  )
}

export default IndexPage
