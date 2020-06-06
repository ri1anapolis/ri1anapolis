import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
import { Article, Section } from "../components/section"

const ContatoSectionContent = () => {
  const {
    file: { publicURL: place },
  } = useStaticQuery(graphql`
    query {
      file(name: { eq: "local-world" }, ext: { eq: ".svg" }) {
        publicURL
      }
    }
  `)

  return (
    <>
      <Article id="contato" background="true">
        <Section style={{ textAlign: "center" }}>
          <Typography component="h1" variant="h4">
            Endereço e Contato
          </Typography>
          <br />
          <Typography variant="body2">
            Agende um horário, tire dúvias, faça uma visita. <br />O atendimento
            presencial e pelos canais de comunicação se dá de segunda a
            sexta-feira das 08:00h as 17:00h
          </Typography>
          <br />
          <Grid container xs={12} justify="space-around">
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              sm={7}
              md={6}
              style={{ textAlign: "right", padding: "10px" }}
            >
              <Grid item>
                <Typography variant="caption">
                  Av. Universitária, nº 2221
                  <br /> Anashopping, LUC 100
                  <br /> Anápolis/GO
                  <br /> CEP: 75.083-350
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={place}
                  alt="localização"
                  style={{
                    maxWidth: "75px",
                    maxHeight: "75px",
                    margin: "0 5px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={12}
              sm={7}
              md={6}
              style={{ textAlign: "left", padding: "10px" }}
            >
              <Typography variant="body2">
                primeirocartórioregistro@gmail.com
                <br /> (62) 3937-4650
                <br /> (62) 3937-4650
                <br /> @ri1anapolis
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Article>

      <iframe
        width="100%"
        height="200"
        frameborder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJL4ZOwnikXpMR2Wydv1gsibk&key=AIzaSyBZGM23zN53u0yVFX3rhUA6Yyg7b1lwzY0"
        allowfullscreen
      ></iframe>
    </>
  )
}

export default ContatoSectionContent
