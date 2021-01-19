import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CssBaseline, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme, useStyles } from "../config/materialUiTheme2"
import loadable from "@loadable/component"
import Header from "./header"
import SectionLoadingFallback from "./sectionLoadingFallback"
import Banner from "./banner/index"
import getBanners from "./banner/getBanners"
import BannerNovoHorarioAtendimento from "../pagesContent/bannerNovoHorarioAtendimento"

const BannerSolicitaCertidao = loadable(
  () => import("../pagesContent/bannerSolicitaCertidao"),
  { fallback: <SectionLoadingFallback height="350px" /> }
)
const BannerAgendamento = loadable(
  () => import("../pagesContent/bannerAgendamento"),
  { fallback: <SectionLoadingFallback height="350px" /> }
)
const BannerCoronaVirus = loadable(
  () => import("../pagesContent/bannerCoronaVirus"),
  { fallback: <SectionLoadingFallback height="350px" /> }
)

const Footer = loadable(() => import("./footer2"), {
  fallback: <SectionLoadingFallback />,
})
const BackToTopButton = loadable(() => import("./backToTopButton2"), {
  fallback: <SectionLoadingFallback height="0" />,
})

const Layout = props => {
  const classes = useStyles(props)
  const topElementId = "home"
  const [banners, setBanners] = useState(null)

  useEffect(() => {
    async function _getBanners() {
      if (!Array.isArray(banners)) {
        const _banners = await getBanners()
        setBanners(_banners)
      }
    }
    _getBanners()
  }, [banners, setBanners])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header id={topElementId} />
      <Banner onlineBanners={banners}>
        <BannerNovoHorarioAtendimento />
        <BannerSolicitaCertidao />
        <BannerAgendamento />
        <BannerCoronaVirus />
      </Banner>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.root}
      >
        {props.children}
      </Grid>
      <Footer />
      <BackToTopButton href={topElementId} />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
