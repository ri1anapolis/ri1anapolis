import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Menu from "./styledNavigationMenu"
import bg from "../images/bg_repeat.jpg"

const useStyles = makeStyles(theme => ({
  headerPlaceholder: {
    height: "90px",
  },
  banner: {
    height: "350px",
    backgroundColor: "#141414",
    background: `linear-gradient(90deg, rgba(20,20,20,.95) 0%, rgba(40,40,40,.95) 35%, rgba(20,20,20,.95) 80%), url(${bg})`,
    borderBottom: "2px solid #606060",
    color: "#FFF",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
  },
  title: {
    fontWeight: "800",
    fontSize: "16px",
    color: "#3b2c12",
    textShadow: "1px 1px 2px #efe1ca",
  },
  content: {
    padding: "10px",
    maxWidth: "1260px",
    width: "100%",
  },
  logoContainer: {
    width: "min-content",
    minWidth: "300px",
  },
  logo: {
    width: "70px",
    height: "70px",
  },
  mobileMenu: {
    width: "40px",
    // border: "1px solid #FFF",
    // display: "none",
  },
}))

const HeaderComponent = props => {
  const classes = useStyles(props)

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
      <div className={classes.headerPlaceholder} id={props.id} />
      <div className={classes.banner} id="banner" />
      <AppBar
        position="fixed"
        className={classes.header}
        style={{
          background: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%), rgb(170,126,61)`,
        }}
      >
        <Toolbar container className={classes.content}>
          <Grid
            item
            container
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
            <Typography
              className={classes.title}
              variant="subtitle2"
              align="center"
              noWrap
            >
              1º REGISTRO de IMÓVEIS
              <br />
              de ANÁPOLIS/GO
            </Typography>
          </Grid>
          <Menu
            popoverContainerId={props.id}
            links={[
              { href: "#protocolos", text: "PROTOCOLOS" },
              { href: "#servicos", text: "SERVIÇOS" },
              { href: "#cartorio", text: "O CARTÓRIO" },
              { href: "#contato", text: "CONTATO" },
            ]}
          />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderComponent
