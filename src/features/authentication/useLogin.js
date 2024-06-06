import { useMutation } from "react-query";
import { signIn as signInApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const { isLoading, mutate: signIn } = useMutation({
    mutationFn: signInApi,
    onSuccess: () => {
      navigate("/records", { replace: true });
      toast.success("Login successfully");
    },
    onError: (err) => toast.error("Invalid username or password"),
  });

  return { isLoading, signIn };
};

export default useLogin;
