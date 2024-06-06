import useRecords from "./useRecords";
import Spinner from "../../ui/Spinner";
import Message from "../../ui/Message";
import Record from "./Record";
import styled from "styled-components";

const StyledRecordsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 816px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 412px) {
    grid-template-columns: 1fr;
  }
`;

const H2 = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const RecordsLists = () => {
  const { isLoading, records = [] } = useRecords();

  if (isLoading) return <Spinner />;

  if (!records.length) return <Message message="No records found." />;

  return (
    <div>
      <H2>Records</H2>
      <StyledRecordsList>
        {records?.map((record) => {
          return <Record key={record.id} record={record} />;
        })}
      </StyledRecordsList>
    </div>
  );
};

export default RecordsLists;
