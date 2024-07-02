import styled from "styled-components";

const StyledSeparator = styled.div`
  max-width: 960px;
  margin: 0 10px;
  height: 1px;
  background-color: var(--color-blue-dark);
`;

const Separator = () => {
  return <StyledSeparator />;
};

export default Separator;
