import React from 'react';

import './Modal.scss';

 const Modal = ({onCloseModal, addDiscont, discount}) =>  {
  return (
    <div className='modals'>
        <div>
        <button onClick={onCloseModal} className="modals__close" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-circle deleteProd" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg></button>
        <h3 className='text-white text-uppercase modals__title'>скидка 10% на первый заказ</h3>
        <p className='modals__button text-uppercase' onClick={addDiscont} >{discount === '' ? "получить скидку" : "скидка применена"}</p>
        </div>
    </div>
  )
}
export default Modal;
