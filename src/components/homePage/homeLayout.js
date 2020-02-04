import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./css/tailwind.css"
import "./css/layout.css"
import Footer from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {}

export default Layout
