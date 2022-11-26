import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from '../../assets/banner1.jpg';
import img2 from '../../assets/banner2.jpg';
import img3 from '../../assets/banner3.png';

import './Banner.scss';

const Banner = () => {
    return (
      <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100 opacity-50 banner__img"
            src={img1}
            alt="First slide"
            />
            <Carousel.Caption className="text-dark">
            <h3>Бесплатная доставка</h3>
            <p>Незамерзайка оптом с доставкой по Москве от 50 шт.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100 opacity-50 banner__img"
            src={img2}
            alt="Second slide"
            />

            <Carousel.Caption className="text-dark">
            <h3>Продукт на любой вкус</h3>
            <p>Широкий ассортимент качественной продукции напрямую от производителя</p>
            </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item>
            <img
            className="d-block w-100 opacity-50 banner__img"
            src={img3}
            alt="Third slide"
            />

            <Carousel.Caption className="text-dark">
            <h3>Прогрессивная шкала скидок</h3>
            <p>
            Приглашаем к сотрудничеству магазины, автосервисы, автоклубы
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
};

export default Banner;
