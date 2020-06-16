import "typeface-open-sans"
import { makeStyles } from "@material-ui/core"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
            backgroundColor: "#F5F5F5",
            overflowX: "auto",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: "#c3c3c3",
            overflowX: "auto",
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: "rgb(75,125,175)",
    },
    secondary: {
      main: "#4caf50",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
    fontSize: 16,

    h1: {
      fontWeight: 300,
      letterSpacing: ".2rem",
      marginBottom: "1.6rem",
    },
    h2: {
      fontWeight: 300,
      letterSpacing: ".2rem",
      marginBottom: "1.4rem",
    },
    h3: {
      fontWeight: 300,
      letterSpacing: ".2rem",
      marginBottom: "1.2rem",
    },
    h4: {
      fontWeight: 300,
      letterSpacing: ".2rem",
      marginBottom: "1rem",
    },
    h5: {
      fontWeight: 300,
      letterSpacing: ".1rem",
      marginBottom: ".4rem",
    },
    h6: {
      fontWeight: 300,
      letterSpacing: ".1rem",
      marginBottom: ".4rem",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1.5rem",
      letterSpacing: ".05rem",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "1.1rem",
      letterSpacing: ".05rem",
    },
    body1: {
      fontWeight: 300,
      fontSize: "1rem",
      letterSpacing: ".01rem",
    },
    body2: {
      fontWeight: 300,
      fontSize: "1rem",
      letterSpacing: ".01rem",
    },
    caption: {
      fontWeight: 300,
      fontSize: "0.9rem",
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
