import styled from "styled-components";

const TextArea = styled.textarea`
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid var(--color-blue-dark);
  border-radius: 8px;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default TextArea;
