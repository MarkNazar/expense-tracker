import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteRecord as deleteRecordApi } from "../../services/apiRecords";
import toast from "react-hot-toast";

const useDeleteRecord = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteRecord } = useMutation({
    mutationFn: deleteRecordApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["records"]);
      toast.success("Record deleted successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, deleteRecord };
};

export default useDeleteRecord;
