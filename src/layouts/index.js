/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import { Waypoint } from "react-waypoint"
import PropTypes from "prop-types"
import { FloatingNav } from "../components/Nav"
import { ToastContainer } from "react-toastify"
import { X } from "react-feather"

import "normalize.css"
import "../styles/main.scss"
import "react-toastify/dist/ReactToastify.css"

// Tell react-modal the root element to support accessibility
import Modal from "react-modal"
Modal.setAppElement("#___gatsby")

const CloseToastButton = () => (
  <X width={15} height={15} className="Toastify__close-button" />
)
const Layout = ({ children }) => {
  const [showFloatingNav, setShowFloatingNav] = useState(false)
  return (
    <>
      <div id="about-me">
        <div>
          <ToastContainer
            className="toast-container"
            closeButton={<CloseToastButton />}
            autoClose={3000}
          />
          <FloatingNav visible={showFloatingNav} />
          <Waypoint
            onEnter={() => setShowFloatingNav(false)}
            onLeave={() => setShowFloatingNav(true)}
          />
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
