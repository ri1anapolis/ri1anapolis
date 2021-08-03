import React from "react"
import makeStyles from "@material-ui/styles/makeStyles"
import map from "../images/map.svg"

const useStyles = makeStyles(theme => ({
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
    background: `url(${map}) no-repeat center center`,
    backgroundSize: "cover",
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
        backgroundColor: "rgba(0,0,0,0.15)",
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

export default function ContatoMap() {
  const classes = useStyles()
  document.addEventListener("touchstart", function () {}, true)
  return (
    <div className={classes.wrapper}>
      <a
        href="https://maps.app.goo.gl/AXwRVJ2z5u1v7k2N6"
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes.actionDiv}>
          <p>Clique para visualizar o mapa ampliado</p>
        </div>
      </a>
      <div className={classes.bgMap}></div>
    </div>
  )
}
