import { Outlet } from "react-router-dom";

import Header from "./Header";
import StyledSeparator from "./Separator";

import styled from "styled-components";
import Footer from "./Footer";

const StyledAppLayout = styled.section`
  width: 100%;
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;

const Main = styled.main`
  padding: 20px 10px;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Container>
        <Header />
        <StyledSeparator />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </StyledAppLayout>
  );
};

export default AppLayout;
