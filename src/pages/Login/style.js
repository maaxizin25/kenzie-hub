import styled from "styled-components";

export const DivLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    margin-bottom: 35px;
    color: var(--color-primary);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 369px;
    background-color: var(--grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 42px 22px;
    gap: 10px;
  }
  label {
    font-size: 12px;
    color: var(--grey-0);
  }
  input {
    height: 48px;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-0);
    border-radius: 4px;
    padding: 0px 10px;
    color: var(--grey-0);
  }
  h2 {
    text-align: center;
    margin-bottom: 10px;
    color: var(--grey-0);
  }
  p {
    color: var(--grey-1);
    font-size: 12px;
    text-align: center;
  }
  button {
    width: 100%;
    height: 48px;
    cursor: pointer;
    color: var(--grey-0);
    border-radius: 4px;
  }
  .login {
    margin-top: 16px;
  }
  .register {
    background-color: var(--grey-1);
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-2);
    border-radius: 4px;
    font-size: 12px;
  }
  @media (max-width: 600px) {
    form {
      width: 296px;
    }
  }
`;
