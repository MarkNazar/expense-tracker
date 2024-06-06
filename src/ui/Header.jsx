import styled from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
