import { HiOutlineDocumentAdd } from "react-icons/hi";
import AddRecord from "../features/records/AddRecord";
import RecordsLists from "../features/records/RecordsLists";
import Block from "../ui/Block";
import Button from "../ui/Button";

import Modal from "../ui/Modal";
import styled from "styled-components";
import ButtonWithIcon from "../ui/ButtonWithIcon";
const StyledRecords = styled.div``;

const Records = () => {
  return (
    <StyledRecords>
      <Block $spaceBottom="40px" $spaceTop="20px">
        <Modal>
          <Modal.Open opens="add-record">
            <ButtonWithIcon>
              <HiOutlineDocumentAdd />
              Add New Record
            </ButtonWithIcon>
          </Modal.Open>
          <Modal.Window name="add-record">
            <AddRecord />
          </Modal.Window>
        </Modal>
      </Block>
      <RecordsLists />
    </StyledRecords>
  );
};

export default Records;
