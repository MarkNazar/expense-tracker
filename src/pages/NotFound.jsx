import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledNotFound = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const H2 = styled.h2`
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  background-color: var(--color-blue-dark);
  padding: 8px 16px;
  color: var(--color-white);
  border-radius: 8px;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <H2>Page not found</H2>
      <StyledLink to="/">Back to home</StyledLink>
    </StyledNotFound>
  );
};

export default NotFound;
