import React from "react";
import { Container } from "react-bootstrap";

import './Prices.scss';

const Prices = () => {
    return (
      <section id="prices">
      <Container>
        <h2 className="section__title text-uppercase">СТЕКЛООМЫВАТЕЛЬ<br />ЗА БЕЗНАЛИЧНЫЙ РАСЧЕТ</h2>
        <div className="prices__table">
          <h3 className="prices__table_title">НЕЗАМЕРЗАЙКА ПЭТ КАНИСТРА 5Л</h3>
          <table className="table text-center">
            <thead>
              <tr className="bg-primary bg-gradient text-white align-top">
                <th scope="col">ДОСТАВКА,<br />ШТ</th>
                <th scope="col">-10°C</th>
                <th scope="col">-20°C</th>
                <th scope="col">-25°C</th>
                <th scope="col">-30°C</th>
                <th scope="col">-35°C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">50</th>
                <td>115 р.</td>
                <td>120 р.</td>
                <td>125 р.</td>
                <td>130 р.</td>
                <td>135 р.</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">100</th>
                <td>110 р.</td>
                <td>115 р.</td>
                <td>120 р.</td>
                <td>125 р.</td>
                <td>130 р.</td>
              </tr>
              <tr>
                <th scope="row">200</th>
                <td>105 р.</td>
                <td>110 р.</td>
                <td>115 р.</td>
                <td>120 р.</td>
                <td>125 р.</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">500</th>
                <td>100 р.</td>
                <td>105 р.</td>
                <td>110 р.</td>
                <td>115 р.</td>
                <td>120 р.</td>
              </tr>
              <tr>
                <th scope="row">1000</th>
                <td>95 р.</td>
                <td>100 р.</td>
                <td>105 р.</td>
                <td>110 р.</td>
                <td>115 р.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="prices__table">
          <h3 className="prices__table_title">НЕЗАМЕРЗАЙКА ЕВРОКАНИСТРА 5 Л</h3>
          <table className="table text-center">
            <thead>
              <tr className="bg-primary bg-gradient text-white align-top">
                <th scope="col">ДОСТАВКА,<br />ШТ</th>
                <th scope="col">ARCTIC FORMULA -30°C</th>
                <th scope="col">POLAR STREAM -25°C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">50</th>
                <td>195 р.</td>
                <td>185 р.</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">100</th>
                <td>190 р.</td>
                <td>180 р.</td>
              </tr>
              <tr>
                <th scope="row">200</th>
                <td>185 р.</td>
                <td>175 р.</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">500</th>
                <td>180 р.</td>
                <td>170 р.</td>
              </tr>
              <tr>
                <th scope="row">1000</th>
                <td>175 р.</td>
                <td>165 р.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="prices__table">
          <h3 className="prices__table_title">ЛЕТНЯЯ ОМЫВАЙКА ПЭТ КАНИСТРА 5 Л</h3>
          <table className="table text-center">
            <thead>
              <tr className="bg-primary bg-gradient text-white align-top">
                <th scope="col">ДОСТАВКА,<br />ШТ</th>
                <th scope="col">HUBBA BUBBA</th>
                <th scope="col">МУХОМОЙ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">НАЛИЧНЫЙ РАСЧЕТ</th>
                <td>115 р.</td>
                <td>100 р.</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">БЕЗНАЛИЧНЫЙ РАСЧЕТ</th>
                <td>120 р.</td>
                <td>115 р.</td>
              </tr>

            </tbody>
          </table>
        </div>
      </Container>
    </section>
    )
};

export default Prices;
