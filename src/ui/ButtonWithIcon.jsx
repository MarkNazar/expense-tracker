import styled from "styled-components";

const ButtonWithIcon = styled.button`
  padding: 12px 24px;
  background-color: var(--color-blue-dark);
  color: var(--color-white);
  text-transform: capitalize;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    filter: brightness(120%);
  }
`;

export default ButtonWithIcon;
