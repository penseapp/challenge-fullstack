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
`;

export const ListSettings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 1px solid #8257e5;
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
    text-align: right;

    input {
      margin-left: 10px;
    }

    > div {
      margin-bottom: 10px;
    }
  }
`;
