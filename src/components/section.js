import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, makeStyles } from "@material-ui/core"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  article: {
    margin: 0,
    padding: 0,
    width: "100vw",
    color: "#555555",
    textAlign: "justify",
  },
  articleWrapper: {
    maxWidth: "1260px",
    margin: "20px auto",
    padding: "10px 20px",
  },
  section: {
    width: "auto",
    padding: "1vw",
  },
  aside: {
    padding: "1vw",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundDefault: props => ({
    background: `#333 url("${props.backgroundImage}") no-repeat`,
    backgroundSize: "cover",
    color: "#fff",
  }),
}))

const Section = props => {
  const classes = useStyles()
  return (
    <Grid
      component="section"
      item
      xs={props.xs || 12}
      sm={props.sm || 10}
      md={props.md || 7}
      {...props}
      className={classes.section}
    >
      {props.children}
    </Grid>
  )
}

const Aside = props => {
  const classes = useStyles()
  return (
    <Grid
      component="aside"
      item
      {...props}
      className={classes.aside}
      xs={props.xs || 12}
      sm={props.sm || 10}
      md={props.md || 5}
    >
      {props.children}
    </Grid>
  )
}

const ArticleWrapper = props => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={classes.articleWrapper}
    >
      {props.children}
    </Grid>
  )
}

const Article = props => {
  const {
    file: { publicURL: backgroundImage },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "section_bg.jpg" }) {
        publicURL
      }
    }
  `)

  const classes = useStyles({ backgroundImage, ...props })

  return (
    <Grid
      item
      className={clsx(
        classes.article,
        props.background && classes.backgroundDefault
      )}
      {...props}
    >
      <ArticleWrapper>{props.children}</ArticleWrapper>
    </Grid>
  )
}

export default Article
export { Article, Section, Aside }
