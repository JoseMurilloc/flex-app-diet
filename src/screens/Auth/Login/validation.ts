import * as yup from "yup";

export const schemaOfLogin = yup.object({
  email: yup.string().email('Formato de email inválido'),
  password: yup.string().min(6, 'Requer no mínimo de 6 dígitos')
}).required('Campo obrigatário');