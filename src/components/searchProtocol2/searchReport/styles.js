import makeStyles from "@material-ui/styles/makeStyles"

const styles = makeStyles({
  hyphenate: {
    wordWrap: "break-word !important",
    overflowWrap: "break-word !important",
    "-webkit-hyphens": "auto",
    "-ms-hyphens": "auto",
    hyphens: "auto",
  },
  verificationInput: {
    "&input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
  dialogContent: {
    overflowX: "hidden",
    marginBottom: "5px",
  },
  dialogButton: {
    padding: "6px 25px",
  },
  captchaWrapper: {
    position: "relative",
    height: "78px",
  },
  captchaContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#FFF",
  },
})

export default styles
