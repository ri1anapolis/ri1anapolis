import React from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import useTheme from "@material-ui/styles/useTheme"
import makeStyles from "@material-ui/styles/makeStyles"
import AnchorLink from "react-anchor-link-smooth-scroll"

import whatsappImg from "../images/iphone_whatsapp_h350px.svg"

const useStyles = makeStyles(theme => ({
  banner: {
    width: "100%",
    height: "350px",
  },
  iPhoneTextWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    position: "relative",
    width: "330px",
    height: "350px",
    background: `url('${whatsappImg}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  iPhoneTextTitle: {
    position: "absolute",
    top: "60px",
    left: "80px",
  },
  iPhoneTextBody: {
    position: "absolute",
    top: "100px",
    left: "30px",
    width: "270px",
    "& > p": {
      color: "#11230b",
      fontSize: ".93em",
      borderRadius: "5px",
      padding: "2px 6px",
      marginBottom: "3px",
    },
    "& > .sent": {
      backgroundColor: "#e2ffc7",
      marginLeft: "40px",
    },
    "& > .received": {
      backgroundColor: "#fff",
      marginRight: "40px",
    },
    "& > .marginExtra": {
      marginBottom: "8px !important",
    },
  },
  bannerTextWrapper: {
    padding: "10px 15px",
  },
}))
const BannerWhatsApp = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.banner}
    >
      <Grid item container className={classes.iPhoneTextWrapper}>
        <Typography className={classes.iPhoneTextTitle}>
          Caro Cliente
        </Typography>
        <div className={classes.iPhoneTextBody}>
          <Typography className={clsx("received", "marginExtra")}>
            Bom dia, gostaria de agendar meu atendimento. Pode ser?
          </Typography>
          <Typography className="sent">
            Bom dia, pode sim! Você pode agendar pelo site{" "}
            <AnchorLink
              offset={
                useMediaQuery("(max-width: 959px) and (max-height: 959px)")
                  ? 104
                  : 89
              }
              href={
                useMediaQuery("(max-width: 959px) and (max-height: 959px)")
                  ? "#agendamento"
                  : "#servicos"
              }
              variant="contained"
              color="primary"
              align="center"
            >
              ri1anapolis.com.br
            </AnchorLink>{" "}
            e ter uma lista de datas e horários à sua escolha
          </Typography>
          <Typography className="sent">
            E pelo WhatsApp posso informar um horário disponível!
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sm={10}
        md={6}
        lg={5}
        className={classes.bannerTextWrapper}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography variant="subtitle2" paragraph align="center">
          <strong>Agende seu atendimento online ou pelo WhatsApp!</strong>
        </Typography>
        <Typography align="center">
          Agora você pode agendar seu atendimento diretamente pelo site ou pelo
          WhatsApp.
        </Typography>
        <Typography paragraph align="center">
          Clique no botão abaixo e faça seu agendamento.
        </Typography>
        <Button
          component={AnchorLink}
          offset={
            useMediaQuery("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? 104
              : 89
          }
          href={
            window.matchMedia("(max-width: 959px)").matches &&
            window.matchMedia("(max-height: 959px)").matches
              ? "#agendamento"
              : "#servicos"
          }
          variant="contained"
          color="primary"
          align="center"
        >
          Agende seu atendimento
        </Button>
      </Grid>
    </Grid>
  )
}

export default BannerWhatsApp
