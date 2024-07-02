import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useUpdateRecord from "../records/useUpdateRecord";
import TextArea from "../../ui/TextArea";
import Block from "../../ui/Block";

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const UpdateRecord = ({ id, record, onCloseModal }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isEditing, updateRecord } = useUpdateRecord();

  const {
    data: { budget },
  } = record;

  const onSubmit = (updatedRecord) => {
    updateRecord(
      { id, updatedRecord },
      {
        onSuccess: () => {
          onCloseModal?.();
          reset();
        },
      }
    );
  };
  return (
    <div>
      <H2>Edit Record</H2>
      <Form onSubmit={handleSubmit(onSubmit)} $layout="vertical">
        <FormRow label="Budget (AED)" error={errors.budget?.message}>
          <Input
            type="number"
            defaultValue={budget}
            id="budget"
            {...register("budget", {
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Budget must be 1 AED and above",
              },
              required: "This field is required",
            })}
          />
        </FormRow>
        <Block $align="right">
          <Button disabled={isEditing}>
            {isEditing ? "Editing..." : "Edit Record"}
          </Button>
        </Block>
      </Form>
    </div>
  );
};

export default UpdateRecord;
