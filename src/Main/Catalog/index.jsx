
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
                {countProducts.includes(prod.id) ? 
                <button className="btn btn-success btn-buy">Добавлено в заказ</button>
                 : <button onClick={() => handleAdd(prod.id)} className="btn btn-primary btn-buy">Купить сейчас</button>}
              </div>
            </div>
          ))}
          </div>
        </Container>
      </section>
    )
};

 export default Catalog;