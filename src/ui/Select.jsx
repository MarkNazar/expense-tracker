import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid var(--color-blue-dark);
  border-radius: 8px;
  background-color: var(--color-white);

  &:focus {
    outline: none;
  }
`;

const Select = ({ options, defaultValue, register }) => {
  return (
    <StyledSelect defaultValue={defaultValue} {...register}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
