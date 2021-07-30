import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"
import useTheme from "@material-ui/styles/useTheme"

const useStyles = makeStyles(theme => ({
  banner: {
    width: "100%",
    height: "350px",
  },
  bannerTextWrapper: {
    padding: "10px 15px",
  },
}))

const DefaultBanner = ({ data }) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  const { title, subtitle, body, actionLinks } = data

  const text = body.map((p, index) => {
    return (
      <Typography key={index} paragraph align="center">
        {p}
      </Typography>
    )
  })

  const links =
    actionLinks?.length > 0
      ? actionLinks.map(link => {
          return (
            <Button
              key={link.href}
              href={link.href}
              target="_blank"
              variant="contained"
              color="primary"
            >
              {link.text}
            </Button>
          )
        })
      : null

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.banner}
    >
      <Grid
        item
        container
        xs={12}
        sm={10}
        md={6}
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="subtitle2" paragraph={!subtitle} align="center">
          <strong>{title}</strong>
        </Typography>
        {subtitle && (
          <Typography variant="caption" paragraph align="center">
            {subtitle}
          </Typography>
        )}
        {text}
        {links}
      </Grid>
    </Grid>
  )
}

export default DefaultBanner
