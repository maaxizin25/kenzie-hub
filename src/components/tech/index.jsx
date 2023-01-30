import { Technology } from "./style";
import buttonAdd from "../assets/button.svg";
import notfound from "../assets/notfound.png";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const TechsProfile = ({ userTech, deleteTech }) => {
  const { setModal, setModalType, setTechName } = useContext(TechContext);

  function modalAddOpen() {
    setModal(true);
    setModalType("add");
  }
  function modalEditOpen(tech) {
    setTechName(tech);
    setModal(true);
    setModalType("edit");
  }

  return (
    <Technology>
      <span>
        <h2>Tecnologias</h2>
        <img onClick={modalAddOpen} src={buttonAdd} alt="" />
      </span>
      {userTech.length === 0 ? (
        <div onClick={modalAddOpen} className="not-tech">
          <h2>Ops, você ainda não tem tecnologias cadastradas</h2>
          <img src={notfound} alt="" />
        </div>
      ) : (
        <ul>
          {userTech.map((e) => (
            <li onClick={() => modalEditOpen(e)} key={e.id}>
              <h2>{e.title}</h2>
              <span className="list-tech">
                <p>{e.status}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </Technology>
  );
};
