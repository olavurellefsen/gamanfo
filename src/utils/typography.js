import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "24px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: "Caveat",
      styles: ["cursive"]
    },
    {
      name: "Londrina Outline",
      styles: ["italic"]
    }
  ],
  headerFontFamily: ["Caveat", "sans-serif"],
  bodyFontFamily: ["Caveat", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography;