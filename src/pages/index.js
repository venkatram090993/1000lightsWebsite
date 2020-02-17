import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/homePage/homeLayout"
import SEO from "../components/homePage/seo"
import About from "../components/homePage/About"
import HeaderBlock from "../components/homePage/HeaderBlock"
import InstallationSteps from "../components/homePage/InstallationSteps"
import Banner2 from "../components/homePage/Banner2"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <section class="p-4 justify-center lg:my-10 lg:mb-10 sm: mb-10">
          <HeaderBlock />
        </section>
        <section class="lg:px-20 relative">
          <About />
        </section>
        <section class="relative">
          <InstallationSteps />
        </section>
        <section class="lg:pb-10">
          <Banner2 />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
