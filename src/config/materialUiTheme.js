import "typeface-open-sans"
import { makeStyles } from "@material-ui/core"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),

    fontSize: 16,

    h1: {
      fontWeight: 300,
      letterSpacing: ".2rem",
    },
    h2: {
      fontWeight: 300,
      letterSpacing: ".2rem",
    },
    h3: {
      fontWeight: 300,
      letterSpacing: ".2rem",
    },
    h4: {
      fontWeight: 300,
      letterSpacing: ".2rem",
    },
    h5: {
      fontWeight: 300,
      letterSpacing: ".1rem",
    },
    h6: {
      fontWeight: 300,
      letterSpacing: ".1rem",
    },
    subtitle1: {
      fontWeight: 300,
      letterSpacing: ".05rem",
    },
    subtitle2: {
      fontWeight: 300,
      letterSpacing: ".05rem",
    },
    body1: {
      fontWeight: 300,
      letterSpacing: ".01rem",
    },
    body2: {
      fontWeight: 300,
      letterSpacing: ".01rem",
    },
    caption: {
      fontWeight: 300,
      letterSpacing: ".02rem",
    },
    overline: {
      fontWeight: 300,
      letterSpacing: ".02rem",
    },
    button: {
      fontWeight: 300,
      letterSpacing: ".01rem",
    },
  },
})
theme = responsiveFontSizes(theme)

const useStyles = makeStyles(theme => ({
  root: {
    overflow: "hidden",
  },
}))

export default theme
export { theme, useStyles }
