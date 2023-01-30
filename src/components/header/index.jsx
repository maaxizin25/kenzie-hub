import { HeaderStyled } from "./style";

export const Header = ({ userInfo }) => {
  return (
    <HeaderStyled>
      <span className="info-user">
        <h2> Olá, {userInfo.name}</h2>
        <p>{userInfo.course_module}</p>
      </span>
    </HeaderStyled>
  );
};
