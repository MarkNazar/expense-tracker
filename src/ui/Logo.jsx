import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h2`
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 468px) {
    font-size: 1.375rem;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">Expense Tracker</Link>
    </StyledLogo>
  );
};

export default Logo;
