import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Typography, Tabs, Tab } from "@material-ui/core"
import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import { Article, Section, Aside } from "../components/section"
import StyledSearchField from "../components/searchProtocol"
import StyledTimelineComponent from "../components/styledTimelineComponent"
import ProtocolosRegistrosTimeline from "./protocolosRegistrosTimeline"
import ProtocolosCertidoesTimeline from "./protocolosCertidoesTimeline"

const tabBaseId = "timelineTabPanel-"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${tabBaseId}${index}`}
      aria-labelledby={`${tabBaseId}${index}`}
      {...other}
    >
      <Box
        style={{
          marginTop: "5px",
          maxHeight: "400px",
          overflowX: "hidden",
        }}
      >
        {value === index && <>{children}</>}
      </Box>
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
  const theme = useTheme()
  const smBreakPoint = useMediaQuery(theme.breakpoints.down("sm"))

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
          nos quadros {(smBreakPoint && <>abaixo</>) || <>ao lado</>}:
        </Typography>
        <br />
      </Section>

      <Aside style={{ display: "block" }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Registros" {...tabProps(0)} />
          <Tab label="Certidões" {...tabProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <StyledTimelineComponent items={ProtocolosRegistrosTimeline} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <StyledTimelineComponent items={ProtocolosCertidoesTimeline} />
        </TabPanel>
      </Aside>
    </Article>
  )
}

export default ProtocolosSectionContent
