import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, AppBar, Toolbar, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import MenuButton from "./navigationMenuButton2"

const useStyles = makeStyles(theme => ({
  headerPlaceholder: {
    height: "90px",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: "10px",
    maxWidth: "1260px",
    width: "100%",
    color: "#fff",
  },
  logoContainer: {
    maxWidth: "280px",
  },
  nav: {
    marginLeft: "100px",
  },
  logo: {
    width: "70px",
    height: "70px",
  },
}))

const HeaderComponent = props => {
  const { id, links } = props
  const classes = useStyles(props)
  const linksList =
    links && links.length > 0
      ? links.map((link, index) => {
          return <MenuButton key={index} href={link.href} text={link.text} />
        })
      : []

  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo3d.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.headerPlaceholder} id={id} />
      <AppBar position="fixed" className={classes.header}>
        <Toolbar container className={classes.content}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            className={classes.logoContainer}
          >
            <div className={classes.logo}>
              <Img
                fluid={logo.file.childImageSharp.fluid}
                alt="Logo"
                className={classes.imgLogo}
                style={{ width: "100%" }}
              />
            </div>
            <Typography variant="subtitle2" align="center" noWrap>
              1º Registro de Imóveis
              <br />
              de Anápolis/GO
            </Typography>
          </Grid>
          <Grid
            item
            spacing={4}
            component="nav"
            container
            className={classes.nav}
          >
            {linksList}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderComponent
