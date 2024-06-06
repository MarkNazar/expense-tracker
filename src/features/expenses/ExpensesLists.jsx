import styled from "styled-components";
import useExpenses from "./useExpenses";
import Expense from "./Expense";
import Spinner from "../../ui/Spinner";
import useRecord from "../records/useRecord";
import Message from "../../ui/Message";

const StyledExpensesList = styled.div`
  width: 100%;
`;

const ExpensesListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const H3 = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;

  @media screen and (max-width: 468px) {
    font-size: 18px;
  }
`;
const ExpenseHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr 0.5fr;
  gap: 40px;
  padding: 20px;
  background-color: var(--color-grey-medium);
`;

const ExpenseTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 468px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ExpenseTable = styled.div`
  @media screen and (max-width: 568px) {
    overflow-y: scroll;
  }
`;

const ExpenseTableContainer = styled.div`
  @media screen and (max-width: 568px) {
    width: 568px;
  }
`;

const ExpensesLists = () => {
  const { isLoading, expenses = [] } = useExpenses();
  const { isLoading: isLoadingRecord, record = {} } = useRecord();
  const totalExpenses = expenses?.reduce((acc, curr) => {
    // return acc.data.amount + curr.data.amount;
    return acc + curr.data.amount;
  }, 0);
  const { month, year } = record;

  if (isLoading || isLoadingRecord) return <Spinner />;

  if (!expenses.length) return <Message message="No expenses found." />;
  return (
    <StyledExpensesList>
      <ExpenseTitle>
        <H3>
          Expenses{" "}
          <span>
            ({month} {year})
          </span>
        </H3>
        <H3>Total: {totalExpenses} AED</H3>
      </ExpenseTitle>
      <ExpenseTable>
        <ExpenseTableContainer>
          <ExpenseHeader>
            <div>Title</div>
            <div>Description</div>
            <div>Amount</div>
            <div>Actions</div>
          </ExpenseHeader>
          <ExpensesListsContainer>
            {expenses.map((expense) => {
              return <Expense key={expense.id} expense={expense} />;
            })}
          </ExpensesListsContainer>
        </ExpenseTableContainer>
      </ExpenseTable>
    </StyledExpensesList>
  );
};

export default ExpensesLists;
