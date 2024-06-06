import { useQuery } from "react-query";
import { getRecordById } from "../../services/apiRecords";
import { useParams } from "react-router-dom";

const useRecord = () => {
  const { id } = useParams();
  const { isLoading, data: record } = useQuery({
    queryFn: () => getRecordById(id),
    queryKey: ["record", id],
  });

  return { isLoading, record };
};

export default useRecord;
