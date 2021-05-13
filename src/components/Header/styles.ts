import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  border-bottom: 1px solid #8257e5;
  display: flex;
  align-items: center;
  background: #8257e53d;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 700;
  }
`;

export const Menu = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    color: inherit;
    font-size: 20px;
    font-weight: 600;
  }
`;
