import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles, styled } from "@material-ui/styles"
import MenuButton from "./navigationMenuButton"

const GradienBgImage = styled(BackgroundImage)({
  opacity: "1!important",
  backgroundSize: "cover",
  background: "rgb(80,149,107)",
  background:
    "linear-gradient(45deg, rgba(80,149,107,0.9) 0%, rgba(46,96,162,0.9) 50%)",
  backgroundSize: "cover",
})

const useStyles = makeStyles(theme => ({
  navigationMenu: {
    "& a": {
      [theme.breakpoints.down("sm")]: {
        margin: "2px",
      },
      [theme.breakpoints.up("sm")]: {
        margin: "10px",
      },
    },
  },
  headerContainer: {
    height: "615px",
    color: "#fff",
  },
  headerContent: {
    height: "615px",
    padding: "20px 10px",
  },
  headerImg: {
    width: "105px",
    height: "130px",
    filter: "invert(1)",
  },
}))

const HeaderComponent = props => {
  const { links, title, description, logo, id } = props
  const classes = useStyles(props)
  const linksList = links.map((link, index) => {
    return <MenuButton key={index} href={link.href} text={link.text} />
  })

  const {
    file: {
      childImageSharp: { fluid: backgroundImage },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header_bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <GradienBgImage
        Tag="header"
        id={id}
        className={classes.headerContainer}
        fluid={backgroundImage}
        backgroundColor={`linear-gradient(45deg, rgba(80,149,138,1) 0%, rgba(46,108,162,1) 100%)`}
      >
        <Grid
          container
          direction="column"
          justify="space-around"
          className={classes.headerContent}
        >
          <Grid item container justify="space-around">
            <img src={logo} alt="logo" className={classes.headerImg} />
          </Grid>

          <Grid item>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.lightText}
              style={{ color: "#fff" }}
            >
              {title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="subtitle2"
              align="center"
              style={{ color: "#fff" }}
              gutterBottom
            >
              {description}
            </Typography>
          </Grid>

          <Grid
            item
            component="nav"
            container
            justify="center"
            className={classes.navigationMenu}
          >
            {linksList}
          </Grid>
        </Grid>
      </GradienBgImage>
    </>
  )
}

export default HeaderComponent
