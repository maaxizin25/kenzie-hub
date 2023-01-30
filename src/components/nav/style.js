import styled from "styled-components";

export const MyNav = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--grey-3);
  .container-nav {
    width: 796px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding: 20px 0px;
    h1 {
      color: var(--color-primary);
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--grey-3);
      color: white;
      border-radius: 4px;
      width: 56px;
    }
    @media (max-width: 799px) {
      width: 100%;
      padding: 20px;
    }
  }
`;
