import { useQuery } from "react-query";
import { getExpenses } from "../../services/apiExpenses";
import { useParams } from "react-router-dom";

const useExpenses = (recordId = null) => {
  const { id } = useParams();
  const { isLoading, data: expenses } = useQuery({
    queryFn: () => getExpenses(recordId || id),
    queryKey: ["expenses", id, recordId],
  });
  return { isLoading, expenses };
};

export default useExpenses;
