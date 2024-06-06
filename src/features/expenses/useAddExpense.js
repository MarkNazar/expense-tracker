import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addExpense as addExpenseApi } from "../../services/apiExpenses";
import toast from "react-hot-toast";

const useAddExpense = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate: addExpense } = useMutation({
    mutationFn: addExpenseApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["expenses"]);
      toast.success("New expense added successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, addExpense };
};

export default useAddExpense;
