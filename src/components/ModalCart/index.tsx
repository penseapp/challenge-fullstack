import Modal from '../Modal';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  category: string;
  quantity: number;
}

interface ModalCartProps {
  isOpen: boolean;
  setIsOpen: () => void;
  products: Product[];
}

const ModalCart = ({
  isOpen,
  setIsOpen,
  products,
}: ModalCartProps): JSX.Element => {
  const totalPrice = products.reduce((total, item) => {
    const price = item.promoPrice ? item.promoPrice : item.price;
    return total + item.quantity * price;
  }, 0);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>
              Subtotal: R${' '}
              {(product.promoPrice ? product.promoPrice : product.price) *
                product.quantity}
            </p>
            <p>Quantidade: {product.quantity}</p>
          </li>
        ))}
      </ul>
      <h1>Total: R$ {totalPrice}</h1>
    </Modal>
  );
};

export default ModalCart;
