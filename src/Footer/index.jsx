import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
    <div className="container" id="contacts">
      <h2 className="section__title text-white">контакты</h2>
      <ul className="footer_flex">
        <li>
          <a href="tel:+79166413149" className="text-white">8-916-641-31-49</a>
        </li>
        <li>
          <a href="mailto:info@mail.ru" className="text-white">info@незамерзайка.москва</a>
        </li>
        <li>
          <a href="https://yandex.ru/maps/213/moscow/house/kronshtadtskiy_bulvar_5a/Z04Ycg9mSEAPQFtvfXR1cHtjZA==/?indoorLevel=1&ll=37.486158%2C55.841700&z=17" className="text-white">Кронштадский бульвар, д.5</a>
        </li>
      </ul>
    </div>
  </footer>
    )
};

export default Footer;
