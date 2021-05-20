/* eslint-disable no-alert */
import { useEffect, useState, useCallback, useRef } from 'react';
import { api } from '../../services/api';
import Modal from '../Modal';
import { FormEditProduct, Error } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  imageUrl: string;
  category: string;
}

interface ModalEditProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  product: Product;
}

const ModalEditProduct = ({
  isOpen,
  setIsOpen,
  product,
}: ModalEditProductProps): JSX.Element => {
  const [productUpdated, setProductUpdated] = useState<Product>(product);
  const inputNameRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const inputPriceRef = useRef(null);
  const inputPromoPriceRef = useRef(null);
  const inputStatusFlagRef = useRef(null);
  const inputImageRef = useRef(null);
  const inputCategoryRef = useRef(null);
  const [editError, setEditError] = useState('');

  useEffect(() => {
    setProductUpdated({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      promoPrice: product.promoPrice,
      statusFlag: product.statusFlag,
      imageUrl: product.imageUrl,
      category: product.category,
    });
  }, [product]);

  const handleEditProduct = useCallback(async () => {
    try {
      await api.put(`/products/${productUpdated.id}`, {
        name: productUpdated.name,
        description: productUpdated.description,
        price: productUpdated.price,
        promoPrice: productUpdated.promoPrice,
        imageUrl: productUpdated.imageUrl,
        statusFlag: productUpdated.statusFlag,
      });

      alert('Produto atualizado com sucesso!');
      setIsOpen();
    } catch (err) {
      setEditError(err.message);
    }
  }, [setIsOpen, productUpdated]);

  const handleChange = useCallback(
    ref => {
      setProductUpdated({
        id: productUpdated.id,
        name:
          ref.current.name === 'name' ? ref.current.value : productUpdated.name,
        description:
          ref.current.name === 'description'
            ? ref.current.value
            : productUpdated.description,
        price:
          ref.current.name === 'price'
            ? ref.current.value
            : productUpdated.price,
        promoPrice:
          ref.current.name === 'promoPrice'
            ? (ref.current.value !== '' ? ref.current.value : null)
            : productUpdated.promoPrice,
        statusFlag:
          ref.current.nane === 'statusFlag'
            ? ref.current.value
            : productUpdated.statusFlag,
        imageUrl:
          ref.current.name === 'image'
            ? ref.current.value
            : productUpdated.imageUrl,
        category:
          ref.current.name === 'category'
            ? ref.current.value
            : productUpdated.category,
      });
    },
    [productUpdated],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormEditProduct>
        <h2>Editar produto</h2>
        <div>
          Nome{' '}
          <input
            type="text"
            name="name"
            ref={inputNameRef}
            value={productUpdated.name}
            onChange={() => handleChange(inputNameRef)}
          />
        </div>
        <div>
          Descrição{' '}
          <input
            type="text"
            name="description"
            ref={inputDescriptionRef}
            value={productUpdated.description}
            onChange={() => handleChange(inputDescriptionRef)}
          />
        </div>
        <div>
          Preço{' '}
          <input
            type="text"
            name="price"
            ref={inputPriceRef}
            value={productUpdated.price}
            onChange={() => handleChange(inputPriceRef)}
          />
        </div>
        <div>
          Preço Promocional{' '}
          <input
            type="text"
            name="promoPrice"
            ref={inputPromoPriceRef}
            value={productUpdated.promoPrice ? productUpdated.promoPrice : ''}
            onChange={() => handleChange(inputPromoPriceRef)}
          />
        </div>
        <div>
          Status
          <select
            ref={inputStatusFlagRef}
            name="statusFlag"
            onChange={() => handleChange(inputStatusFlagRef)}
            value={productUpdated.statusFlag === 'Ativo' ? 0 : 1}
          >
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>
        <div>
          Imagem
          <input
            type="text"
            name="image"
            ref={inputImageRef}
            value={productUpdated.imageUrl}
            onChange={() => handleChange(inputImageRef)}
          />
        </div>
        <div>
          Categoria{' '}
          <input
            type="text"
            name="category"
            ref={inputCategoryRef}
            value={productUpdated.category}
            onChange={() => handleChange(inputCategoryRef)}
          />
        </div>
        <button type="button" onClick={() => handleEditProduct()}>
          Salvar
        </button>
      </FormEditProduct>
      {editError && <Error>{editError}</Error>}
    </Modal>
  );
};

export default ModalEditProduct;
