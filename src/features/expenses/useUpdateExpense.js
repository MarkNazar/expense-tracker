import { useMutation, useQueryClient } from "react-query";
import { updateExpense as updateExpenseApi } from "../../services/apiExpenses";
import toast from "react-hot-toast";

const useUpdateExpense = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: updateExpense } = useMutation({
    mutationFn: updateExpenseApi,
    onSuccess: () => {
      toast.success("Expense updated successfully");
      queryClient.invalidateQueries(["expenses"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, updateExpense };
};

export default useUpdateExpense;
