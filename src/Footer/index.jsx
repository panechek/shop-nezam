import React from 'react';
import { Container } from 'react-bootstrap';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
    <Container id="contacts">
      <h2 className="section__title text-white">контакты</h2>
      <ul className="footer_flex">
        <li>
          <a href="tel:+79166413149" className="text-white">+7-989-596-94-56</a>
        </li>
        <li>
          <a href="mailto:info@незамерзайка.москва" className="text-white">info@незамерзайка.москва</a>
        </li>
        <li>
          <a href="https://yandex.ru/maps/213/moscow/house/kronshtadtskiy_bulvar_35b/Z04YcwdkTkQAQFtvfXR1dnpiYA==/?ll=37.504717%2C55.847614&z=17" className="text-white">Кронштадтский бульвар, 35Б</a>
        </li>
      </ul>
    </Container>
  </footer>
    )
};

export default Footer;
