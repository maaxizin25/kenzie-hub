import styled from "styled-components";

export const AddTechStyled = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 369px;
  span {
    height: 48px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
  }
  span > h2 {
    font-size: 14px;
    color: #f8f9fa;
  }
  span > p {
    font-size: 14px;
    cursor: pointer;
    color: var(--grey-1);
  }
  form {
    padding: 10px;
    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  button {
    margin-top: 10px;
    color: white;
    height: 48px;
    border-radius: 4px;
  }
  input {
    height: 48px;
    border-radius: 4px;
    border: 1.2182px solid #f8f9fa;
    background: #343b41;
    padding: 10px;
    color: #f8f9fa;
  }
  label {
    color: var(--grey-1);
  }
  select {
    height: 48px;
    border-radius: 4px;
    border: 1.2182px solid #f8f9fa;
    background: #343b41;
    padding: 10px;
    color: #f8f9fa;
  }
  .button-delete {
    background: #868e96;
  }
  .disabled-input {
    color: var(--grey-1);
  }
`;
