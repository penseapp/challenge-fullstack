/* eslint-disable no-alert */
import { useRef, useCallback, useState } from 'react';
import { api } from '../../services/api';
import Modal from '../Modal';
import { FormAddProduct, Error } from './styles';

interface ModalAddProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAddProduct = ({
  isOpen,
  setIsOpen,
}: ModalAddProductProps): JSX.Element => {
  const [inputError, setInputError] = useState('');
  const inputNameRef = useRef(null);
  const inputDescriptionRef = useRef(null);
  const inputPriceRef = useRef(null);
  const inputPromoPriceRef = useRef(null);
  const inputImageUrlRef = useRef(null);
  const inputStatusFlagRef = useRef(null);
  const inputCategoryRef = useRef(null);

  const addProduct = useCallback(async () => {
    try {
      await api.post('products', {
        name: inputNameRef.current.value,
        description: inputDescriptionRef.current.value,
        price: inputPriceRef.current.value,
        promoPrice: inputPromoPriceRef.current.value ?? null,
        statusFlag: inputStatusFlagRef.current.value,
        imageUrl: inputImageUrlRef.current.value,
        category: inputCategoryRef.current.value,
      });

      alert('Produto adicionado com sucesso!');

      setIsOpen();
    } catch (err) {
      setInputError(err.message);
    }
  }, [setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <FormAddProduct>
        <h2>Adicionar Produto</h2>
        <div>
          <input ref={inputNameRef} type="text" placeholder="Nome" />
        </div>
        <div>
          <input
            ref={inputDescriptionRef}
            type="text"
            placeholder="Descrição"
          />
        </div>
        <div>
          <input ref={inputPriceRef} type="text" placeholder="Preço" />
        </div>
        <div>
          <input
            ref={inputPromoPriceRef}
            type="text"
            placeholder="Preço promocional"
          />
        </div>
        <div>
          <input ref={inputStatusFlagRef} type="text" placeholder="Status" />
        </div>
        <div>
          <input ref={inputImageUrlRef} type="text" placeholder="Imagem" />
        </div>
        <div>
          <input ref={inputCategoryRef} type="text" placeholder="Categoria" />
        </div>

        <button type="button" onClick={() => addProduct()}>
          Adicionar
        </button>
      </FormAddProduct>
      {inputError && <Error>{inputError}</Error>}
    </Modal>
  );
};

export default ModalAddProduct;
