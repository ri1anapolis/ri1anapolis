export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Olá. O nosso site tem uma nova versão disponível! ` +
      `Deseja atualizar a página agora para usar a nova versão?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
