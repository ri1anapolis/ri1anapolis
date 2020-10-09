import Button from "@material-ui/core/Button"
import withStyles from "@material-ui/styles/withStyles"

const styledSearchButtonFactory = theme => {
  return withStyles(
    {
      root: {
        marginLeft: "20px",
        padding: "4px 20px",
        [theme.breakpoints.down("xs")]: {
          margin: "10px auto",
          width: "100%",
        },
      },
    },
    { withTheme: theme }
  )(Button)
}

export default styledSearchButtonFactory
