import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/apiAuth";
import Records from "./Records";
import useUser from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Login = () => {
  const { isLoading, user, isFetching } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isFetching && user) navigate("/");
  }, [isLoading, user, isFetching, navigate]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/", { replace: true });
  //     }
  //   });
  // }, [navigate]);

  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
