import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/styles/makeStyles"
import loadable from "@loadable/component"
import { Article, Section } from "../components/section2"
import SectionLoadingFallback from "../components/sectionLoadingFallback"
import InstagramIcon from "@material-ui/icons/Instagram"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk"

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
  routeButton: {
    width: "max-content",
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "0.75em",
    padding: "0 10px",
    margin: "0 auto",
  },
}))

const ContatoMap = loadable(() => import("./contatoMap"), {
  fallback: <SectionLoadingFallback text="Buscando o mapa pra você..." />,
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

  return (
    <>
      <Article id="contato" background="true">
        <Section style={{ textAlign: "center" }} xs={12} sm={12} md={9} lg={8}>
          <Typography component="h1" variant="h4">
            Endereço e Contato
          </Typography>

          <Typography paragraph>
            Agende um horário, tire dúvidas, faça uma visita. O atendimento
            presencial e pelos canais de comunicação se dá de segunda a
            sexta-feira das 09:00h as 17:00h.
          </Typography>

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
                <Grid container direction="column">
                  <ListItem>
                    <ListItemText
                      className={classes.alignTextRight}
                      primary={
                        <Link
                          className={classes.contactLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://ri1anapolis.page.link/rota"
                        >
                          Av. Universitária, nº 2221
                          <br /> Anashopping, LUC 100
                          <br /> Anápolis/GO
                          <br /> CEP: 75.083-350
                        </Link>
                      }
                    />
                    <ListItemIcon className={classes.listItemIcon}>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ri1anapolis.page.link/rota"
                      >
                        <img
                          src={place}
                          alt="Endereço: Av. Universitária, nº 2221 - Anashopping - Anápolis/GO"
                          className={classes.locationImg}
                        />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ri1anapolis.page.link/rota"
                    classes={{ root: classes.routeButton }}
                  >
                    Clique para traçar rota
                  </Button>
                </Grid>
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
