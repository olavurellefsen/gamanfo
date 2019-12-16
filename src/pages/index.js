import React, { useState, useEffect } from "react"
import posed, { PoseGroup } from "react-pose"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setIsVisible(true),[])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="top-container">
        <a href="https://www.facebook.com/gamangames">
          <Img
            fluid={data.facebookIkon.childImageSharp.fluid}
            className="facebook-ikon"
            style={{ position: "absolute" }}
          />
        </a>
        <PoseGroup>
          {isVisible && [
            <Box key="hey-breyd" className="box" style={{ position: "absolute" }}>
              <Img
                fluid={data.heyBreyd.childImageSharp.fluid}
                className="hey-breyd"
                style={{ position: "absolute" }}
              />
            </Box>,
          ]}
        </PoseGroup>

        <a href="https://apps.apple.com/sa/app/heybreyd/id1449597688">
          <Img
            fluid={data.appStoreIkon.childImageSharp.fluid}
            className="app-store-ikon"
            style={{ position: "absolute" }}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.Gaman.Hey_Breyd">
          <Img
            fluid={data.googlePlayIkon.childImageSharp.fluid}
            className="google-play-ikon"
            style={{ position: "absolute" }}
          />
        </a>        
        <Img
          fluid={data.broddiHey.childImageSharp.fluid}
          className="broddi-hey"
          style={{ position: "absolute" }}
        />
        <Img
          fluid={data.binaHey.childImageSharp.fluid}
          className="bina-hey"
          style={{ position: "absolute" }}
        />
        <div className="parallax-top-container">
          <div className="parallax-top"></div>
        </div>
      </div>
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
          <h1>Tey fyrstu føroysku orðini</h1>
          <p className="about-item">
            Hey Breyð leggur dent á orð og ljóð og snýr seg serstakliga um
            málputlispøl, ið kunnu loysast við at fáa orð at ríma. Spælið er
            ætlað lítlum børnum við vaksnari umsjón.
          </p>
          <p className="about-item">
            Í spælinum lærir tú tey fyrstu føroysku orðini. Tú kanst spæla antin
            sum Bina ella sum Broddi, og tú lærir, hvat omman og abbin gera á
            bóndagarðinum.
          </p>
        </div>
        <div className="parallax"></div>
        <div className="team">
          <div className="team-column">
            <h1>Gjørt hava</h1>
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
            <h1>Stuðlað hevur</h1>
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
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    heyBreyd: file(relativePath: { eq: "hey-breyd.png" }) {
      ...fluidImage
    }
    appIkon: file(relativePath: { eq: "app-ikon.png" }) {
      ...fluidImage
    }
    appStoreIkon: file(relativePath: { eq: "app-store-ikon.png" }) {
      ...fluidImage
    }
    googlePlayIkon: file(relativePath: { eq: "google-play-ikon.png" }) {
      ...fluidImage
    }    
    binaHey: file(relativePath: { eq: "bina-hey.png" }) {
      ...fluidImage
    }
    broddiHey: file(relativePath: { eq: "broddi-hey.png" }) {
      ...fluidImage
    }
    facebookIkon: file(relativePath: { eq: "facebook-ikon.png" }) {
      ...fluidImage
    }
    vakridalurKamt: file(relativePath: { eq: "vakridalur-kamt.png" }) {
      ...fluidImage
    }
    vakridalurKlart: file(relativePath: { eq: "vakridalur-klart.png" }) {
      ...fluidImage
    }
    aFlot: file(relativePath: { eq: "a-flot.png" }) {
      ...fluidImage
    }
    fjosid: file(relativePath: { eq: "fjosid.png" }) {
      ...fluidImage
    }
    vakridalur: file(relativePath: { eq: "vakridalur.png" }) {
      ...fluidImage
    }
    gamanGamesLogo: file(relativePath: { eq: "gaman-games-logo.png" }) {
      ...fluidImage
    }
    toymid: file(relativePath: { eq: "toymid.png" }) {
      ...fluidImage
    }
    torshavnarKommuna: file(relativePath: { eq: "torshavnar-kommuna.png" }) {
      ...fluidImage
    }
  }
`

const Box = posed.div({
  enter: {
    scale: 1,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 500 },
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 150 },
  },
})

export default IndexPage
