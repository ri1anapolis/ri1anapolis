import React from "react"
import { Link } from "@material-ui/core"
import StyledModalComponent from "../components/styledModalComponent"
import avisoImg from "../images/aviso_atendimento_agendado_01.jpg"

const ModalAviso = () => {
  return (
    <StyledModalComponent
      autoOpenModal={true}
      color="#fc7703"
      title="Atendimento no período da pandemia"
      subtitle="Mudanças nos horários de atendimento"
      image={avisoImg}
      links={[
        {
          text: "Ir para o site",
          href: null,
          variant: "contained",
          color: "primary",
        },
      ]}
    >
      A Corregedoria Geral da Justiça do Estado de Goiás determinou, por meio da{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.tjgo.jus.br/images/docs/corregedoria/PORTARIA_N57_2020.pdf"
      >
        Portaria nº 57, de 6 de abril de 2020
      </Link>
      , que o atendimento presencial ao público, prestado pelos cartórios,
      deverão ocorrer das 10h às 16h, todos os dias úteis, com horário
      previamente agendado.
      <br />
      <br />
      Aqui no site você pode consultar seu protocolo online ou acessar nossos
      canais de comunicação!
    </StyledModalComponent>
  )
}

export default ModalAviso
