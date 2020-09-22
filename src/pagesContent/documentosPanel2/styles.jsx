import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    maxWidth: "500px",
    minWidth: "300px",
    height: "100%",
    overflow: "hidden",
    flexFlow: "column",
    "& > div": {
      overflowX: "hidden",
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "#F5F5F5",
        overflowX: "auto",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
        backgroundColor: "#f0f0f0",
        overflowX: "auto",
      },
    },
  },
  list: {
    height: "100%",
    overflowX: "hidden",
    marginBottom: "10px",
    overscrollBehavior: "none",
    overscrollBehaviorBlock: "none",
    "&> div:last-child": {
      marginBottom: "50px !important",
    },
  },
}))

export default useStyles
