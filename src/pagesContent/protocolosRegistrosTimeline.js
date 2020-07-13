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
    description: "Prenotação do serviço e triagem da documentação.",
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
      "O cartório aguarda a parte cumprir as exigências necessárias para registro.",
    icon: <AguardandoReingressoIcon />,
  },
  {
    title: "Tratamento Inicial",
    description:
      "Tratamento e digitalização dos documentos e informações apresentados.",
    icon: <TratamentoInicialIcon />,
  },
  {
    title: "Prot. Viculados",
    description:
      "O protocolo em questão fica retido enquanto o cartório aguarda que a parte cumpra as exigências do protocolo principal vinculado.",
    icon: <ProtocolosVinculadosIcon />,
  },
  {
    title: "Distribuição",
    description: "O processo será distribuído a um escrevente.",
    icon: <DistribuicaoIcon />,
  },
  {
    title: "Análise",
    description:
      "Análise jurídica do processo e da documentação pelo escrevente.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Redistribuição",
    description:
      "O processo será distribuído a um segundo escrevente para conferência dos trabalhos realizados até o momento.",
    icon: <DistribuicaoIcon />,
  },
  {
    title: "Notificação",
    description:
      "O cartório prepara a documentação, notifica as partes interessas e aguarda o prazo legal para suas manifestações.",
    icon: <NotificacaoIcon />,
  },
  {
    title: "Edital",
    description:
      "O cartório formula o edital para notificação ou intimação e aguarda o solicitante publicar e as partes notificadas se manifestarem, de acordo com os prazos legais.",
    icon: <EditalIcon />,
  },
  {
    title: "Conferência de Nota Devolutiva",
    description:
      "O processo foi remetido para a análise do oficial do cartório para averiguação das pendências observadas na análise e para a formulação da Nota Devolutiva.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Conferência de Processo",
    description:
      "Um segundo escrevente analisa a possibilidade de realização do ato solicitado no processo, por ser de relativa complexibilidade.",
    icon: <AnaliseIcon />,
  },
  {
    title: "Selagem",
    description:
      "O processo aguarda até que todos os atos praticados sejam selados. Cada selo é fornecido pelo TJGO e garante a autenticidade do ato e o correto recolhimento dos tributos devidos.",
    icon: <SelagemIcon />,
  },
  {
    title: "Impressão",
    description:
      "Os textos dos atos praticados são impressos na matrícula do imóvel.",
    icon: <ImpressaoIcon />,
  },
  {
    title: "Assinatura",
    description:
      "O Oficial do cartório confere e assina a matrícula do imóvel.",
    icon: <AssinaturaIcon />,
  },
  {
    title: "Certidão",
    description:
      "Emissão de certidão da matrícula já com o registro/averbação solicitado (certidão pós-registro).",
    icon: <CertidaoIcon />,
  },
  {
    title: "Pendência Caixa",
    description:
      "O processo encontra-se finalizado, todavia, há pendências de caixa que devem ser resolvidas antes da entrega da documentação.",
    icon: <PendenciaCaixaIcon />,
  },
  {
    title: "Finalizado",
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
