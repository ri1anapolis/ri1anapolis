import React from "react"
import { Container, Grid, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import StyledFooterContent from "./styledFooterContent"

const useStyles = makeStyles(theme => ({
  root: {
    color: "#D2D2D2",
    background: `linear-gradient(145deg, rgba(112,112,112,1) 0%, rgba(128,128,128,1) 50%, rgba(112,112,112,1) 100%)`,
    borderTop: `2px solid`,
    borderImage: `linear-gradient(45deg, rgba(170,126,61,1) 0%, rgba(241,207,143,1) 51%, rgba(170,135,40,1) 140%) 1`,
  },
  footerHeader: {
    background: `linear-gradient(145deg, rgba(90 ,90,90,1) 0%, rgba(110,110,110,1) 50%, rgba(90,90,90,1) 100%)`,
    borderBottom: "1px solid #909090",
    height: "70px",
    "& > div": {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
  content: {
    display: "flex",
  },
  footerCredits: {
    borderTop: "1px solid #909090",
    padding: "10px 0",
    "& > div": {
      height: "100%",
      padding: "20px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  smallText: {
    fontSize: "12px",
    fontWeight: 400,
  },
  link: {
    color: "#fff",
  },
  gridItem: {
    padding: "30px 20px",
    "& > h6": {
      color: "#FFF",
      fontWeight: "600",
      paddingBottom: "20px",
    },
    "& > ul": {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      "& > li": {
        padding: "7px 0",
      },
    },
  },
}))

const Footer = props => {
  const classes = useStyles(props)

  return (
    <Grid id="footer" className={classes.root}>
      <div className={classes.footerHeader}>
        <Container xs={12}>
          <Typography variant="subtitle2" style={{ fontSize: "1em" }}>
            1º Registro de Imóveis de Anápolis/GO
          </Typography>
        </Container>
      </div>

      <Container xs={12} className={classes.content}>
        <StyledFooterContent
          title="Links Úteis"
          links={[
            {
              href: "https://see.tjgo.jus.br/ajuda/publico",
              text: "Sistema Extrajudicial Eletrônico",
            },
            {
              href: "https://see.tjgo.jus.br/buscas",
              text: "Consultar Selos",
            },
            {
              href: "http://tjdocs.tjgo.jus.br/pastas/2101",
              text: "Código de Normas e Procedimentos do Foro Extrajudicial",
            },
            {
              href:
                "https://www.google.com/maps/d/u/1/viewer?mid=1YBP3QGI5MjBJRj8ukcKHjesdvqMDUqhS",
              text: "Mapa fronteiriço de Anápolis e da Primeira Circunscrição",
            },
          ]}
        />
      </Container>

      <div className={classes.footerCredits}>
        <Container xs={12}>
          <Typography className={classes.smallText} align="center">
            Copyright © Cartório de Registro de Imóveis da 1º Circunscrição de
            Anápolis/GO. All Rights Reserved.
            <br />
            Desenvolvido por{" "}
            <Link
              href="https://github.com/fmartins-andre"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              André Martins
            </Link>
          </Typography>
        </Container>
      </div>
    </Grid>
  )
}

export default Footer
