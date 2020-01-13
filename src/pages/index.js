import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeaderBlock from "../components/HeaderBlock"
import About from "../components/About"
import InstallationSteps from "../components/InstallationSteps"
import Banner2 from "../components/Banner2"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="pt-16">
      <section class="p-4 justify-center lg:my-10 lg:mb-10 sm: mb-10">
        <HeaderBlock />
      </section>
      <section class="lg:px-20">
        <About />
      </section>
      <section>
        <InstallationSteps />
      </section>{" "}
      <section>
        <Banner2 />
      </section>
    </div>
  </Layout>
)

export default IndexPage
