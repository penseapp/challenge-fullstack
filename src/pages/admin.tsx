/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useState, useRef, useCallback, useEffect } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { api } from '../services/api';
import Header from '../components/Header';
import ModalLogin from '../components/ModalLogin';
import ModalAddProduct from '../components/ModalAddProduct';
import Product from '../components/Product';

import { GridItem, GridContainer, ListSettings } from './styles';
import ModalEditProduct from '../components/ModalEditProduct';

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

interface AdminProps {
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

export default function Admin({ staticProducts }: AdminProps): JSX.Element {
  const [products, setProducts] = useState<ProductFields[]>(staticProducts);
  const [productEdit, setProductEdit] = useState<ProductFields | null>(
    {} as ProductFields,
  );
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [user, setUser] = useState<UserData>({} as UserData);
  const [order, setOrder] = useState({ type: 'name', orderDir: 'asc' });
  const [filter, setFilter] = useState('');
  const [promoFilter, setPromoFilter] = useState(false);
  const [inputError, setInputError] = useState('');
  const btnNameRef = useRef(null);
  const btnPriceRef = useRef(null);
  const filterInputRef = useRef(null);
  const filterPromoRef = useRef(null);

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
  }, [products, filter, order, filterPromoRef.current?.checked]);

  const toggleModal = useCallback(() => {
    setModalLoginOpen(!modalLoginOpen);
  }, [modalLoginOpen]);

  const toggleEditModal = useCallback(() => {
    setModalEditOpen(!modalEditOpen);
  }, [modalEditOpen]);

  const toggleAddModal = useCallback(() => {
    setModalAddOpen(!modalAddOpen);
  }, [modalAddOpen]);

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

  const handleEdit = useCallback(
    product => {
      setProductEdit(product);
      toggleEditModal();
    },
    [toggleEditModal],
  );

  const handleDelete = useCallback(async product => {
    try {
      const confirmation = confirm('Deseja excluir o produto?');

      if (confirmation) {
        await api.delete(`products/${product.id}`);

        alert('Produto excluído com sucesso!');
      }
    } catch (err) {
      setInputError(err);
    }
  }, []);

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
        <title>Gerenciamento de produtos | PenseApp</title>
      </Head>
      <Header
        user={user?.user}
        signOut={handleSignOut}
        openModalLogin={toggleModal}
        openModalCart={null}
        openModalAddProduct={toggleAddModal}
        total={null}
      />
      <ModalLogin
        isOpen={modalLoginOpen}
        setIsOpen={toggleModal}
        signIn={handleSignIn}
        error={inputError}
      />
      <ModalEditProduct
        isOpen={modalEditOpen}
        setIsOpen={toggleEditModal}
        product={productEdit}
      />
      <ModalAddProduct isOpen={modalAddOpen} setIsOpen={toggleAddModal} />
      <GridContainer>
        <ListSettings>
          <h2>Gerenciamento de produtos</h2>
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
                addToCart={null}
                edit={() => handleEdit(product)}
                remove={() => handleDelete(product)}
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
      staticProducts: products,
    },
  };
};
