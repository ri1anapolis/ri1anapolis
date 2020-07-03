import React from "react"

import ProtocoloIcon from "@material-ui/icons/PlayArrow"
import CertidaoIcon from "@material-ui/icons/Description"
import BuscaIcon from "@material-ui/icons/Search"
import AnaliseIcon from "@material-ui/icons/Subject"
import PendenciaCaixaIcon from "@material-ui/icons/AttachMoney"
import CanceladoIcon from "@material-ui/icons/Close"
import BalcaoIcon from "@material-ui/icons/LibraryBooks"
import EntregueIcon from "@material-ui/icons/DoneAll"

const ProtocolosCertidoesTimeline = [
  {
    title: "Pedido",
    description: "Cadastro do serviço e triagem da solicitação.",
    icon: <ProtocoloIcon />,
  },
  {
    title: "Pós-Registro",
    description:
      "Aguardando a finalização do protocolo principal para emissão da certidão com o registro/averbação solicitado.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Análise",
    description: "Análise e pesquisa da solicitação.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Pendência de Caixa",
    description:
      "A certidão está finalizada, todavia, há pendências de caixa a serem resolvidas.",
    icon: <PendenciaCaixaIcon />,
  },
  {
    title: "Finalizado",
    description: "A certidão está disponível para retirada no cartório.",
    icon: <BalcaoIcon />,
  },
  {
    title: "Entregue",
    description: "A certidão foi emitida e já foi retirada pelo usuário.",
    icon: <EntregueIcon />,
  },
  {
    title: "Cancelados",
    description: "O pedido foi cancelado e a certidão não será emitida.",
    icon: <CanceladoIcon />,
  },
]

export default ProtocolosCertidoesTimeline
