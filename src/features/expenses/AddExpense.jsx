import { useForm } from "react-hook-form";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import useAddExpense from "./useAddExpense";
import TextArea from "../../ui/TextArea";
import Block from "../../ui/Block";

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const AddExpense = ({ onCloseModal }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { id } = useParams();

  const { isLoading, addExpense } = useAddExpense();
  const onSubmit = (data) => {
    addExpense(
      { ...data, recordId: id },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  };
  return (
    <div>
      <H2>Add New Expense</H2>
      <Form onSubmit={handleSubmit(onSubmit)} $layout="vertical">
        <FormRow label="Title" error={errors.title?.message}>
          <Input
            id="title"
            {...register("title", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Description">
          <TextArea
            rows={4}
            id="description"
            {...register("description", {
              required: false,
            })}
          />
        </FormRow>

        <FormRow label="Amount (AED)" error={errors.amount?.message}>
          <Input
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
          <Button disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Expense"}
          </Button>
        </Block>
      </Form>
    </div>
  );
};

export default AddExpense;
