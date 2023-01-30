import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthContext";
import { MyNav } from "./style";

export const Nav = ({}) => {
  const { setUser } = useContext(AuthContext);

  function logoutUser() {
    localStorage.clear();
    toast.success("Logout Efetuado com sucesso!");
    setUser(null);
  }

  return (
    <MyNav>
      <span className="container-nav">
        <h1>Kenzie Hub</h1>
        <Link to={"/login"} onClick={logoutUser}>
          {" "}
          Sair{" "}
        </Link>
      </span>
    </MyNav>
  );
};
