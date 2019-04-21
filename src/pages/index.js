import React from "react"
import Layout from "../layouts"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Speaking from "../components/Speaking"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Projects />
    <Speaking />
  </Layout>
)

export default IndexPage
