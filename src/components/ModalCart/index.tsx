import Modal from '../Modal';
import {
  ProductsList,
  ProductItem,
  TotalPrice,
  EmptyCartMessage,
  Container,
} from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  imageUrl: string;
  category: string;
  quantity: number;
}

interface ModalCartProps {
  isOpen: boolean;
  setIsOpen: () => void;
  products: Product[];
  increment: (item: Product) => void;
  decrement: (item: Product) => void;
}

const ModalCart = ({
  isOpen,
  setIsOpen,
  products,
  increment,
  decrement,
}: ModalCartProps): JSX.Element => {
  const totalPrice = products.reduce((total, item) => {
    const price = item.promoPrice ? item.promoPrice : item.price;
    return total + item.quantity * price;
  }, 0);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      {products.length > 0 ? (
        <>
          <Container>
            <ProductsList>
              {products.map(product => (
                <ProductItem key={product.id}>
                  <div>
                    <div>
                      <img src={product.imageUrl} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                    <p>
                      Subtotal:{` `}
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(
                        (product.promoPrice
                          ? product.promoPrice
                          : product.price) * product.quantity,
                      )}
                    </p>
                  </div>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button type="button" onClick={() => increment(product)}>
                      +
                    </button>
                  </div>
                </ProductItem>
              ))}
            </ProductsList>
          </Container>
          <TotalPrice>
            Total:{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalPrice)}
          </TotalPrice>
        </>
      ) : (
        <EmptyCartMessage>Ainda não há produtos no carrinho!</EmptyCartMessage>
      )}
    </Modal>
  );
};

export default ModalCart;
