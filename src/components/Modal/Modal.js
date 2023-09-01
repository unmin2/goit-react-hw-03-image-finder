import React from 'react';
import { Overlay, ModalWrapper } from './Modal.styled';
const Modal = ({ onClose, imageURL }) => (
  <div className={Overlay} onClick={onClose}>
    <div className={ModalWrapper}>
      <img src={imageURL} alt="" />
    </div>
  </div>
);

export default Modal;
