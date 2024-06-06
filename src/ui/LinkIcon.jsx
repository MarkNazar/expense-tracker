import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonIcon = styled(Link)`
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default ButtonIcon;
