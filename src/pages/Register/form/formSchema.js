import * as yup from "yup";

export const FormSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email Obrigatório").email("Email inválido!"),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .min(8, "Insira pelo menos 8 catacteres")
    .matches(/(?=.*?[a-z])/, "Insira pelo menos uma letra")
    .matches(/(?=.*?[0-9])/, "Insira ao menos um número")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Insira ao menos um caractere especial"),
  confirm_password: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  contact: yup.string().required("Contato Obrigatório"),
  bio: yup.string().required("Descrição Obrigatória"),
  course_module: yup.string(),
});
