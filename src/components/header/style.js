import styled from "styled-components";

export const HeaderStyled = styled.header`
  border-bottom: 1px solid var(--grey-3);
  margin-bottom: 15px;
  .info-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 118px;
    width: 796px;
    margin: 0 auto;
  }

  h2 {
    color: white;
  }
  p {
    color: var(--grey-1);
  }
  @media (max-width: 799px) {
    .info-user {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      padding: 10px;
    }
  }
`;
