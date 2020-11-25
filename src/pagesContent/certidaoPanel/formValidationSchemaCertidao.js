import * as yup from "yup"

const nameRegex = /^[a-zA-Z0-9\u00C0-\u00FF']+\s[a-zA-Z0-9\u00C0-\u00FF\s']+$/
const textRegex = /^[a-zA-Z0-9\u00C0-\u00FF\s'"!@#$%&*()+=ªº,.;:/?\-_\\]+$/

yup.addMethod(yup.string, "emptyOrMin", function (min, message) {
  return this.test({
    message,
    name: "emptyOrMin",
    exclusive: true,
    params: { min },
    test(value) {
      return !value || value.length >= min ? true : false
    },
  })
})
yup.addMethod(yup.string, "emptyOrLengths", function (array, message) {
  return this.test({
    message,
    name: "emptyOrLengths",
    exclusive: true,
    params: { array },
    test(value) {
      return !value || array.some(n => n === value.length)
    },
  })
})
yup.addMethod(yup.string, "emptyOrRegex", function (regex, message) {
  return this.test({
    message,
    name: "emptyOrRegex",
    exclusive: true,
    params: { regex },
    test(value) {
      return !value || value.match(regex) ? true : false
    },
  })
})

const validationSchema = yup.object().shape({
  requesterName: yup
    .string()
    .trim()
    .min(8, "Informe seu nome completo!")
    .max(100, "Abrevie um pouco o seu nome!")
    .matches(nameRegex, "Informe um nome válido! ")
    .required("Informe seu nome!"),
  requesterID: yup
    .string()
    .trim()
    .emptyOrLengths([14, 18], "O CPF informado não é válido!")
    .required("Informe seu CPF ou CNPJ!"),
  requesterPhone: yup
    .string()
    .trim()
    .min(14, "O número de telefone informado não é válido!")
    .max(16, "O número de telefone informado não é válido!")
    .required("Informe seu telefone!"),
  requesterEmail: yup
    .string()
    .trim()
    .email("Informe um email válido!")
    .required("Informe seu e-mail!"),
  propertyAddress: yup
    .string()
    .trim()
    .emptyOrMin(5, "O endereço informado não parece ser válido!")
    .max(150, "Abrevie um pouco o endereço!")
    .emptyOrRegex(
      textRegex,
      'Há um ou mais caracteres inválidos no endereço! Ex.: "<>{}[]"'
    ),
  propertyId: yup
    .string()
    .trim()
    .emptyOrMin(3, "A matrícula informada não parece ser válida!")
    .max(20, "Foram informadas matrículas demais!"),
  proprietaryId: yup
    .string()
    .trim()
    .emptyOrLengths([14, 18], "O CPF informado não é válido!"),
  proprietaryName: yup.string().when("proprietaryId", {
    is: value => [14, 18].includes(value.length),
    then: yup
      .string()
      .trim()
      .min(8, "Informe o nome completo do proprietário do imóvel!")
      .max(100, "Abrevie um pouco o nome!")
      .matches(nameRegex, "Informe um nome válido! ")
      .required("Informe o nome do proprietário do imóvel!"),
  }),
  requestDescription: yup
    .string()
    .trim()
    .min(8, "Descreva detalhadamente sua solicitação!")
    .max(
      1500,
      "Sua descrição está muito extensa! Por favor, seja mais sucinto!"
    )
    .matches(
      textRegex,
      'Há um ou mais caracteres inválidos no endereço! Ex.: "<>{}[]"'
    )
    .required("Descreva detalhadamente sua solicitação"),
})

export default validationSchema
