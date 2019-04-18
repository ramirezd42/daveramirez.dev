import React from "react"
import Layout from "../layouts"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
