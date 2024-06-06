import { useForm } from "react-hook-form";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Select from "../../ui/Select";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import useAddRecord from "./useAddRecord";
import FormColumn from "../../ui/FormColumn";
import Block from "../../ui/Block";
import styled from "styled-components";

const months = [
  { label: "January", value: "January" },
  { label: "February", value: "February" },
  { label: "March", value: "March" },
  { label: "April", value: "April" },
  { label: "May", value: "May" },
  { label: "June", value: "June" },
  { label: "July", value: "July" },
  { label: "August", value: "August" },
  { label: "September", value: "September" },
  { label: "October", value: "October" },
  { label: "November", value: "November" },
  { label: "December", value: "December" },
];

const years = [
  { label: 2024, value: 2024 },
  { label: 2025, value: 2025 },
];

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const AddRecord = ({ onCloseModal }) => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const { isLoading, addRecord } = useAddRecord();

  const currentMonth = new Date().getMonth();
  const currentMonthValue = months[currentMonth].value;

  const currentYear = new Date().getFullYear();

  const onSubmit = (data) => {
    addRecord(data, {
      onSuccess: () => {
        onCloseModal?.();
      },
    });
  };

  return (
    <div>
      <H2>Add New Expense</H2>
      <Form onSubmit={handleSubmit(onSubmit)} $layout="vertical">
        <FormColumn>
          <FormRow label="Month" error={errors.month?.message}>
            <Select
              defaultValue={currentMonthValue}
              id="month"
              options={months}
              register={{
                ...register("month", {
                  required: "This field is required",
                }),
              }}
            />
          </FormRow>

          <FormRow label="Year">
            <Select
              defaultValue={currentYear}
              id="year"
              options={years}
              register={{
                ...register("year", {
                  valueAsNumber: true,
                  required: "This field is required",
                }),
              }}
            />
          </FormRow>
        </FormColumn>

        <FormRow label="Budget (AED)" error={errors.budget?.message}>
          <Input
            type="number"
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
          <Button disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Record"}
          </Button>
        </Block>
      </Form>
    </div>
  );
};

export default AddRecord;
