import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useCallback, useState, useEffect, useRef } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import Header from '../components/Header';
import Product from '../components/Product';
import ModalLogin from '../components/ModalLogin';
import ModalCart from '../components/ModalCart';
import { api } from '../services/api';
import { useCart } from '../hooks/useCart';

import { GridItem, GridContainer, ListSettings } from './styles';

interface ProductFields {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  imageUrl: string;
  category: string;
}

interface HomeProps {
  staticProducts: ProductFields[];
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

export default function Home({ staticProducts }: HomeProps): JSX.Element {
  const [products, setProducts] = useState<ProductFields[]>(staticProducts);
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalCartOpen, setModalCartOpen] = useState(false);
  const [user, setUser] = useState<UserData>({} as UserData);
  const [order, setOrder] = useState({ type: 'name', orderDir: 'asc' });
  const [filter, setFilter] = useState('');
  const [promoFilter, setPromoFilter] = useState(false);
  const [inputError, setInputError] = useState('');
  const btnNameRef = useRef(null);
  const btnPriceRef = useRef(null);
  const filterInputRef = useRef(null);
  const filterPromoRef = useRef(null);

  const {
    products: productsInCart,
    addToCart,
    totalItensInCart,
    increment,
    decrement,
  } = useCart();

  useEffect(() => {
    async function filterProducts() {
      let response;

      if (filterPromoRef.current.checked) {
        response = await api.get(
          `/products/${order.type}_${order.orderDir}/promo`,
        );
      } else if (filter !== '') {
        response = await api.get(
          `/products/${order.type}_${order.orderDir}/name=${filter}`,
        );
      } else {
        response = await api.get(`/products/${order.type}_${order.orderDir}`);
      }

      setProducts([...response.data]);
    }

    const userCredentials = localStorage.getItem('@penseapp:login');

    if (userCredentials) {
      setUser(JSON.parse(userCredentials));
    }
    filterProducts();
  }, [productsInCart, filter, order, filterPromoRef.current?.checked]);

  const toggleModal = useCallback(() => {
    setModalLoginOpen(!modalLoginOpen);
  }, [modalLoginOpen]);

  const toggleModalCart = useCallback(() => {
    setModalCartOpen(!modalCartOpen);
  }, [modalCartOpen]);

  const handleSignIn = useCallback(
    async (loginCredentials: LoginCredentialsData) => {
      if (loginCredentials.email === '' || loginCredentials.password === '') {
        setInputError('Os dois campos são obrigatórios!');
      } else {
        const response = await api.post('/sessions', {
          email: loginCredentials.email,
          password: loginCredentials.password,
        });

        localStorage.setItem('@penseapp:login', JSON.stringify(response.data));

        if (response.data.error) {
          setInputError(response.data.error);
        } else {
          setInputError('');

          setUser(response.data);

          toggleModal();
        }
      }
    },
    [toggleModal],
  );

  const handleSignOut = useCallback(() => {
    setUser(null);

    localStorage.removeItem('@penseapp:login');
  }, []);

  const handleChangeOrder = useCallback(
    async element => {
      element.current.setAttribute('class', 'active');
      let response;
      if (element.current.name === 'btnName') {
        btnPriceRef.current.removeAttribute('class');

        if (order.orderDir === 'desc') {
          response = await api.get('/products/name_desc');
          setOrder({ type: 'name', orderDir: 'asc' });
        } else {
          response = await api.get('/products/name_asc');
          setOrder({ type: 'name', orderDir: 'desc' });
        }
      } else {
        btnNameRef.current.removeAttribute('class');

        if (order.orderDir === 'desc') {
          response = await api.get('/products/price_desc');
          setOrder({ type: 'price', orderDir: 'asc' });
        } else {
          response = await api.get('/products/price_asc');
          setOrder({ type: 'price', orderDir: 'desc' });
        }
      }
      setProducts([...response.data]);
    },
    [order],
  );

  const handleFilter = useCallback(
    text => {
      if (text.current.type === 'text') {
        setFilter(text.current.value);
      } else {
        filterInputRef.current.hidden = filterPromoRef.current?.checked;
        setPromoFilter(!promoFilter);
      }
    },
    [promoFilter],
  );

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
        openModalAddProduct={null}
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
        increment={increment}
        decrement={decrement}
      />
      <GridContainer>
        <ListSettings>
          <h2>Cadastro de produtos</h2>
          <div>
            <div>
              Ordenar por
              <button
                type="button"
                ref={btnNameRef}
                name="btnName"
                onClick={() => handleChangeOrder(btnNameRef)}
                className="active"
              >
                Nome{' '}
                {order.orderDir === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </button>
              <button
                type="button"
                ref={btnPriceRef}
                name="btnPrice"
                onClick={() => handleChangeOrder(btnPriceRef)}
              >
                Preço{' '}
                {order.orderDir === 'asc' ? <FiArrowUp /> : <FiArrowDown />}
              </button>
            </div>
            <div>
              <input
                type="text"
                ref={filterInputRef}
                onChange={() => handleFilter(filterInputRef)}
                placeholder="Filtrar por"
              />
              <input
                type="checkbox"
                ref={filterPromoRef}
                onChange={() => handleFilter(filterPromoRef)}
              />{' '}
              Preço promocional
            </div>
          </div>
        </ListSettings>
        <GridItem>
          {products.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
                edit={null}
                remove={null}
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
      imageUrl: item.imageUrl,
      category: item.category,
    };
  });

  return {
    props: {
      staticProducts: products,
    },
  };
};
