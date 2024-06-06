import styled from "styled-components";

const Block = styled.div`
  margin-bottom: ${({ $spaceBottom }) => $spaceBottom};
  margin-top: ${({ $spaceTop }) => $spaceTop};
  text-align: ${({ $align }) => $align};
`;

Block.defaultProps = {
  $spaceBottom: "0px",
  $spaceTop: "0px",
  $align: "left",
};

export default Block;
