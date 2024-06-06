import useDeleteExpense from "./useDeleteExpense";

import UpdateExpense from "./UpdateExpense";

import ButtonIcon from "../../ui/ButtonIcon";
import DeleteConfirmation from "../../ui/DeleteConfirmation";
import Modal from "../../ui/Modal";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

import styled from "styled-components";

const StyledExpense = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 0.5fr;
  gap: 40px;
  border-bottom: 1px solid var(--color-blue-dark);
  padding: 20px;
  padding-bottom: 10px;
`;

const ExpenseAction = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Expense = ({ expense }) => {
  const { isDeleting, deleteExpense } = useDeleteExpense();

  const isWorking = isDeleting;
  const {
    data: { amount, description, recordId, title },
    id,
  } = expense;
  return (
    <StyledExpense role="row">
      <div>{title}</div>
      <div>{description ? description : "--"}</div>
      <div>{amount} AED</div>
      <ExpenseAction>
        <Modal>
          <Modal.Open opens="edit-expense">
            <ButtonIcon disabled={isWorking}>
              <HiOutlinePencilAlt />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="edit-expense">
            <UpdateExpense id={id} expense={expense} />
          </Modal.Window>
        </Modal>
        <ButtonIcon $variant="danger">
          <Modal>
            <Modal.Open opens="delete-expense">
              <HiOutlineTrash />
            </Modal.Open>
            <Modal.Window name="delete-expense">
              <DeleteConfirmation
                resourceName="Expense"
                isLoading={isDeleting}
                onDelete={() => deleteExpense(id)}
              />
            </Modal.Window>
          </Modal>
        </ButtonIcon>
      </ExpenseAction>
    </StyledExpense>
  );
};

export default Expense;
