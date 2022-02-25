import * as yup from "yup";

export const schemaOfRegister = yup.object({
  email: yup.string().email('Formato de email inválido'),
  password: yup.string().min(6, 'Requer no mínimo de 6 dígitos'),
  confirmationPassword: yup.string().oneOf([yup.ref('password'), null], 'Senha devem estar igual')
}).required('Campo obrigatário');