import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Api } from "../services/api";
import { AuthContext, AuthProvider } from "./AuthContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setUser, setUserTech, setLoadingBtn } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [techName, setTechName] = useState("");

  async function renderTechs() {
    try {
      const response = await Api.get(`/profile`);
      setUser(response.data);
      setUserTech(response.data.techs);
    } catch (error) {
      toast.error(error);
    }
  }
  async function deleteTech(id) {
    try {
      const response = await Api.delete(`users/techs/${id}`);
      renderTechs();
      toast.success("Tech deletada com sucesso!");
    } catch (error) {
      toast.error(error);
    } finally {
      setModal(false);
    }
  }
  async function addTech(data) {
    try {
      setLoadingBtn(true);
      const response = await Api.post("/users/techs", data);
      toast.success("Tech Adicionada com sucesso!");
      renderTechs();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setModal(false);
      setLoadingBtn(false);
    }
  }
  async function editTech(id, data) {
    try {
      setLoadingBtn(true);
      const response = await Api.put(`/users/techs/${id}`, data);
      toast.success("Tech Atualizada com sucesso!");
      renderTechs();
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setModal(false);
      setLoadingBtn(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        deleteTech,
        setModal,
        modal,
        addTech,
        setModalType,
        modalType,
        techName,
        setTechName,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
