import makeStyles from "@material-ui/styles/makeStyles"

const headerHeight = "90px"

const useStyles = makeStyles(theme => ({
  headerPlaceholder: {
    height: headerHeight,
  },
  header: {
    zIndex: theme.zIndex.appBar + 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: headerHeight,
    background: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%), rgb(170,126,61) !important`,
  },
  title: {
    fontWeight: "800",
    fontSize: "16px",
    color: "#3b2c12",
    textShadow: "1px 1px 2px #efe1ca",
  },
  content: {
    padding: "10px",
    maxWidth: "1260px",
    width: "100%",
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  logoContainer: {
    width: "min-content",
    minWidth: "300px",
  },
  logo: {
    width: "70px",
    height: "70px",
  },
  logoLink: {
    textDecoration: "none",
    outline: "none",
  },
  headerBarMenuButton: {
    width: "160px",
    padding: 0,
    marginTop: "-6px",
    textTransform: "none",
    fontWeight: "300",
    fontSize: "1.5em",
    textTransform: "lowercase",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  headerBarMenuButtonEndIcon: {
    marginTop: "6px",
  },
  defaultMenuContainer: {
    maxWidth: "200px",
    marginLeft: "calc(2vw + 3px)",
  },
  defaultMenuButton: {
    fontSize: "0.91rem",
    wordWrap: "",
    color: "#5f3f09",
    textDecoration: "none",
    textTransform: "uppercase",
    borderTop: "1px solid #caa36a",
    padding: "10px 20px",
    borderRadius: 0,
    transition: "0.4s",
    "&:hover": {
      borderTop: "1px solid #252220",
      color: "#252220",
    },
  },
  exMenuWrapper: {
    height: 0,
  },
  exMenuContainer: {
    position: "absolute",
    top: parseInt(headerHeight),
    left: 0,
    paddingTop: "20px",
    backgroundColor: "#FFF",
    background: `linear-gradient(145deg, #f0f0f0 0%, #fbfbfb 50%, #f6f6f6 100%)`,
    borderBottom: `3px solid`,
    borderImage: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%) 1`,
  },
  exMenuFooterContainer: {
    height: "20px",
    background: `linear-gradient(45deg, rgba(220,220,220,.3) 0%, rgba(240,240,240,.3) 50%, rgba(220,220,220,.3) 80%), url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23AA7E3D' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
  },
  exMenuGroup: {
    padding: "10px",
  },
  exMenuTitle: {
    color: "#c3c3c3",
  },
  exMenuItem: {
    textDecoration: "none",
    color: theme.palette.secondary.light,
    padding: "0 2px",
  },
  exMenuItemText: {
    fontSize: "1.1em",
  },
  exMenuItemDescription: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.82em",
    },
    fontSize: "0.9em",
  },
}))

export default useStyles
