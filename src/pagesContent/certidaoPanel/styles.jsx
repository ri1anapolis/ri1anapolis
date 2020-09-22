import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  sections: {
    padding: "10px",
    paddingBottom: "20px",
  },
  inputs: {
    marginBottom: ".35rem",
  },
  captionContainer: {
    width: "100%",
    order: "1",
    [theme.breakpoints.down("xs")]: {
      order: "4",
    },
  },
  buttonContainer: {
    order: "7",
    flexShrink: 1,
    [theme.breakpoints.up("md")]: {
      order: "2",
    },
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  notice: {
    color: "#a0a0a0",
    order: "8",
    flexGrow: 1,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      order: "6",
    },
    [theme.breakpoints.down("xs")]: {
      order: "0",
    },
  },
  glowText: {
    "-webkit-transition": "color 2s ease, text-shadow 2s ease",
    "-moz-transition": "color 2s ease, text-shadow 2s ease",
    "-o-transition": "color 2s ease, text-shadow 2s ease",
    transition: "color 2s ease, text-shadow 2s ease",
  },
  popoverStatus: {
    maxWidth: "500px",
    minWidth: "300px",
    padding: "30px",
  },
}))

export default useStyles
