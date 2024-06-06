import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  justify-content: ${({ $verticalAlign }) =>
    $verticalAlign === "left" ? "flex-start" : "flex-end"};
  gap: 10px;
  align-items: center;
`;

FlexColumn.defaultProps = {
  $verticalAlign: "left",
};

export default FlexColumn;
