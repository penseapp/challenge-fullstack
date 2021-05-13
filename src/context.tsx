import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

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

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  totalItensInCart: number;
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
    console.log(products);
  }, [products]);

  const addToCart = useCallback(
    product => {
      const productIndex = products.findIndex(item => item.id === product.id);

      if (product.statusFlag === 'Ativo') {
        if (productIndex >= 0) {
          const productsList = products;
          productsList[productIndex].quantity += 1;
          setProducts([...productsList]);
        } else {
          const newProduct: Product = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            promoPrice: product.promoPrice,
            statusFlag: product.statusFlag,
            category: product.category,
            quantity: 1,
          };

          setProducts([...products, newProduct]);
        }
      } else {
        throw new Error('Produto indisponível no estoque');
      }
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
    }),
    [addToCart, products, totalItensInCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
