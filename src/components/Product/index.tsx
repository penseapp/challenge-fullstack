import { Container } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  category: string;
}

interface ProductProps {
  product: Product;
  addToCart: (item: Product) => void;
}

const Product = ({ product, addToCart }: ProductProps): JSX.Element => {
  return (
    <Container>
      <header>
        <h2>{product.name}</h2>
      </header>
      <section>
        <p>{product.description}</p>
        <p>R$ {product.price}</p>
        <p>{product.category}</p>
      </section>
      <section>
        <div>
          <button type="button" onClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Product;
