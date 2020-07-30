import React, { useState, useEffect } from "react"
import { Fab, Fade } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import debounce from "../utils/debounce"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const StyledFab = withStyles(themes => ({
  root: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
}))(Fab)

const BackToTopButton = props => {
  const topElementId = `#${props.href}`
  const [visible, setVisible] = useState(false)

  function getDistanceFromTop() {
    if (typeof window === `undefined`) return 0
    return Math.abs(document.body.getBoundingClientRect().top)
  }

  function handleVisibility() {
    const distanceFromTop = getDistanceFromTop()
    const distanceToToggleVisibility = 600
    const allowTurnVisible =
      distanceFromTop >= distanceToToggleVisibility ? true : false

    if (!visible && allowTurnVisible) setVisible(true)
    if (visible && !allowTurnVisible) setVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleVisibility))
    return () =>
      window.removeEventListener("scroll", debounce(handleVisibility))
  })

  return (
    <Fade in={visible}>
      <AnchorLink href={topElementId}>
        <StyledFab size="small" color="secondary" aria-label="Voltar ao topo">
          <KeyboardArrowUpIcon />
        </StyledFab>
      </AnchorLink>
    </Fade>
  )
}

export default BackToTopButton
