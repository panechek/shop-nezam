import React from "react";
import bigcan from '../../assets/bigCan.png';
import { Container } from "react-bootstrap";

import './Bigcan.scss';

const Bigcan = () => {
    return (
        <section>
        <Container>
          <div className="bigCan">
            <img src={bigcan} alt="" />
            <div>
        <p>Первые заморозки остро ставят перед водителями вопрос по качественной очистке лобового стекла. Для подобной процедуры необходимо выбрать стеклоомыватель или незамерзайку. Её разрабатывают специально для использования во время низких температур. Но некоторые компании недобросовестно относятся к созданию таких веществ, что может повлиять на работу системы очистки авто.</p>
  <p>
          Купить стеклоомыватель без запаха сложно, как и найти жидкость высокого качества без дополнительных вредных примесей. Большой выбор на рынке только усложняет поиск правильной омывайки. Выбирая продукцию следует обращать внимание на состав, в который входит вода, спирт, поверхностно-активные вещества и отдушки. Он должен быть указан обязательно, как и проведена проверка на безопасность, подтверждённая сертификатами.
          </p>
          <p>
          Наша компания предлагает стеклоомыватель без запаха с доставкой. Высокое качество продукции обусловлено тщательно подобранным составом без примесей вредных веществ. При этом выпускаемая нами жидкость выполняет необходимые функции даже при очень низких температурах, так как она разработана специально для российского климата.
          </p>
          <p>
          Купить незамерзайку можно онлайн, оформив доставку и выбрав способ оплаты. Покупка возможна за наличный и безналичный расчет. Cтеклоомыватель без запаха с доставкой по Москве и Московской области мы доставим в день покупки! Гарантированное качество, низкие цены. Для постоянных клиентов скидки.</p>
          </div>
          </div>
        </Container>
      </section>
    )
};

export default Bigcan;
