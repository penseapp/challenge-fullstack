import Link from 'next/link';
import { useCallback } from 'react';
import { Container, Content, Logo, Menu } from './styles';

interface HeaderProps {
  openModalLogin: () => void;
  openModalCart: () => void;
  openModalAddProduct: () => void;
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
  openModalAddProduct,
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
          <Link href="/">
            <a><h1>Pense App</h1></a>
          </Link>          
        </Logo>
        <Menu>
          {openModalCart ? (
            <button type="button" onClick={openModalCart}>
              Meu carrinho {total > 0 && `(${total})`}
            </button>
          ) : (
            <button type="button" onClick={openModalAddProduct}>
              Adicionar produto
            </button>
          )}
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
