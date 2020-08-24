import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import SimplePanelComponent from "../components/simpleExpansionPanel"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "0 10px",
    paddingBottom: "50px",
    maxWidth: "400px",
    minWidth: "280px",
  },
}))

const ServicosPanel = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant="h5">Serviços</Typography>
      <Typography variant="caption">
        Modelos de requerimentos
        <br />
        Documentos necessários para registro
      </Typography>
      <br />
      <br />

      <SimplePanelComponent
        title="Averbação"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros,<span> vel dignissim felis.</span> Ut sagittis
        turpis nec nisl commodo, et molestie neque porttitor. Nunc sodales
        consectetur auctor. Vestibulum elementum velit justo, vel scelerisque
        nunc ornare sed
      </SimplePanelComponent>
      <SimplePanelComponent
        title="Distrato"
        links={[
          { href: "https://duckduckgo.com", text: "Requerimento" },
          { href: "https://duckduckgo.com", text: "Modelos" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent
        title="Indisponibilidade"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent
        title="Compra e Venda"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent
        title="Intimação"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent
        title="Receita de Miojo"
        links={[
          { href: "https://duckduckgo.com", text: "Documentos necessários" },
        ]}
      >
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent title="Miajuda">
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
      <SimplePanelComponent title="Disfarça">
        Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
        nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
        auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
        sed
      </SimplePanelComponent>
    </div>
  )
}

export default ServicosPanel
