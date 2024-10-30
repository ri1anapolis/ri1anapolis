import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  sections: {
    padding: "10px",
    paddingBottom: "20px",
  },
  inputs: {
    marginBottom: ".35rem",
  },
  title: {},
  captionContainer: {
    width: "100%",
  },
  buttonContainer: {
    flexShrink: 1,
  },
  button: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: 0,
      marginBottom: theme.spacing(1),
    },
  },
  link: {
    filter: "brightness(0.75)",
    textTransform: "none",
  },
  notice: {
    color: "#a0a0a0",

    flexGrow: 1,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {},
  },
  popoverStatus: {
    maxWidth: "500px",
    minWidth: "300px",
    padding: "30px",
  },
  hint: {
    color: "#808080 !important",
    fontSize: "0.85em !important",
    margin: "0 4px 4px 0",
    position: "relative",

    "&::before, &::after": {
      position: "absolute",
      display: "none",
      fontSize: "0.95em",
      textAlign: "center",
      color: "#808080",
    },
    "&:hover::before, &:hover::after": {
      display: "block",
      color: "#808080",
    },

    "&::after": {
      top: "25px",
      left: "30%",
      borderBottom: "6px solid #c0c0c0",
      borderRight: "6px solid transparent",
      borderLeft: "6px solid transparent",
      background: "#f3f3f3",
      content: "attr(data-empty)", //only shows with attr()
      zIndex: 200,
    },

    "&::before": {
      content: "attr(data-tooltip)",
      top: "30px",
      left: "-25px",
      width: "190px",
      border: "1px solid #c3c3c3",
      borderRadius: "4px",
      padding: "2px 6px",
      whiteSpace: "initial",
      background: "#fff",
      zIndex: 201,
    },
  },
}))

export default useStyles
