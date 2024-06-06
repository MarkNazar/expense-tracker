import Button from "./Button";
import Block from "./Block";
import styled from "styled-components";
import FlexColumn from "./FlexColumn";

const StyledDeleteConfirmation = styled.div``;

const DeleteConfirmation = ({
  resourceName,
  onDelete,
  isLoading,
  onCloseModal,
}) => {
  return (
    <StyledDeleteConfirmation>
      <Block $spaceBottom="10px">
        <h3>Deleting {resourceName}</h3>
      </Block>
      <Block $spaceBottom="20px">
        <p>Are you sure you want to delete this item?</p>
      </Block>
      <Block>
        <FlexColumn $verticalAlign="right">
          <Button
            $size="small"
            disabled={isLoading}
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button
            $variant="danger"
            $size="small"
            disabled={isLoading}
            onClick={onDelete}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </FlexColumn>
      </Block>
    </StyledDeleteConfirmation>
  );
};

export default DeleteConfirmation;
