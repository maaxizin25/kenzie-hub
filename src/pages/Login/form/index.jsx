import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../formSchema";
import { Api } from "../../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../styles/button";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthContext";

export const FormLogin = () => {
  const navigate = useNavigate();

  const { login, loadingBtn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <>
      <form onSubmit={handleSubmit(login)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" {...register("password")} />
        <Button disabled={loadingBtn} className="login" type="submit">
          {loadingBtn ? "Entrando..." : "Entrar"}
        </Button>
        <p>Ainda não possui uma conta?</p>
        <Link className="register" to={"/register"}>
          Cadastre-se
        </Link>
      </form>
    </>
  );
};
