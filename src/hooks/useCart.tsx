/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';

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

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  totalItensInCart: number;
  increment: (item: Product) => void;
  decrement: (item: Product) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContext | null>(null);

export default function CartProvider({
  children,
}: CartProviderProps): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('@penseapp:cart');

    if (data) {
      setProducts(JSON.parse(data));
    }
  }, []);

  const addToCart = useCallback(
    product => {
      const productIndex = products.findIndex(item => item.id === product.id);

      if (product.statusFlag === 'Ativo') {
        if (productIndex >= 0) {
          const productsList = products;
          productsList[productIndex].quantity += 1;
          setProducts([...productsList]);

          localStorage.setItem(
            '@penseapp:cart',
            JSON.stringify([...productsList]),
          );
        } else {
          const newProduct: Product = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            promoPrice: product.promoPrice,
            statusFlag: product.statusFlag,
            imageUrl: product.imageUrl,
            category: product.category,
            quantity: 1,
          };

          setProducts([...products, newProduct]);

          localStorage.setItem(
            '@penseapp:cart',
            JSON.stringify([...products, newProduct]),
          );
        }
      } else {
        throw new Error('Produto indisponível no estoque');
      }
    },
    [products],
  );

  const increment = useCallback(
    product => {
      const productsList = products;

      const index = products.findIndex(item => item.id === product.id);
      productsList[index].quantity += 1;

      setProducts([...productsList]);

      localStorage.setItem('@penseapp:cart', JSON.stringify([...productsList]));
    },
    [products],
  );

  const decrement = useCallback(
    product => {
      const productsList = products;

      const index = products.findIndex(item => item.id === product.id);

      if (productsList[index].quantity > 1) {
        productsList[index].quantity -= 1;

        setProducts([...productsList]);
      } else {
        const response = confirm('Remover o produto do carrinho?');

        if (response) {
          productsList.splice(index, 1);

          setProducts([...productsList]);
        }
      }

      localStorage.setItem('@penseapp:cart', JSON.stringify([...products]));
    },
    [products],
  );

  const totalItensInCart = products.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const value = useMemo(
    () => ({
      addToCart,
      products,
      totalItensInCart,
      increment,
      decrement,
    }),
    [addToCart, products, totalItensInCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export { CartProvider, useCart };
