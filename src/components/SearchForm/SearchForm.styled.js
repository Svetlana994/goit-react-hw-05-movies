import styled from "@emotion/styled/macro";

export const Form = styled.form`
  margin-bottom: 30px;
`;

export const Input = styled.input`
  margin-right: 30px;
  width: 200px;
  height: 22px;
  padding: 9px 32px;

  font-size: 18px;
  border-radius: 4px;
  border: 1px solid rgba(117, 117, 117, 0.2);
  cursor: pointer;

  &:focus {
    border-color: #2196f3;
    outline: none;
  }

  &::placeholder {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 42px;

  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #2196f3;
  color: #ffffff;
  cursor: pointer;
`;
