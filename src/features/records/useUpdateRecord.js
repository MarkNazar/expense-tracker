import { useMutation, useQueryClient } from "react-query";
import { updateRecord as updateRecordApi } from "../../services/apiRecords";
import toast from "react-hot-toast";

const useUpdateExpense = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: updateRecord } = useMutation({
    mutationFn: updateRecordApi,
    onSuccess: () => {
      toast.success("Record updated successfully");
      queryClient.invalidateQueries(["records"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateRecord };
};

export default useUpdateExpense;
