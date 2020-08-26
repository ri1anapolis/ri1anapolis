const htmlTemplate = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>_messageSubject_</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin: 0; padding: 0;">
<table border="0" cellpadding="0" cellspacing="0" width="100%"> 
<tr>
<td style="padding: 10px 0 30px 0;">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border: 1px solid #cccccc; border-collapse: collapse; max-width: 600px; min-width: 320px;">
<tr>
<td align="center" bgcolor="#AA7E3D" style="padding: 40px 0; color: #252220; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
<h1 style="color: #252220; font-family: Arial, sans-serif; font-size: 24px; margin: 0;">
Cartório de Registro de Imóveis
</h1>
<h2 style="color: #252220; font-family: Arial, sans-serif; font-size: 18px;margin: 0;">
Primeira Circunscrição de Anápolis/GO
</h2>
</td>
</tr>
<tr>
<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
<table border="0" cellpadding="0" cellspacing="0" width="100%">
<tr>
<td style="color: #153643; font-family: Arial, sans-serif; font-size: 20px;">
<b>Novo pedido</b>
</td>
</tr>
<tr>
<td style="padding: 15px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px;">
_messageSubject_
</td>
</tr>
<tr>
<td>
<h2 style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 18px;">
Informações do Solicitante
</h2>
</td>
</tr>
<tr>
<td style="padding: 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
_requesterInfo_
</td>
</tr>
<tr>
<td>

<h2 style="padding: 25px 0 0 0;color: #153643; font-family: Arial, sans-serif; font-size: 18px;">
Dados da Solicitação
</h2>
</td>
</tr>
<tr>
<td style="padding: 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
_requestDescription_
</td>
</tr>

</table>
</td>
</tr>
<tr>
<td bgcolor="#252220" style="padding: 30px 30px 30px 30px; color: #c3c3c3; font-family: Arial, sans-serif; font-size: 12px; line-height: 20px; text-align: center;">
Mensagem automática do site <a href="https://ri1anapolis.com.br" style="text-decoration: none; color: #c3c3c3;">https://ri1anapolis.com.br</a><br/>
As respostas a este email serão encaminhadas ao autor da solicitação.
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`
const plainTextTemplate = `
_messageSubject_

::: Informações do solicitante :::
_requesterInfo_

::: Dados da solicitação :::
_requestDescription_
`

function formatMailPayload(data) {
  const payload = {}

  const {
    requestDescription,
    proprietaryId,
    propertyId,
    propertyAddress,
    requesterEmail,
    requesterPhone,
    requesterID,
    requesterName,
  } = data

  const name = requesterName.split(" ")
  payload.subject = `${name[0]} ${
    name[name.length - 1]
  }: solicitação de certidão/busca no site do 1º RI de Anápolis!`

  payload.replyTo = requesterEmail

  const requesterInfoText = `
      Nome: ${requesterName}
      CPF/CNPJ: ${requesterID}
      Telefone: ${requesterPhone}
      E-mail: ${requesterEmail}
      `
  const requesterInfoHtml = `
      Nome: ${requesterName}<br/>
      CPF/CNPJ: ${requesterID}<br/>
      Telefone: ${requesterPhone}<br/>
      E-mail: ${requesterEmail}
      `
  const requestDescriptionText = `
      ${propertyAddress && "Endereço do Imóvel: " + propertyAddress}
      ${propertyId && "Matrícula do Imóvel: " + propertyId}
      ${proprietaryId && "CPF/CNPJ do Proprietário: " + proprietaryId}
      
      Solicitação: ${requestDescription}
      `
  const requestDescriptionHtml = `
      ${propertyAddress && "Endereço do Imóvel: " + propertyAddress + "<br/>"}
      ${propertyId && "Matrícula do Imóvel: " + propertyId + "<br/>"}
      ${proprietaryId && "CPF/CNPJ do Proprietário: " + proprietaryId + "<br/>"}
      Solicitação: ${requestDescription}
      `

  payload.plainTextMessage = plainTextTemplate
    .replace(/_messageSubject_/g, payload.subject)
    .replace(/_requesterInfo_/g, requesterInfoText)
    .replace(/_requestDescription_/g, requestDescriptionText)

  payload.htmlMessage = htmlTemplate
    .replace(/_messageSubject_/g, payload.subject)
    .replace(/_requesterInfo_/g, requesterInfoHtml)
    .replace(/_requestDescription_/g, requestDescriptionHtml)

  return payload
}

export default formatMailPayload
