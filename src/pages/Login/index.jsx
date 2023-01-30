import { Link, useNavigate } from "react-router-dom";
import { DivLogin, FormStyled } from "./style";

import { useEffect } from "react";
import { FormLogin } from "./form";
import { useState } from "react";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    if (token) {
      navigate("/dashboard");
    }
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return null;
  }

  return (
    <DivLogin>
      <h1>Kenzie Hub</h1>
      <FormLogin />
    </DivLogin>
  );
};
