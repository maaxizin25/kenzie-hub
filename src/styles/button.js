import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#59323F" : "#FF427F")}; ;
`;
