import { useCallback } from 'react';
import { Container, Content, Logo, Menu } from './styles';

interface HeaderProps {
  openModalLogin: () => void;
  openModalCart: () => void;
  user: User;
  signOut: () => void;
  total: number;
}

interface User {
  name: string;
  email: string;
  password: string;
}

const Header = ({
  openModalLogin,
  openModalCart,
  user,
  signOut,
  total,
}: HeaderProps): JSX.Element => {
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('@penseapp:login');

    signOut();
  }, [signOut]);

  return (
    <Container>
      <Content>
        <Logo>
          <h1>Pense App</h1>
        </Logo>
        <Menu>
          <button type="button" onClick={openModalCart}>
            Meu carrinho {total > 0 && `(${total})`}
          </button>
          {user ? (
            <>
              <span>Bem vindo, {user.name}!</span>
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </>
          ) : (
            <button type="button" onClick={openModalLogin}>
              {user ? `Bem vindo, ${user.name}!` : 'Login'}
            </button>
          )}
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
