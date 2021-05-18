import styled from 'styled-components';

export const FormAddProduct = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    input {
      width: 100%;
      height: 40px;
      border: 1px solid #8257e5;
      border-radius: 5px;
      color: #8257e5;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 14px;
    }
  }

  button {
    height: 50px;
    background-color: #8257e5;
    color: #fff;
    border-radius: 5px;
    font-size: 25px;
  }
`;

export const Error = styled.span`
  color: #c53030;
`;
