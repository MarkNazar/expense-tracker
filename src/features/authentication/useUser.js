import { useQuery } from "react-query";
import { getUser } from "../../services/apiAuth";

const useUser = () => {
  const {
    isLoading,
    data: user,
    isFetching,
  } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return { isLoading, user, isFetching };
};

export default useUser;
