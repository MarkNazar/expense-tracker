import styled from "styled-components";

const ButtonIcon = styled.button`
  color: ${({ $variant }) =>
    $variant === "normal" ? "var(--color-blue-dark)" : "var(--color-red)"};
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

ButtonIcon.defaultProps = {
  $variant: "normal",
};

export default ButtonIcon;
