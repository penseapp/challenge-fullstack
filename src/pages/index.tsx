import { GetStaticProps } from 'next';
import Head from 'next/head'
import Header from '../components/Header';
import Product from '../components/Product';
import { api } from '../services/api';

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

export default function Home({ products }: HomeProps)  {
  return (
    <>
      <Head>
        <title>Listagem de produtos | PenseApp</title>
      </Head>
      <main>
        <Header />
        <GridContainer>
          <h2>Cadastro de produtos</h2>
          <GridItem>
            {products.map(product => {
              return (
                <Product product={product} />
              );
            })}
          </GridItem>
        </GridContainer>
      </main>
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
    }
  });

  return {
    props: {
      products
    }
  }
}
