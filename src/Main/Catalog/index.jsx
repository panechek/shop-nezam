
import { Container } from 'react-bootstrap';
import products from '../../assets/products.js'

import './Catalog.scss';

const Catalog = ({handleAdd, handleDelete, countProducts}) => {
    return (
      <section id="catalog">
        <Container>
          <h2 className="section__title">Каталог</h2>
          <div className="catalog" >
          {products.map(prod => (
              <div className="card" key={prod.id}>
              <img src={prod.img} className="card-img-top card_img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">от {prod.price1} ₽</p>
                {countProducts.indexOf(prod.id) >= 0 ? 
                <div>
                <button className="btn btn-success">Добавлено в заказ</button>
                <button onClick={() => handleDelete(prod.id)} className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle deleteProd" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
                </div>
                 : <button onClick={() => handleAdd(prod.id)} className="btn btn-primary btn-buy">Купить</button>}
              </div>
            </div>
          ))}
          </div>
        </Container>
      </section>
    )
};

 export default Catalog;