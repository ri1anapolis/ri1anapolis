import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { Link as GLink } from "gatsby"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import AnchorLink from "react-anchor-link-smooth-scroll"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import DefaultHeaderMenu from "./defaultMenu"
import MenuToggler from "./extendedMenuToggler"

const HeaderBar = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

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
    <AppBar position="fixed" className={classes.header}>
      <Toolbar className={classes.content}>
        <Link
          component={props.id ? AnchorLink : GLink}
          {...(props.id ? { href: `#${props.id}` } : { to: `/` })}
          className={classes.logoLink}
        >
          <Grid
            item
            container
            alignItems="center"
            className={classes.logoContainer}
          >
            <div className={classes.logo}>
              <Img
                fluid={logo.file.childImageSharp.fluid}
                alt="Cartório de Registro de Imóveis da Primeira Circunscrição de Anápolis/GO"
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
        </Link>
        <DefaultHeaderMenu popoverContainerId={props.id} links={props.links} />
        {props?.links?.length > 0 && <MenuToggler />}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar
