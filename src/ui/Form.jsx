import styled from "styled-components";

const Form = styled.form`
  max-width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: ${({ $layout }) =>
    $layout === "horizontal" ? "row" : "column"};
`;

export default Form;
