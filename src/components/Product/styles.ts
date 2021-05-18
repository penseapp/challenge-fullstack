import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #8257e9;
  border-radius: 10px;
  position: relative;
  height: 300px;
  text-align: center;

  header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #8257e5;
    color: #fff;
  }

  section:first-child {
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > div {
      width: 100%;
      height: 150px;
      display: flex;
      justify-content: center;
      padding: 10px;

      img {
        width: 100px;
      }
    }
  }

  section {
    padding: 10px;

    p {
      font-size: 14px;
    }

    & + section {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 0;
      padding: 0;

      > div {
        display: flex;
        width: 100%;

        button {
          width: 100%;
          height: 100%;
          background: transparent;
          border: 0;
          background: #8257e5;
          color: #fff;
          transition: background 0.2s;

          &:first-child {
            border-bottom-left-radius: 10px;
          }

          &:last-child {
            border-bottom-right-radius: 10px;
          }

          &:hover {
            background: rgba(130, 87, 229, 0.8);
          }
        }
      }

      > div:first-child {
        border-bottom-left-radius: 10px;
      }

      > div:last-child {
        border-bottom-right-radius: 10px;
      }
    }
  }
`;

export default Container;
