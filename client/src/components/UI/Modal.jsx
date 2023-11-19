import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  min-width: 40vh;
  max-width: 60vw;
  min-height: 30vh;
  max-height: 80vh;
  overflow-y: auto; 
  background: #fff;
  border-radius: 30px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
`;

const Modal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;
