import React from "react"

import ProtocoloIcon from "@material-ui/icons/PlayArrow"
import ProtocolosVinculadosIcon from "@material-ui/icons/FileCopy"
import AguardandoReingressoIcon from "@material-ui/icons/Update"
import TratamentoInicialIcon from "@material-ui/icons/Scanner"
import DistribuicaoIcon from "@material-ui/icons/DeviceHub"
import AnaliseIcon from "@material-ui/icons/Subject"
import NotificacaoIcon from "@material-ui/icons/NotificationImportant"
import EditalIcon from "@material-ui/icons/PostAdd"
import PendenciaCaixaIcon from "@material-ui/icons/AttachMoney"
import SelagemIcon from "@material-ui/icons/CardMembership"
import ImpressaoIcon from "@material-ui/icons/LocalPrintshop"
import AssinaturaIcon from "@material-ui/icons/Create"
import CertidaoIcon from "@material-ui/icons/Description"
import BalcaoIcon from "@material-ui/icons/LibraryBooks"
import EntregueIcon from "@material-ui/icons/DoneAll"
import CanceladoIcon from "@material-ui/icons/Close"

const ProtocolosRegistrosTimeline = [
  {
    title: "Protocolo",
    description: "Prenotação do serviço.",
    icon: <ProtocoloIcon />,
  },
  {
    title: "Pré-Registro",
    description: "Emissão das certidões necessárias ao processo.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Aguardando Reingresso",
    description:
      "Aguardando a parte cumprir as exigências necessárias para registro.",
    icon: <AguardandoReingressoIcon />,
  },
  {
    title: "Tratamento Inicial",
    description: "Tratamento e digitalização da documentação apresentada.",
    icon: <TratamentoInicialIcon />,
  },
  {
    title: "Prot. Viculados",
    description:
      "O protocolo em questão fica aguardando o cumprimento das exigências de outro protocolo vinculado.",
    icon: <ProtocolosVinculadosIcon />,
  },
  {
    title: "Distribuição",
    description: "Sorteio e distribuição dos processos entre os escreventes.",
    icon: <DistribuicaoIcon />,
  },
  {
    title: "Análise",
    description: "Análise do processo e documentação pelo escrevente.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Redistribuição",
    description:
      "O protocolo deverá ser redistribuido para outro escrevente para conferência da análise.",
    icon: <DistribuicaoIcon />,
  },
  {
    title: "Notificação",
    description: "Notificação extrajudicial às partes interessadas.",
    icon: <NotificacaoIcon />,
  },
  {
    title: "Edital",
    description: "Desenvolvimento e publicação de edital.",
    icon: <EditalIcon />,
  },
  {
    title: "Conferência de Nota",
    description:
      "Conferência das notas de exigência por parte do oficial registrador.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Conferência de Processo",
    description: "Análise do processo por outro escrevente em casos complexos.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Selagem",
    description: "Selagem dos documentos.",
    icon: <SelagemIcon />,
  },
  {
    title: "Impressão",
    description: "Impressão da documentação gerada pelo cartório.",
    icon: <ImpressaoIcon />,
  },
  {
    title: "Assinatura",
    description: "Assinatura dos atos nas matrículas.",
    icon: <AssinaturaIcon />,
  },
  {
    title: "Certidão",
    description: "Emissão de certidões pós atos.",
    icon: <CertidaoIcon />,
  },
  {
    title: "Pendencia Caixa",
    description:
      "Há pendências de caixa que necessitam ser sanadas antes da finalização do processo.",
    icon: <PendenciaCaixaIcon />,
  },
  {
    title: "Balcão/Arquivo",
    description: "Processo finalizado, aguardando retirada pelo cliente.",
    icon: <BalcaoIcon />,
  },
  {
    title: "Entregue",
    description: "Processo finalizado e entregue à parte.",
    icon: <EntregueIcon />,
  },
  {
    title: "Cancelados",
    description: "Protocolo cancelado.",
    icon: <CanceladoIcon />,
  },
]

export default ProtocolosRegistrosTimeline
