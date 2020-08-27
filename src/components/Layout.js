import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout