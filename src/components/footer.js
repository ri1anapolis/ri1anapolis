import React from "react"
import { Grid, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "40px 10px",
    color: "rgba(255,255,255,1)",
    background:
      "linear-gradient(45deg, rgba(46,96,162,0.9) 0%, rgba(80,149,107,0.9) 150%)",
  },
  smallText: {
    fontSize: "12px",
    fontWeight: 400,
  },
  link: {
    fontSize: "14px",
    color: "#fff",
  },
  gridItem: {
    padding: "10px",
  },
}))

const Footer = props => {
  const classes = useStyles(props)
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="space-around"
    >
      <Grid className={classes.gridItem} item xs={12} sm={6}></Grid>
      <Grid className={classes.gridItem} item xs={12} sm={6}>
        <Typography variant="subtitle2">Links Úteis</Typography>
        <ul>
          <li>
            <Link
              href="https://see.tjgo.jus.br/ajuda/publico"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              Sistema Extrajudicial Eletrônico
            </Link>
          </li>
          <li>
            <Link
              href="https://see.tjgo.jus.br/buscas"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              Consultar Selos
            </Link>
          </li>
          <li>
            <Link
              href="http://tjdocs.tjgo.jus.br/pastas/2101"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              Código de Normas e Procedimentos do Foro Extrajudicial
            </Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps/d/u/1/viewer?mid=1YBP3QGI5MjBJRj8ukcKHjesdvqMDUqhS"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              Mapa fronteiriço de Anápolis e da Primeira Circunscrição
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid
        className={classes.gridItem}
        item
        xs={12}
        style={{ marginTop: "50px" }}
      >
        <Typography className={classes.smallText} align="center">
          Copyright © Cartório de Registro de Imóveis da 1º Circunscrição de
          Anápolis/GO. All Rights Reserved.
          <br />
          Desenvolvido por{" "}
          <Link
            href="https://github.com/fmartins-andre"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            André Martins
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
