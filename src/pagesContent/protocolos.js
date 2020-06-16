import React, { useState } from "react"
import PropTypes from "prop-types"
import { Container, Typography } from "@material-ui/core"
import { Tabs, Tab } from "@material-ui/core"
import { Article, Section, Aside } from "../components/section"
import StyledSearchField from "../components/searchProtocol"
import StyledTimelineComponent from "../components/styledTimelineComponent"
import ProtocolosRegistrosTimeline from "./protocolosRegistrosTimeline"

const tabBaseId = "timelineTabPanel-"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabBaseId}${index}`}
      aria-labelledby={`${tabBaseId}-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function tabProps(index) {
  return {
    id: `${tabBaseId}${index}`,
    "aria-controls": `${tabBaseId}${index}`,
  }
}

const ProtocolosSectionContent = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Article id="protocolos">
      <Section>
        <Typography component="h1" variant="h4">
          Protocolos
        </Typography>

        <Typography>
          Acompanhe o andamento do seu processo! Informe no campo abaixo o
          número do protocolo presente em seu recibo e faça uma busca.
        </Typography>

        <StyledSearchField
          id="protocolo"
          label="Protocolo"
          placeholder="Ex.: RE-121345"
          buttonText="Buscar"
        />
        <br />
        <Typography>
          Entenda os fluxos de trabalho aos quais são submetidos os protocolos
          nos quadros abaixo:
        </Typography>
        <br />
      </Section>
      <Aside style={{ display: "block" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Registros" {...tabProps(0)} />
          <Tab label="Certidões" {...tabProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <StyledTimelineComponent items={ProtocolosRegistrosTimeline} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Certidões
        </TabPanel>
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
