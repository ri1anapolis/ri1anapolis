import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import loadableVisibility from "react-loadable-visibility/react-loadable"

import { Article, Section } from "../components/section2"
import SectionLoadingFallback from "../components/sectionLoadingFallback"
import InstagramIcon from "@material-ui/icons/Instagram"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk"

import delay from "../utils/delay"

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemIcon: {
    minWidth: "30px",
    "& > svg": {
      color: "#FFF",
    },
  },
  locationImg: {
    width: "30vw",
    height: "auto",
    maxWidth: "75px",
    maxHeight: "75px",
    margin: "0 5px",
  },
  alignTextRight: {
    textAlign: "right",
  },
  contactLink: {
    textDecoration: "none",
    color: "#FFF",
  },
}))

const ContatoMap = loadableVisibility({
  loader: () => import("./contatoMap"),
  loading: () => <SectionLoadingFallback text="Buscando o mapa pra você..." />,
  delay: 100,
})

const ContatoSectionContent = () => {
  const {
    file: { publicURL: place },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "localizacao.svg" }) {
        publicURL
      }
    }
  `)

  const classes = useStyles()

  async function mapPreload() {
    await delay(20000)
    ContatoMap.preload()
  }
  mapPreload()

  return (
    <>
      <Article id="contato" background="true">
        <Section style={{ textAlign: "center" }} xs={12} sm={12} md={9} lg={8}>
          <Typography component="h1" variant="h4">
            Endereço e Contato
          </Typography>

          <Typography>
            Agende um horário, tire dúvidas, faça uma visita. O atendimento
            presencial e pelos canais de comunicação se dá de segunda a
            sexta-feira das 08:00h as 17:00h
          </Typography>
          <br />

          <Grid container justify="space-around">
            <Grid
              container
              item
              xs={12}
              sm={6}
              justify="space-around"
              alignItems="center"
            >
              <List dense={true} className={classes.list}>
                <ListItem>
                  <ListItemText
                    className={classes.alignTextRight}
                    primary={
                      <>
                        Av. Universitária, nº 2221
                        <br /> Anashopping, LUC 100
                        <br /> Anápolis/GO
                        <br /> CEP: 75.083-350
                      </>
                    }
                  />
                  <ListItemIcon className={classes.listItemIcon}>
                    <img
                      src={place}
                      alt="Endereço: Av. Universitária, nº 2221 - Anashopping - Anápolis/GO"
                      className={classes.locationImg}
                    />
                  </ListItemIcon>
                </ListItem>
              </List>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justify="space-around"
              alignItems="center"
            >
              <List dense={true} className={classes.list}>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <Typography variant="body2">
                          <Link
                            className={classes.contactLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:primeirocartorioregistro@gmail.com"
                          >
                            primeirocartorioregistro
                            <wbr />
                            @gmail.com
                          </Link>
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PhoneInTalkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        href="tel:+556239374650"
                      >
                        (62) 3937-4650
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <WhatsAppIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/556239374650"
                      >
                        (62) 3937-4650
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemIcon className={classes.listItemIcon}>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        className={classes.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/ri1anapolis/"
                      >
                        @ri1anapolis
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Section>
      </Article>
      <ContatoMap />
    </>
  )
}

export default ContatoSectionContent
