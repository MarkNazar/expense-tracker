import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.span`
  width: 60px;
  height: 60px;
  border: 5px solid var(--color-blue-dark);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

const Spinner = () => {
  return (
    <StyledSpinner>
      <Circle />
    </StyledSpinner>
  );
};

export default Spinner;
