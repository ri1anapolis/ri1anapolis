import React from "react"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import SectionProtocolos from "../pagesContent/protocolos2"
import loadable from "@loadable/component"
import SectionLoadingFallback from "../components/sectionLoadingFallback"
// import {
//   Box,
//   Divider,
//   IconButton,
//   Modal,
//   Paper,
//   Typography,
// } from "@material-ui/core"
// import { CloseOutlined } from "@material-ui/icons"

const SectionServicos = loadable(() => import("../pagesContent/servicos2"), {
  fallback: <SectionLoadingFallback height="465px" />,
})
const SectionCartorio = loadable(() => import("../pagesContent/cartorio2"), {
  fallback: <SectionLoadingFallback height="705px" />,
})
const SectionContato = loadable(() => import("../pagesContent/contato"), {
  fallback: <SectionLoadingFallback height="504px" />,
})

const IndexPage = () => {
  // const [openModal, setOpenModal] = useState(true)

  return (
    <Layout>
      <SEO title="Consulte seu Protocolo" pathname="/" />
      <SectionProtocolos />
      <SectionServicos />
      <SectionCartorio />
      <SectionContato />

      {/* <Modal
        open={openModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Paper
          style={{
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding="1rem"
            >
              <Typography variant="h5" style={{ margin: 0 }}>
                Nota Pública
              </Typography>
              <IconButton
                size="small"
                aria-label="Fechar"
                onClick={() => setOpenModal(prev => !prev)}
              >
                <CloseOutlined />
              </IconButton>
            </Box>

            <Divider />

            <Box padding="1rem" maxHeight="calc(100vh - 120px)" overflow="auto">
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Caros usuários, entidades e comunidade em geral,
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Recentemente, esta Serventia foi mencionada de forma negativa em
                audiência pública, bem como em Rádios locais.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Queremos reiterar nosso compromisso com a transparência e a
                melhoria contínua em todos os aspectos de nossas atividades.
                Valorizamos imensamente o feedback e as preocupações de nossos
                usuários e da comunidade, e gostaríamos de abordar esse assunto
                de forma transparente e construtiva.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Em relação aos apontamentos feitos na audiência e demais meios
                de comunicação, é importante enfatizar que discordamos
                veementemente de qualquer informação ou alegação que não esteja
                alinhada com nossos valores e padrões éticos. As Serventias
                Extrajudiciais se orientam e agem exclusivamente com base na
                legislação pátria aplicável aos casos, sem quaisquer desvios
                interpretativos, prezando sempre pela boa prestação de serviço e
                segurança jurídica dos atos praticados.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{
                  hyphens: "auto",
                  textIndent: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Frisamos que em 10 anos de administração da Serventia, em todas
                as Correições Ordinárias e Extraordinárias realizadas pela
                Corregedoria-Geral de Justiça e pela Corregedoria Permanente,
                não houve constatação de qualquer indício de irregularidade, o
                que demonstra de forma técnica a boa prestação do serviço
                público por parte desta Serventia.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                O 1º Cartório de Registro de Imóveis de Anápolis/GO se sente no
                dever de prestar este esclarecimento, pois valores como ética,
                honra e justiça são compromissos inegociáveis que temos com a
                população. A Serventia sempre trabalhou seguindo os Princípios
                da Legalidade e todos os nossos posicionamentos
                técnico-jurídicos são de forma expressa e fundamentada, pois é o
                que determina a Lei de Registros Públicos.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Acreditamos que o diálogo aberto e honesto é fundamental para
                construir relacionamentos sólidos e duradouros. Além disso,
                estamos comprometidos em melhorar continuamente nossos serviços
                e processos internos. Assim, informamos que estamos abertos a
                sugestões e feedbacks construtivos que possam nos ajudar a
                aprimorar nosso relacionamento com a comunidade em geral.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Agradecemos sua confiança em nossa prestação de serviço e
                reiteramos nosso compromisso de sermos uma Serventia
                responsável, transparente e sempre em busca da Excelência.
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Atenciosamente,
              </Typography>
              <Typography
                paragraph
                align="justify"
                style={{ hyphens: "auto", textIndent: "1.5rem" }}
              >
                Wander Ribeiro Palhano
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Modal> */}
    </Layout>
  )
}

export default IndexPage
