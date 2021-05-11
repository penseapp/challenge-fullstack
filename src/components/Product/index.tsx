import { Container } from './styles';
import { FiEdit3, FiTrash } from 'react-icons/fi';

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
}

const Product = ({ product }: ProductProps) => {
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
          <button type="button">
            Editar
          </button>
        </div>
        <div>
          <button type="button">
            Excluir
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Product;
