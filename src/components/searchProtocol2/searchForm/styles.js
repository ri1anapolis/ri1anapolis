import makeStyles from "@material-ui/styles/makeStyles"

const styles = makeStyles(theme => ({
  searchContainer: {
    margin: "30px 0",
  },
  searchBox: {
    "& input": {
      width: "280px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

export default styles
