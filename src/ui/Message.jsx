import styled from "styled-components";

const StyledMessage = styled.h3`
  font-size: 20px;
`;

const Message = ({ message }) => {
  return <StyledMessage>{message}</StyledMessage>;
};

export default Message;
