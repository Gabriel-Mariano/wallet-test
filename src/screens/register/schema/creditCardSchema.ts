import * as yup from 'yup';

export const creditCardSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      'Número do cartão deve ter 16 dígitos',
    ),

  cardHolder: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),

  expirationDate: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Formato inválido (MM/YY)'),

  securityCode: yup
    .string()
    .required('Campo obrigatório')
    .matches(/^\d{3}$/, 'Código de segurança deve ter 3 dígitos'),
});
