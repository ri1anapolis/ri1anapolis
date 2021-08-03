import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  channelListBlock: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemIcon: {
    minWidth: "30px",
    "& > svg": {
      color: "#FFF",
    },
  },
  locationImg: {
    width: "30vw",
    height: "auto",
    maxWidth: "75px",
    maxHeight: "75px",
    margin: "0 5px",
  },
  alignTextRight: {
    textAlign: "right",
  },
  contactLink: {
    textDecoration: "none",
    color: "#FFF",
  },
  routeButton: {
    width: "max-content",
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "0.75em",
    padding: "0 10px",
    margin: "0 auto",
  },
  wrapper: {
    position: "relative",
    width: "100%",
    height: "300px",
    backgroundColor: "#e6e4e0",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bgMap: {
    width: "100%",
    maxWidth: "1920px",
    height: "100%",
    margin: "0 auto",
    objectFit: "cover",
  },

  actionDiv: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    "@media(hover:none)": {
      padding: "0px 20px",
      color: "#fff",
      "&> p": {
        backgroundColor: "rgba(0,0,0,0.25)",
        height: "fit-content",
        padding: "2px 6px",
        borderRadius: "20px",
      },
    },
    "@media(hover:hover)": {
      padding: "20px",
      alignItems: "center",
      fontSize: "clamp(1.2em, 3vw, 48px)",
      color: "transparent",
      transitionProperty: "color, background-color",
      transitionDuration: "0.25s",
      transitionTimingFunction: "ease-out",
      "&:hover": {
        color: "#fff",
        backgroundColor: "rgba(0,0,0,0.5)",
      },
    },
  },
}))

export default useStyles
