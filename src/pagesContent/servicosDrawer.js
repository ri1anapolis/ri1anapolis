import React from "react"
import { createStore, useStore } from "react-hookstore"
import { Typography, Button, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

import Drawer from "../components/drawer"
import Panel from "../components/simpleExpansionPanel"

const toogleDrawer = createStore("drawerStore", false)

const OpenDrawerButton = props => {
  const [drawer, setDrawer] = useStore(toogleDrawer)
  return (
    <Button {...props} onClick={() => setDrawer(true)}>
      {props.children}
    </Button>
  )
}

const ServicosDrawer = props => {
  const [drawer, setDrawer] = useStore(toogleDrawer)
  const anchor = props.anchor || "left"
  const variant = props.variant || "temporary"

  return (
    <Drawer
      anchor={anchor}
      variant={variant}
      open={drawer}
      onClose={() => setDrawer(false)}
    >
      <IconButton
        size="small"
        style={{ float: "right" }}
        onClick={() => setDrawer(false)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <Typography component="h3" variant="h5">
        Serviços
      </Typography>
      <Typography variant="caption">
        Modelos de requerimentos
        <br />
        Documentos necessários para registro
      </Typography>
      <br />
      <br />

      <Panel
        title="Averbação"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros,<span> vel dignissim felis.</span> Ut sagittis
        turpis nec nisl commodo, et molestie neque porttitor. Nunc sodales
        consectetur auctor. Vestibulum elementum velit justo, vel scelerisque
        nunc ornare sed
      </Panel>
      <Panel
        title="Distrato"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel
        title="Indisponibilidade"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel
        title="Compra e Venda"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel
        title="Intimação"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel
        title="Receita de Miojo"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel title="Miajuda">
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
      <Panel title="Disfarça">
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </Panel>
    </Drawer>
  )
}

export default ServicosDrawer
export { ServicosDrawer, OpenDrawerButton }
