import styled from "styled-components";

const Input = styled.input`
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid var(--color-blue-dark);
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

export default Input;
