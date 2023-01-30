import styled from "styled-components";

export const DivRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    color: var(--color-primary);
  }
  h2 {
    color: white;
    font-size: 18px;
  }
  span > p {
    color: var(--grey-1);
    font-size: 12px;
  }
  .box-create {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .title-form {
    width: 369px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .title-form > a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-1);
    width: 67px;
    background-color: var(--grey-3);
    height: 40.11px;
    border-radius: 4px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 369px;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 10px 17px;
    gap: 10px;
  }
  label {
    font-size: 12px;
    color: var(--grey-0);
  }
  input {
    height: 35px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 4px;
    padding: 0px 10px;
    color: var(--grey-0);
  }
  button {
    width: 100%;
    height: 48px;
    cursor: pointer;
    color: var(--grey-0);
    border-radius: 4px;
  }
  select {
    height: 48px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
    border-radius: 4px;
    padding: 0px 10px;
    color: var(--grey-0);
  }
  .input-error {
    font-size: 10px;
    color: var(--negative);
  }
  @media (max-width: 600px) {
    form {
      width: 296px;
    }
    .title-form {
      width: 296px;
    }
  }
`;
