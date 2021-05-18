import styled from 'styled-components';

export const GridItem = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 50px;
`;

export const GridContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 1160px) {
    width: 800px;
  }
`;

export const ListSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 1px solid #8257e5;
    border-radius: 5px;
    color: #8257e5;
    width: 80px;
    height: 25px;
    margin-left: 10px;
  }

  .active {
    background: #8257e5;
    color: #fff;
  }

  > div {
    @media (max-width: 1160px) {
      width: 44%;

      input {
        & + input {
          margin-top: 10px;
        }
      }
    }

    input {
      margin-left: 10px;
      margin-right: 10px;
      border: 1px solid #8257e5;
      border-radius: 5px;
      height: 30px;
      padding-left: 10px;
      color: #8257e5;
    }

    > div {
      justify-content: flex-end;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
  }
`;
