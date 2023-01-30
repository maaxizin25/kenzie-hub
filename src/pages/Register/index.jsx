import { DivRegister } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MyForm } from "./form";

export const RegisterForm = () => {
  return (
    <DivRegister>
      <span className="title-form">
        <h1>Kenzie Hub</h1>
        <Link to={"/login"}>Voltar</Link>
      </span>
      <MyForm />
    </DivRegister>
  );
};
