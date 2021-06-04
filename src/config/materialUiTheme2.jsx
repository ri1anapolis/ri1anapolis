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
        body: { paddingRight: "0px !important" },
      },
    },
  },

  palette: {
    primary: {
      main: "#c59543",
      contrastText: "#252220",
    },
    secondary: {
      main: "#252220",
      contrastText: "#fff",
    },
    info: {
      main: "#4373C5",
      light: "#69A9EE",
      dark: "#2F4C6B",
      contrastText: "#fff",
    },
    contrastThreshold: 3,
  },

  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
    fontSize: 16,

    h1: {
      letterSpacing: ".2rem",
      marginBottom: "1.6rem",
    },
    h2: {
      letterSpacing: ".2rem",
      marginBottom: "1.4rem",
    },
    h3: {
      letterSpacing: ".2rem",
      marginBottom: "1.2rem",
    },
    h4: {
      letterSpacing: ".2rem",
      marginBottom: "1rem",
    },
    h5: {
      letterSpacing: ".1rem",
      marginBottom: ".4rem",
    },
    h6: {
      letterSpacing: ".1rem",
      marginBottom: ".4rem",
    },
    subtitle1: {
      fontSize: "1.5rem",
      letterSpacing: ".05rem",
    },
    subtitle2: {
      fontSize: "1.1rem",
      letterSpacing: ".05rem",
    },
    body1: {
      fontSize: "1rem",
      letterSpacing: ".01rem",
    },
    body2: {
      fontSize: "1rem",
      letterSpacing: ".01rem",
    },
    caption: {
      fontSize: "0.9rem",
      letterSpacing: ".02rem",
    },
    overline: {
      letterSpacing: ".02rem",
    },
    button: {
      fontWeight: "600",
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
