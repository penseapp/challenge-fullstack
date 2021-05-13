import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  input {
    font-size: 18px;
    border: 1px solid #8257e5;
    border-radius: 8px;
    color: #8257e5;
    width: 100%;
    padding: 12px 18px;

    & + input {
      margin-top: 10px;
    }
  }

  button {
    width: 100%;
    height: 50px;
    font-size: 20px;
    background-color: #8257e5;
    border-radius: 8px;
    color: #fff;
    margin-top: 20px;
  }
`;

export const Error = styled.span`
  color: #c53030;
  margin-top: 10px;
`;
