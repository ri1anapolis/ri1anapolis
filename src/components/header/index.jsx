import React, { useEffect } from "react"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"

import useTheme from "@material-ui/styles/useTheme"
import useStyles from "./styles"

import HeaderBar from "./headerBar"
import MenuBar from "./menuBar"
import store from "./reduxStore"

const defaultMenus = [
  {
    href: "#protocolos",
    text: "Protocolos",
  },
  {
    href: "#servicos",
    text: "Serviços",
  },
  {
    href: "#cartorio",
    text: "O Cartório",
  },
  {
    href: "#contato",
    text: "Contato",
  },
  {
    href:
      "https://www.google.com/maps/d/viewer?mid=10YpQ9_F-hd614vCPtPjKJqiW-ho2c870",
    text: "Circunscrição",
  },
]

const extendedMenus = [
  {
    groupName: "",
    links: [
      {
        href: "#protocolos",
        text: "Protocolos",
        description: (
          <>
            Consulte seu protocolo
            <br />
            Baixe a Nota Devolutiva
          </>
        ),
      },
      {
        href: "#servicos",
        text: "Serviços",
        description: (
          <>
            Solicite Certidões
            <br />
            Agende atendimentos
            <br />
            Baixe documentos
          </>
        ),
      },
      {
        href: "#cartorio",
        text: "O Cartório",
        description: "Sobre o cartório",
      },
      {
        href: "#contato",
        text: "Contato",
        description: "Fale conosco",
      },
    ],
  },
  {
    groupName: "",
    links: [
      {
        href:
          "https://www.google.com/maps/d/viewer?mid=10YpQ9_F-hd614vCPtPjKJqiW-ho2c870",
        text: "Circunscrição",
        description: (
          <>
            Mapa da circunscrição
            <br />
            Seu imóvel está aqui?
          </>
        ),
      },
      {
        href: "https://ri1anapolis.page.link/tabela_custas_simplificada",
        text: "Custas",
        description: "Tabela de custas vigente",
      },
      {
        href: "https://see.tjgo.jus.br/buscas",
        text: "Consultar Selos",
        description: "Consulte o selo no TJGO",
      },
    ],
  },
]

const HeaderComponent = props => {
  const theme = useTheme()
  const classes = useStyles(theme)

  const onClickAway = () => {
    store.dispatch({ type: "CLOSE_MENU" })
  }

  useEffect(() => {
    window.addEventListener("scroll", onClickAway)
    return () => {
      window.addEventListener("scroll", onClickAway)
    }
  })

  return (
    <>
      <div className={classes.headerPlaceholder} id={props.id} />

      <ClickAwayListener onClickAway={onClickAway}>
        <div>
          <HeaderBar id={props.id} links={defaultMenus} />
          <MenuBar linksGroups={extendedMenus} />
        </div>
      </ClickAwayListener>
    </>
  )
}

export default HeaderComponent
