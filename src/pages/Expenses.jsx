import ButtonIcon from "../ui/ButtonIcon";
import useMoveBack from "../hooks/useMoveBack";
import AddExpense from "../features/expenses/AddExpense";
import ExpensesLists from "../features/expenses/ExpensesLists";
import { HiOutlineArrowLeft } from "react-icons/hi";
import styled from "styled-components";
import Modal from "../ui/Modal";
import ButtonWithIcon from "../ui/ButtonWithIcon";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import IconWithText from "../ui/IconWithText";
import { useNavigate } from "react-router-dom";

const StyledExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
  font-weight: 500;
`;

const Expenses = () => {
  // const back = useMoveBack();
  const navigate = useNavigate();
  return (
    <StyledExpenses>
      <IconWithText onClick={() => navigate("/records")}>
        <HiOutlineArrowLeft /> Back to Records
      </IconWithText>
      <Modal>
        <Modal.Open opens="add-expense">
          <ButtonWithIcon>
            <HiOutlineCurrencyDollar />
            Add New Expense
          </ButtonWithIcon>
        </Modal.Open>
        <Modal.Window name="add-expense">
          <AddExpense />
        </Modal.Window>
      </Modal>

      <ExpensesLists />
    </StyledExpenses>
  );
};

export default Expenses;
