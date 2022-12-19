import { useState } from 'react';

import Banner from './Banner';
import Catalog from './Catalog';
import Prices from './Price';
import Form from './Form';
import Settings from './Settings';
import Bigcan from './Bigcan';

import './Main.scss';

const Main = ({ discount }) => {
    const [countProducts, setCountProducts] = useState([]);
    const handleAdd = (id) => setCountProducts([...countProducts, id]);

    const handleDelete = (id) => {
        const newCountProduct = countProducts.filter(item => item !== id);
        setCountProducts(newCountProduct);
    }

    return (
        <div className='main'>
            <Banner />
            <Prices />
            <Catalog
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                countProducts={countProducts}
            />
            <Settings title="Наши преимущества" type="benefits" />
            <Form
                handleDelete={handleDelete}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                discount={discount}
            />
            <Settings title="Условия работы" type="settings" />
            <Bigcan />
        </div>
    )
};

export default Main;
