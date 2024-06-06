import { useMutation, useQueryClient } from "react-query";
import { addRecord as addRecordApi } from "../../services/apiRecords";
import toast from "react-hot-toast";

const useAddRecord = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate: addRecord } = useMutation({
    mutationFn: addRecordApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["records"]);
      toast.success("New record was added successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, addRecord };
};

export default useAddRecord;
