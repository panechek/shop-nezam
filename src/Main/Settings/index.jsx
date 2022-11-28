import React from "react";
import { Container } from "react-bootstrap";

import './Settings.scss';

const Settings = () => {
    return (
        <section id="settings">
        <article className="bg-primary">
          <Container className="info">
            <h2 className="section__title text-white">наши преимущества</h2>
            <div className="info__list">
              <div className="info__item">
                <div className="info__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-buildings-fill"
                    viewBox="0 0 16 16">
                    <path
                      d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z" />
                  </svg>
                </div>
                <p className="info__text">
                  Продукция, которую мы реализуем, производится в полном соотвествии с ТУ
                </p>
              </div>
              <div className="info__item">
                <div className="info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
</svg>
                </div>
                <p className="info__text">
                  Каждая партия комплектуется всеми необходимыми документами
                </p>
              </div>
              <div className="info__item">
                <div className="info__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="grey" className="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
</svg>
                </div>
                <p className="info__text">
                  Каждая партия продукции измеряется спиртометром, показания предоставляются покупателю в случае необходимости
                </p>
              </div>
              </div>
              </Container>
        </article>
        <article>
          <Container className="info">
            <h2 className="section__title">условия работы</h2>
            <div className="info__list">
              <div className="info__item">
                <div className="info__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#0d6efd"
                    className="bi bi-cart-check-fill" viewBox="0 0 16 16">
                    <path
                      d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                </div>
                <p className="info__text text-secondary">
                  Заказ можно оформить на сайте через "Форму заказа", по телефону или по почте
                </p>
              </div>
              <div className="info__item">
                <div className="info__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#0d6efd" className="bi bi-truck"
                    viewBox="0 0 16 16">
                    <path
                      d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
                <p className="info__text  text-secondary">
                  Доставка по Москве осуществляется бесплатно. Доставка по Московской области обсуждается индивидуально. Ближайшая дата доставки согласовывается с менеджером
                </p>
              </div>
              <div className="info__item">
                <div className="info__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#0d6efd"
                    className="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path
                      d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
                <p className="info__text text-secondary">
                  Оплата производится безналичным расчетом, банковской картой или наличными курьеру
                </p>
              </div>
              </div>
              </Container>
        </article>
      </section>
    )
};

export default Settings;
