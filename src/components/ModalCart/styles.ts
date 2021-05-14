import styled from 'styled-components';

export const ProductsList = styled.ul`
  list-style: none;
  margin-bottom: 50px;
`;

export const ProductItem = styled.li`
  border: 1px solid #8257e5;
  background: #8257e53d;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div + div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 120px;

    button {
      width: 25px;
      height: 25px;
      background: #8257e5;
      color: #fff;
      border: 0;
      border-radius: 5px;
    }
  }
`;

export const TotalPrice = styled.h1`
  width: 500px;
  height: 50px;
  background: #8257e5;
  color: #fff;
  position: absolute;
  bottom: -70px;
  left: -20px;
  text-align: center;
  padding-top: 6px;
`;

export const EmptyCartMessage = styled.h2``;

export const Container = styled.div`
  position: relative;
`;
