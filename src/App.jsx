import logo from "./logo.svg";
import "./App.css";
import { Container } from "./styles/container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyRoutes } from "./routes";
import { AuthProvider } from "./providers/AuthContext";
import { Modal } from "./components/modal";
import { useContext } from "react";
import { TechContext } from "./providers/TechContext";

function App() {
  const { modal } = useContext(TechContext);

  return (
    <>
      <Container>
        {modal && <Modal />}
        <MyRoutes />
      </Container>
    </>
  );
}

export default App;
