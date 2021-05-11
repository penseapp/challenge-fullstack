import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #8257e9;
  border-radius: 20px;
  position: relative;
  height: 150px;
  text-align: center;

  header {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #8257e5;
    color: #fff;
    margin-bottom: 10px;
  }

  section {
    & + section {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 0;

      >div {
        background: #8257e5;
        width: 50%;

        button {
          background: transparent;
          border: 0;
          color: #fff;
          margin-top: 5px;
        }
      }

      >div:first-child {
        border-bottom-left-radius: 20px;
      }

      >div:last-child {
        border-bottom-right-radius: 20px;
      }
    }
  }
`;
