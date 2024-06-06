import { useMutation, useQueryClient } from "react-query";
import { deleteExpense as deleteExpenseApi } from "../../services/apiExpenses";
import toast from "react-hot-toast";

const useDeleteExpense = () => {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteExpense } = useMutation({
    mutationFn: deleteExpenseApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      toast.success("Expense deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteExpense };
};

export default useDeleteExpense;
