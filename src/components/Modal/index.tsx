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
          width: '600px',
          border: '1px solid #8257e5',
          overflow: 'hidden',
          borderRadius: '10px',
        },
        overlay: {
          backgroundColor: 'rgba(130, 87, 229, 0.5)',
          animation: 'ease-out',
          animationDuration: '2000ms',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
