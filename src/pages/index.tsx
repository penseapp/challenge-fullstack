import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useCallback, useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Product from '../components/Product';
import ModalLogin from '../components/ModalLogin';
import ModalCart from '../components/ModalCart';
import { api } from '../services/api';
import { CartContext } from '../context';

import { GridItem, GridContainer } from './styles';

interface ProductFields {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  category: string;
}

interface HomeProps {
  products: ProductFields[];
}

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserData {
  user: User;
  token: string;
}

interface LoginCredentialsData {
  email: string;
  password: string;
}

export default function Home({ products }: HomeProps): JSX.Element {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [user, setUser] = useState<UserData>({} as UserData);
  const [inputError, setInputError] = useState('');

  const {
    products: productsInCart,
    addToCart,
    totalItensInCart,
  } = useContext(CartContext);

  useEffect(() => {
    const userCredentials = localStorage.getItem('@penseapp:login');

    if (userCredentials) {
      setUser(JSON.parse(userCredentials));
    }
  }, [productsInCart]);

  const toggleModal = useCallback(() => {
    setModalLoginOpen(!modalLoginOpen);
  }, [modalLoginOpen]);

  const toggleModalCart = useCallback(() => {
    setModalCartOpen(!modalCartOpen);
  }, [modalCartOpen]);

  const handleSignIn = useCallback(
    async (loginCredentials: LoginCredentialsData) => {
      try {
        const response = await api.post('/sessions', {
          email: loginCredentials.email,
          password: loginCredentials.password,
        });

        localStorage.setItem('@penseapp:login', JSON.stringify(response.data));

        if (response.data.error) {
          setInputError(response.data.error);
        } else {
          setInputError('');
        }

        setUser(response.data);
      } catch (err) {
        console.log(err.message);
      }
    },
    [],
  );

  const handleSignOut = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <>
      <Head>
        <title>Listagem de produtos | PenseApp</title>
      </Head>
      <Header
        user={user?.user}
        signOut={handleSignOut}
        openModalLogin={toggleModal}
        openModalCart={toggleModalCart}
        total={totalItensInCart}
      />
      <ModalLogin
        isOpen={modalLoginOpen}
        setIsOpen={toggleModal}
        signIn={handleSignIn}
        error={inputError}
      />
      <ModalCart
        isOpen={modalCartOpen}
        setIsOpen={toggleModalCart}
        products={productsInCart}
      />
      <GridContainer>
        <h2>Cadastro de produtos</h2>
        <GridItem>
          {products.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </GridItem>
      </GridContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/products/name_asc');

  const products = data.map(item => {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      promoPrice: item.promoPrice,
      statusFlag: item.statusFlag,
      category: item.category,
    };
  });

  return {
    props: {
      products,
    },
  };
};
