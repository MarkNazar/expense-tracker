import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";
import Logout from "./Logout";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const List = styled.li``;
const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      <List>
        <ThemeToggle />
      </List>
      <List>
        <Logout />
      </List>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
