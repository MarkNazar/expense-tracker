import styled from "styled-components";

const Button = styled.button`
  padding: ${({ $size }) => ($size === "normal" ? "12px 24px" : "8px 16px")};
  background-color: ${({ $variant }) =>
    $variant === "normal" ? "var(--color-blue-dark)" : "var(--color-red)"};
  color: var(--color-white);
  text-transform: capitalize;
  border-radius: 8px;
  border: none;

  &:hover {
    filter: brightness(120%);
  }
`;

Button.defaultProps = {
  $variant: "normal",
  $size: "normal",
};

export default Button;
