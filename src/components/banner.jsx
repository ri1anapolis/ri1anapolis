import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import bg from "../images/bg_repeat.jpg"

const useStyles = makeStyles(theme => ({
  banner: {
    position: "relative",
    height: "350px",
    backgroundColor: "#141414",
    background: `linear-gradient(90deg, rgba(20,20,20,.95) 0%, rgba(40,40,40,.95) 35%, rgba(20,20,20,.95) 80%), url(${bg})`,
    borderBottom: "2px solid #606060",
    color: "#FFF",
    overflow: "hidden",
    outline: "none",
  },
}))

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Banner = ({ children }) => {
  const classes = useStyles()
  const [playable, setPlayable] = useState(false)

  useEffect(() => {
    if (!!children && children.length > 1) setPlayable(true)
  }, [children, setPlayable])

  return (
    <Carousel
      responsive={responsive}
      className={classes.banner}
      removeArrowOnDeviceType={["mobile", "tablet"]}
      infinite
      swipeable={playable}
      draggable={playable}
      arrows={playable}
      showDots={playable}
      autoPlay={playable}
      autoPlaySpeed={10000}
    >
      {children}
    </Carousel>
  )
}

export default Banner
