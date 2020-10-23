import makeStyles from "@material-ui/styles/makeStyles"

const styles = makeStyles(theme => ({
  searchContainer: {
    margin: "30px 0",
  },
  searchBox: {
    "& input": {
      width: "280px",
    },
    "&input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}))

export default styles
