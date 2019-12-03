import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img
          fluid={data.vakridalurKamt.childImageSharp.fluid}
          className="hero-image"
        />
      </section>
      <section className="container">
        <div className="gallery">
          <Img
            fluid={data.aFlot.childImageSharp.fluid}
            className="gallery-item"
          />
          <Img
            fluid={data.fjosid.childImageSharp.fluid}
            className="gallery-item"
          />
          <Img
            fluid={data.vakridalur.childImageSharp.fluid}
            className="gallery-item"
          />
        </div>
        <div className="about">
          <h2>Tey fyrstu føroysku orðini</h2>
          <p>
            Hey Breyð leggur dent á orð og ljóð og snýr seg serstakliga um
            málputlispøl, ið kunnu loysast við at fáa orð at ríma. Spælið er
            ætlað lítlum børnum við vaksnari umsjón.
          </p>
          <p>
            Í spælinum lærir tú tey fyrstu føroysku orðini. Tú kanst spæla antin
            sum Bina ella sum Broddi, og tú lærir, hvat omman og abbin gera á
            bóndagarðinum.
          </p>
        </div>
      </section>
      <div className="parallax"></div>
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    vakridalurKamt: file(relativePath: { eq: "vakridalur-kamt.webp" }) {
      ...fluidImage
    }
    vakridalurKlart: file(relativePath: { eq: "vakridalur-klart.webp" }) {
      ...fluidImage
    }
    aFlot: file(relativePath: { eq: "a-flot.webp" }) {
      ...fluidImage
    }
    fjosid: file(relativePath: { eq: "fjosid.webp" }) {
      ...fluidImage
    }
    vakridalur: file(relativePath: { eq: "vakridalur.webp" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
