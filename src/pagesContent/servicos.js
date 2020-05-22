import React, { useState } from "react"
import { Typography, Button } from "@material-ui/core"

import { Article, Section, Aside } from "../components/section"
import Drawer from "../components/drawer"
import Panel from "../components/simpleExpansionPanel"

const ServicosSectionContent = () => {
  const [drawer, setDrawer] = useState(false)

  return (
    <Article id="servicos" background="true">
      <Drawer
        anchor="left"
        variant="temporary"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
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
            { href: "#protocolos", text: "PROTOCOLOS" },
            { href: "#servicos", text: "SERVIÇOS" },
            { href: "#cartorio", text: "O CARTÓRIO" },
            { href: "#contato", text: "CONTATO" },
          ]}
        >
          Vivamus in euismod eros,<span> vel dignissim felis.</span> Ut sagittis
          turpis nec nisl commodo, et molestie neque porttitor. Nunc sodales
          consectetur auctor. Vestibulum elementum velit justo, vel scelerisque
          nunc ornare sed
        </Panel>
        <Panel title="Distrato">
          Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
          nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
          auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
          sed
        </Panel>
        <Panel title="Indisponibilidade">
          Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
          nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
          auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
          sed
        </Panel>
        <Panel title="Compra e Venda">
          Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
          nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
          auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
          sed
        </Panel>
        <Panel title="Intimação">
          Vivamus in euismod eros, vel dignissim felis. Ut sagittis turpis nec
          nisl commodo, et molestie neque porttitor. Nunc sodales consectetur
          auctor. Vestibulum elementum velit justo, vel scelerisque nunc ornare
          sed
        </Panel>
        <Panel title="Receita de Miojo">
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

      <Aside>asdfasdfasdf</Aside>
      <Section>
        <h1>Serviços</h1>

        <Button onClick={() => setDrawer(true)}> teste </Button>
        <p>
          Ao solicitar qualquer tipo de registro e/ou averbação, é necessária a
          apresentação de uma série de documentos obrigatórios. Abaixo é
          possível verificar quais são os documentos necessários de acordo com
          cada tipo de ato. Importante ressaltar que, dependendo da análise
          jurídica do protocolo, poderá haver o pedido de complementação de
          documentos. Portanto, a listagem fornecida serve como auxílio inicial,
          mas pode não ser definitiva. Usuário, caso você tenha um programa anti
          pop-up, você deverá desativá-lo. Documentos
        </p>
        <li>Adjudicação Compulsória Alienação Fiduciária Sem Compra e Venda</li>
        <li>
          Alteração de imóvel Rural para Urbano Arresto Averbação de Alteração
          de
        </li>
        <li>
          Razão Social Averbação de Casamento Averbação de Construção – Imóvel
        </li>
        <li>
          Rural Averbação de Construção – Imóvel Urbano Averbação de Demolição
        </li>
        <li>
          Averbação de Existência de Ação Averbação de Logradouro/Inscrição
        </li>
      </Section>
    </Article>
  )
}

export default ServicosSectionContent
