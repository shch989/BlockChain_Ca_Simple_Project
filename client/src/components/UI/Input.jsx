import React from 'react'
import styled from 'styled-components';

const InputWrapper = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputLabel = styled.span`
  margin-top: 15px;
  margin-bottom: 5px;
  display: block;
  font-weight: 500;
  text-align: center;
`;

const InputField = styled.input`
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.2s ease-in-out;
  display: block;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const SelectField = styled.select`
  width: 70%;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.2s ease-in-out;
  appearance: none;
  display: block;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Input = (props) => {
  const { label, type, value, onChange, required, children } = props;

  if (type === 'select') {
    return (
      <InputWrapper>
        <InputLabel>{label}:</InputLabel>
        <SelectField value={value} onChange={onChange} required={required}>
          {children}
        </SelectField>
      </InputWrapper>
    );
  }

  return (
    <InputWrapper>
      <InputLabel>{label}:</InputLabel>
      <InputField
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputWrapper>
  );
};

export default Input