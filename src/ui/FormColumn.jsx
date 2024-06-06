import styled from "styled-components";

const FormColumn = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 468px) {
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: ; */
  }
`;

export default FormColumn;
