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
    title: "Caixa",
    description: "Prenotação do serviço.",
    icon: <ProtocoloIcon />,
  },
  {
    title: "Emissão",
    description: "Emissão das certidões necessárias ao processo.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Pós-Registro",
    description:
      "Aguardando a parte cumprir as exigências necessárias para registro.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Busca/Info",
    description: "Tratamento e digitalização da documentação apresentada.",
    icon: <BuscaIcon />,
  },
  {
    title: "Análise",
    description:
      "O protocolo em questão fica aguardando o cumprimento das exigências de outro protocolo vinculado.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Pendência de Caixa",
    description: "Sorteio e distribuição dos processos entre os escreventes.",
    icon: <PendenciaCaixaIcon />,
  },
  {
    title: "Cancelados",
    description: "Análise do processo e documentação pelo escrevente.",
    icon: <CanceladoIcon />,
  },
  {
    title: "Balcão/Finalizado",
    description:
      "O protocolo deverá ser redistribuido para outro escrevente para conferência da análise.",
    icon: <BalcaoIcon />,
  },
  {
    title: "Arquivo/Vencidas",
    description: "Notificação extrajudicial às partes interessadas.",
    icon: <BalcaoIcon />,
  },
  {
    title: "Retirada",
    description: "Desenvolvimento e publicação de edital.",
    icon: <EntregueIcon />,
  },
]

export default ProtocolosCertidoesTimeline
