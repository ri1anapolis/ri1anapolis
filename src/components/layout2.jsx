import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CssBaseline, Grid } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme, useStyles } from "../config/materialUiTheme2"
import Loadable from "react-loadable"
import Header from "./header"
import SectionLoadingFallback from "./sectionLoadingFallback"
import getBanners from "./banner/getBanners"

const BuildBanners = Loadable({
  loader: () => import("./banner/buildBanners"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
})
const Banner = Loadable({
  loader: () => import("./banner/index"),
  loading: () => <SectionLoadingFallback height="350px" />,
  delay: 300,
})
const BannerSolicitaCertidao = Loadable({
  loader: () => import("../pagesContent/bannerSolicitaCertidao"),
  loading: () => <SectionLoadingFallback height="350px" />,
  delay: 300,
})
const BannerAgendamento = Loadable({
  loader: () => import("../pagesContent/bannerAgendamento"),
  loading: () => <SectionLoadingFallback height="350px" />,
  delay: 300,
})
const BannerCoronaVirus = Loadable({
  loader: () => import("../pagesContent/bannerCoronaVirus"),
  loading: () => <SectionLoadingFallback height="350px" />,
  delay: 300,
})

const Footer = Loadable({
  loader: () => import("./footer2"),
  loading: () => <SectionLoadingFallback />,
  delay: 300,
})
const BackToTopButton = Loadable({
  loader: () => import("./backToTopButton2"),
  loading: () => <SectionLoadingFallback height="0" />,
  delay: 300,
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
      <Banner>
        {banners && <BuildBanners data={banners} />}
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
