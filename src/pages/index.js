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
      <div className="parallax-top"></div>
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
          <Img
            fluid={data.fyrstuForoysku.childImageSharp.fluid}
            className="about-item"
          />
          <p className="center about-item">
            Hey Breyð leggur dent á orð og ljóð og snýr seg serstakliga um
            málputlispøl, ið kunnu loysast við at fáa orð at ríma. Spælið er
            ætlað lítlum børnum við vaksnari umsjón.
          </p>
          <p className="center about-item">
            Í spælinum lærir tú tey fyrstu føroysku orðini. Tú kanst spæla antin
            sum Bina ella sum Broddi, og tú lærir, hvat omman og abbin gera á
            bóndagarðinum.
          </p>
        </div>
        <div className="parallax"></div>
        <div className="team">
          <div className="team-column">
            <Img
              fluid={data.gjortHava.childImageSharp.fluid}
              className="team-item"
            />
            <ul className="team-item">
              <li>Páll Brim, tónleikari</li>
              <li>Julius Biskopstø, forritari</li>
              <li>Ólavur Ellefsen, testari</li>
              <li>Jóhann Østerø, forritari</li>
              <li>Hans Jacob Østerø, teknari</li>
              <li>Marin Fríhild Kamban, námsfrøðingur</li>
              <li>Elinborg Osvaldsdóttir, málfrøðingur</li>
            </ul>
          </div>
          <div className="team-column">
            <Img
              fluid={data.gamanGamesLogo.childImageSharp.fluid}
              className="team-item team-logo"
            />
            <Img
              fluid={data.toymid.childImageSharp.fluid}
              className="team-item"
            />
          </div>
          <div className="team-column">
            <Img
              fluid={data.studladHevur.childImageSharp.fluid}
              className="team-item"
            />{" "}
            <Img
              fluid={data.torshavnarKommuna.childImageSharp.fluid}
              className="team-item team-logo"
            />
          </div>
        </div>
      </section>
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
    fyrstuForoysku: file(
      relativePath: { eq: "tey-fyrstu-foroysku-ordini.webp" }
    ) {
      ...fluidImage
    }
    gjortHava: file(relativePath: { eq: "gjort-hava.webp" }) {
      ...fluidImage
    }
    gamanGamesLogo: file(relativePath: { eq: "gaman-games-logo.webp" }) {
      ...fluidImage
    }
    toymid: file(relativePath: { eq: "toymid.webp" }) {
      ...fluidImage
    }
    studladHevur: file(relativePath: { eq: "studlad-hevur.webp" }) {
      ...fluidImage
    }
    torshavnarKommuna: file(relativePath: { eq: "torshavnar-kommuna.webp" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
