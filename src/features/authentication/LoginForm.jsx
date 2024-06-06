import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLoginForm = styled.div`
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
`;

const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const LoginForm = () => {
  const { isLoading, signIn } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (account) => {
    signIn(
      {
        email: account.email,
        password: account.password,
      },
      {
        onError: () => reset(),
      }
    );
  };
  return (
    <StyledLoginForm>
      <H2>Login</H2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="email" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Password" error={errors.password?.message}>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <Button disabled={isLoading}>
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </Form>
    </StyledLoginForm>
  );
};

export default LoginForm;
