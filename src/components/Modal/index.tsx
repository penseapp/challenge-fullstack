import { ReactNode, useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          color: '#8257e5',
          borderRadius: '10px',
          width: '500px',
          border: '1px solid #8257e5',
        },
        overlay: {
          backgroundColor: 'rgba(130, 87, 229, 0.248)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
