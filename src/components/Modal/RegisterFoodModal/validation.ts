import * as yup from "yup";

export const schema = yup.object({
  nameFood: yup.string().required('Campo obrigatário'),
  nameBrand: yup.string(),
  numberServing: yup.number().min(1, 'Valor mínimo valido é 1').required('Campo obrigatário'),
  cabos: yup.number().required('Campo obrigatário'),
  fat: yup.number().required('Campo obrigatário'),
  servingSize: yup.string().required('Campo obrigatário'),
  protein: yup.number().required('Campo obrigatário'),

}).required('Campo obrigatário');