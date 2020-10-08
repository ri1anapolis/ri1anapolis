import makeStyles from "@material-ui/styles/makeStyles"

const styles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
  dialogContent: {
    overflowX: "hidden",
    marginBottom: "5px",
  },
  dialogButton: {
    padding: "6px 25px",
  },
})

export default styles
