import styled from 'styled-components';

export const ProductsList = styled.ul`
  list-style: none;
  margin-bottom: 50px;
  margin-right: 10px;
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

  div:first-child {
    > div {
      display: flex;
      margin-bottom: 25px;
      align-items: center;
      justify-content: space-between;
      height: 150px;

      p {
        margin-left: 20px;
        width: 250px;
      }

      img {
        width: 100px;
        max-height: 150px;
      }
    }

    div + p {
      font-weight: 600;
    }
  }

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
  width: 600px;
  height: 50px;
  background: #8257e5;
  color: #fff;
  position: absolute;
  bottom: 0px;
  left: -1px;
  text-align: center;
  padding-top: 6px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const EmptyCartMessage = styled.h2``;

export const Container = styled.div`
  position: relative;
  overflow-y: scroll;
  width: 570px;
  height: auto;
  max-height: 500px;
  margin-bottom: 35px;
`;
