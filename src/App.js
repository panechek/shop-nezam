import React from 'react';
import './App.scss';
import products from './assets/products.js';

import Header from './Header/index.jsx';
import Main from './Main';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  const [show, setShow] = React.useState(false);
  const [discount, setDiscount] = React.useState('');
  console.log(show)

  React.useEffect(
    () => {
      if (!localStorage.getItem("discount")) {
      let timer1 = setTimeout(() => setShow(true), 1000);
      return () => {
        clearTimeout(timer1);
      };
      }
    },
    []
  );

  const onCloseModal = () => {
    setShow(false);
  };

  const addDiscont = () => {
    setDiscount('Скидка 10%');
    localStorage.setItem('discount', "true");
    setTimeout(() => setShow(false), 5000);
  }

  return (
    <div className="App">
      {show && <Modal 
                  onCloseModal={onCloseModal}  
                  addDiscont={addDiscont} 
                  discount={discount}
                  />}
      <Header />
      <Main products={products} discount={discount} />
      <Footer />
    </div>
  );
}

export default App;
