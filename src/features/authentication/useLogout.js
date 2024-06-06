import { useMutation } from "react-query";
import { signUserOut as signUserOutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const { isLoading, mutate: signOut } = useMutation({
    mutationFn: signUserOutApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("Sign Out successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, signOut };
};

export default useLogout;
