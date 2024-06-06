import { useQuery } from "react-query";
import { getRecords } from "../../services/apiRecords";

const useRecords = () => {
  const {
    isLoading,
    data: records,
    error,
  } = useQuery({
    queryFn: getRecords,
    queryKey: ["records"],
  });

  if (error) throw new Error("Something went wrong getting records");
  return { isLoading, records };
};

export default useRecords;
