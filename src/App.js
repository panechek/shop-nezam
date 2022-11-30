import React from 'react';
import './App.scss';
import products from './assets/products.js';

import Header from './Header/index.jsx';
import Main from './Main';
import Footer from './Footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main products={products}/>
      <Footer />
    </div>
  );
}

export default App;
