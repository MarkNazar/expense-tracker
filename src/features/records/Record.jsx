import ButtonIcon from "../../ui/ButtonIcon";
import {
  HiOutlineEye,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";
import styled from "styled-components";
import useDeleteRecord from "./useDeleteRecord";
import LinkIcon from "../../ui/LinkIcon";
import FlexColumn from "../../ui/FlexColumn";
import Modal from "../../ui/Modal";
import DeleteConfirmation from "../../ui/DeleteConfirmation";
import useExpenses from "../expenses/useExpenses";
import UpdateRecord from "./UpdateRecord";

const StyledRecord = styled.div`
  padding: 20px;
  padding-top: 40px;
  border: 1px solid var(--color-blue-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 10px;
  }
`;

const Year = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  background-color: var(--color-blue-dark);
  color: var(--color-grey-light);
  border-bottom-right-radius: 8px;
`;

const RecordInfo = styled.p`
  font-size: 14px;
  color: ${(props) =>
    props.$variant === "danger"
      ? "var(--color-red)"
      : "var(--color-blue-dark)"};
`;

const Record = ({ record }) => {
  const { isLoading, deleteRecord } = useDeleteRecord();
  const {
    data: { month, year, budget },
    id,
  } = record;

  const { isLoading: isLoadingExpenses, expenses } = useExpenses(id);
  const totalExpenses = expenses?.reduce((acc, curr) => {
    // return acc.data.amount + curr.data.amount;
    return acc + curr.data.amount;
  }, 0);

  return (
    <StyledRecord>
      <div>
        <h3>{month}</h3>
        <RecordInfo $variant={totalExpenses > budget ? "danger" : "normal"}>
          Budget: {budget}AED
        </RecordInfo>
        {isLoadingExpenses && <RecordInfo>Calculating...</RecordInfo>}
        {!isLoadingExpenses && (
          <RecordInfo>
            <p>
              Expenses:{" "}
              {totalExpenses ? `${totalExpenses.toFixed(2)}AED` : "--"}{" "}
            </p>
            <p>
              Remaining:{" "}
              {totalExpenses
                ? `${(budget - totalExpenses).toFixed(2)}AED`
                : "--"}{" "}
            </p>
          </RecordInfo>
        )}
      </div>
      <Year>{year}</Year>
      <FlexColumn>
        <LinkIcon to={`/records/${id}`}>
          <HiOutlineEye />
        </LinkIcon>

        <Modal>
          <Modal.Open opens="edit-record">
            <ButtonIcon>
              <HiOutlinePencilAlt />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="edit-record">
            <UpdateRecord id={id} record={record} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="delete-record">
            <ButtonIcon $variant="danger">
              <HiOutlineTrash />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Window name="delete-record">
            <DeleteConfirmation
              resourceName={`Record ${month} ${year}`}
              onDelete={() => deleteRecord(id)}
              isLoading={isLoading}
            />
          </Modal.Window>
        </Modal>
      </FlexColumn>
    </StyledRecord>
  );
};

export default Record;
