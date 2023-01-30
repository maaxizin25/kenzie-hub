import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [userTech, setUserTech] = useState(null);

  useEffect(() => {
    async function infoUser() {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        Api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await Api.get(`/profile`);
        setUser(response.data);
        setUserTech(response.data.techs);
      } catch (error) {
        console.error(error);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    }

    infoUser();
  }, [navigate]);

  async function login(data) {
    try {
      setLoading(true);
      setLoadingBtn(true);
      const response = await Api.post("/sessions", data);
      toast.success("Login efetuado com sucesso!");

      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));

      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingBtn(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        loading,
        loadingBtn,
        setUser,
        userTech,
        setUserTech,
        setLoadingBtn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
