import { AddTechModal } from "./AddTech";
import { ModalStyled } from "./style";

export const Modal = ({ type }) => {
  return (
    <ModalStyled>
      <AddTechModal />
    </ModalStyled>
  );
};
