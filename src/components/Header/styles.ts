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

  @media (max-width: 1160px) {
    width: 800px;
  }
`;

export const Logo = styled.div`
  a {
    text-decoration: none;
    color: #8257e5;
    transition: color 0.2s;

    &:hover {
      color: rgba(130, 87, 229, 0.8);
    }

    h1 {
      font-size: 48px;
      font-weight: 700;
    }
  }  
`;

export const Menu = styled.div`
  width: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1160px) {
    width: 300px;
  }

  span {
    margin-left: 30px;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    font-size: 20px;
    font-weight: 600;
    margin-left: 30px;

    transition: color 0.2s;

    &:hover {
      color: rgba(130, 87, 229, 0.8);
    }
  }
`;
