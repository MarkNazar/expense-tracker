import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/apiAuth";
import { useMutation, useQuery } from "react-query";
import useUser from "../features/authentication/useUser";

import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { isLoading, user, isFetching } = useUser();
  const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   });
  // }, [navigate]);

  useEffect(() => {
    if (!isLoading && !isFetching && !user) navigate("/login");
  }, [isLoading, user, isFetching, navigate]);

  if (!isLoading && !isFetching && user) return children;
};

export default ProtectedRoute;
