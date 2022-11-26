import Banner from './Banner';
import Catalog from './Catalog';
import Prices from './Price';
import Form from './Form';
import Settings from './Settings';
import Bigcan from './Bigcan';

import './Main.scss';

const Main = () => {
    return (
        <div className='main'>
            <Banner />
            <Catalog />
            <Prices />
            <Form />
            <Settings />
            <Bigcan />
        </div>
    )
};

export default Main;
