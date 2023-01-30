import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Insira um email válido!"),
  password: yup.string().required("Campo obrigatório"),
});
