import * as yup from 'yup';

export const yupSchema = yup.object({
  name: yup.string()
    .required('Campo obrigatório.')
    .min(3, 'O Nome deve ter pelo menos 3 caracteres.'),
  cnpj: yup.string()
    .required('Campo obrigatório.')
    .matches(/^[0-9]+$/, 'O CNPJ deve conter apenas números.')
    .min(14, 'O CNPJ deve conter exatamente 14 dígitos')
    .max(14, 'O CNPJ deve conter exatamente 14 dígitos'),
  email: yup.string()
    .email('Formato de e-mail inválido.')
    .required('Campo obrigatório.')
});
