import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Api } from "../../../services/api";
import { Button } from "../../../styles/button";

export const MyForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const FormSchemaRegister = yup.object().shape({
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchemaRegister),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await Api.post("/users", data);
      toast.success("Usúario criado com sucesso!");
      navigate("/login");
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="box-create">
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </span>

        <label htmlFor="name">Nome</label>
        <input
          placeholder="Digite aqui seu nome"
          type="text"
          id="name"
          {...register("name")}
        />
        {errors.name && <p className="input-error">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          placeholder="Digite aqui seu email"
          type="email"
          id="email"
          {...register("email")}
        />
        {errors.email && <p className="input-error">{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          placeholder="Digite aqui sua senha"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="input-error">{errors.password.message}</p>
        )}

        <label htmlFor="confirm_password">Confirmar senha</label>
        <input
          placeholder="Digite sua senha novamente"
          type="password"
          id="confirm_password"
          {...register("confirm_password")}
        />
        {errors.confirm_password && (
          <p className="input-error">{errors.confirm_password.message}</p>
        )}

        <label htmlFor="bio">Bio</label>
        <input
          placeholder="Fale sobre você"
          type="text"
          id="bio"
          {...register("bio")}
        />
        {errors.bio && <p className="input-error">{errors.bio.message}</p>}

        <label htmlFor="contact">Contato</label>
        <input
          placeholder="Opção de contato"
          type="text"
          id="contact"
          {...register("contact")}
        />
        {errors.contact && (
          <p className="input-error">{errors.contact.message}</p>
        )}

        <label htmlFor="course_module">Seleionar módulo</label>
        <select name="" id="course_module" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>

        <Button className="register-Button" type="submit" disabled={loading}>
          Cadastrar
        </Button>
      </form>
    </>
  );
};
