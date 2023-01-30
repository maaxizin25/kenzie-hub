import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthContext";
import { TechContext } from "../../../providers/TechContext";
import { Button } from "../../../styles/button";
import { AddTechStyled } from "./style";

export const AddTechModal = () => {
  const { setModal, addTech, modalType, techName, editTech, deleteTech } =
    useContext(TechContext);
  const { loadingBtn } = useContext(AuthContext);

  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    addTech(data);
  }
  function submitEditTech(data) {
    editTech(techName.id, data);
  }

  return (
    <AddTechStyled className="container-modal">
      {modalType === "add" && (
        <>
          <span>
            <h2>Cadastrar Tecnologia</h2>
            <p onClick={() => setModal(false)}>X</p>
          </span>
          <form onSubmit={handleSubmit(onSubmit)} action="">
            <label htmlFor="name-tech">Nome</label>
            <input id="name-tech" type="text" required {...register("title")} />
            <label htmlFor="status">Selecionar status</label>
            <select id="status" name="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <Button disabled={loadingBtn} type="submit">
              Cadastrar Tecnologia
            </Button>
          </form>
        </>
      )}
      {modalType === "edit" && (
        <>
          <span>
            <h2>Tecnologia Detalhes</h2>
            <p onClick={() => setModal(false)}>X</p>
          </span>
          <form onSubmit={handleSubmit(submitEditTech)} action="">
            <label htmlFor="name-tech">Nome do projeto</label>
            <input
              className="disabled-input"
              id="name-tech"
              value={techName.title}
              type="text"
              disabled
            />
            <label htmlFor="status">Selecionar status</label>
            <select id="status" name="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <Button disabled={loadingBtn} type="submit">
              Editar Tecnologia
            </Button>
            <button
              type="button"
              onClick={() => deleteTech(techName.id)}
              className="button-delete"
            >
              Excluir
            </button>
          </form>
        </>
      )}
    </AddTechStyled>
  );
};
