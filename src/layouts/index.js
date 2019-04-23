/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import PropTypes from "prop-types"
import Footer from "../components/Footer"
import { Nav, FloatingNav } from "../components/Nav"

import "normalize.css"
import "../styles/main.scss"

const Layout = ({ children }) => {
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  return (
    <>
      <div id="about-me">
        <div className="head-section">
          <Nav />
          <FloatingNav visible={showFloatingNav} />
          <Waypoint
            onEnter={() => setShowFloatingNav(false)}
            onLeave={() => setShowFloatingNav(true)}
          />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
