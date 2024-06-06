import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useUpdateExpense from "./useUpdateExpense";
import TextArea from "../../ui/TextArea";
import Block from "../../ui/Block";

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const AddExpense = ({ id, expense, onCloseModal }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { isEditing, updateExpense } = useUpdateExpense();

  const {
    data: { amount, description, recordId, title },
  } = expense;

  const onSubmit = (updatedExpense) => {
    updateExpense(
      { id, updatedExpense },
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
      <H2>Edit Expense</H2>
      <Form onSubmit={handleSubmit(onSubmit)} $layout="vertical">
        <FormRow label="Title" error={errors.title?.message}>
          <Input
            defaultValue={title}
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Description">
          <TextArea
            rows={4}
            defaultValue={description}
            id="description"
            {...register("description", {
              required: false,
            })}
          />
        </FormRow>

        <FormRow label="Amount (AED)" error={errors.amount?.message}>
          <Input
            defaultValue={amount}
            id="amount"
            type="number"
            step=".01"
            {...register("amount", {
              min: {
                value: 1,
                message: "Amount must be 1 AED and above",
              },
              required: "This field is required",
              valueAsNumber: true,
            })}
          />
        </FormRow>
        <Block $align="right">
          <Button disabled={isEditing}>
            {isEditing ? "Editing..." : "Edit Expense"}
          </Button>
        </Block>
      </Form>
    </div>
  );
};

export default AddExpense;
