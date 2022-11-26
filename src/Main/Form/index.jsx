import React from "react";

import './Form.scss';

const Form = () => {
    return (
        <section id="form">
      <div class="container">
        <h2 class="section__title">ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?</h2>
        <p class="text-center">Заполните форму, укажите желаемое количество товара, при необходимости напишите
          комментарий.<br /> Мы свяжемся с
          вами в ближайшее время!</p>
        <div class="form">
          <form action="#" id="form" class="form__body">
            <h1 class="form__title text-uppercase text-center">
              форма заказа
            </h1>
            <div class="form__item">
              <div class="options">
                <div class="options__item">
                  <input id="-10" checked type="radio" value="Канистра ПЭТ -10 5L" name="type" class="options__input" />
                  <label for="-10" class="options__label"><span>Канистра ПЭТ -10 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="-20" type="radio" value="Канистра ПЭТ -20 5L" name="type" class="options__input" />
                  <label for="-20" class="options__label"><span>Канистра ПЭТ -20 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="-25" type="radio" value="Канистра ПЭТ -25 5L" name="type" class="options__input" />
                  <label for="-25" class="options__label"><span>Канистра ПЭТ -25 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="-30" type="radio" value="Канистра ПЭТ -30 5L" name="type" class="options__input" />
                  <label for="-30" class="options__label"><span>Канистра ПЭТ -30 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="-35" type="radio" value="Канистра ПЭТ -35 5L" name="type" class="options__input" />
                  <label for="-35" class="options__label"><span>Канистра ПЭТ -35 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="nord25" type="radio" value="Nord Stream -25 5L" name="type" class="options__input" />
                  <label for="nord25" class="options__label"><span>Nord Stream -25 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="arctic30" type="radio" value="female" name="type" class="options__input" />
                  <label for="arctic30" class="options__label"><span>Arctic Formula -30 5L</span></label>
                </div>
                <div class="options__item">
                  <input id="summer" type="radio" value="female" name="type" class="options__input" />
                  <label for="summer" class="options__label"><span>Летняя Мухомой 5л</span></label>
                </div>
                <div class="options__item">
                  <input id="hubba" type="radio" value="female" name="type" class="options__input" />
                  <label for="hubba" class="options__label"><span>Летняя Hubba Bubba 5л</span></label>
                </div>
              </div>
            </div>
            <div class="form__item">
              <label for="formName" class="form__label">Имя*:</label>
              <input id="formName" type="text" class="form__input _req" name="name" />
            </div>
            <div class="form__item">
              <label for="formPhone" class="form__label">Телефон*:</label>
              <input id="formPhone" type="text" class="form__input _req _email" name="phone" />
            </div>
            <div class="form__item">
              <label for="formEmail" class="form__label">E-mail*:</label>
              <input id="formEmail" type="text" class="form__input _req _email" name="email" />
            </div>
            <div class="form__item">
              <label for="formQuantity" class="form__label">Количество:</label>
              <input id="formQuantity" type="text" class="form__input _req _quantity" name="quantity" />
            </div>

            <div class="form__item">
              <label for="formMessage" class="form__label">Сообщение:</label>
              <textarea name="message" class="form__input" id="formMessage"></textarea>
            </div>

            <div class="form__item">
              <div class="checkbox">
                <input id="formAgreement" checked type="checkbox" name="agreement" class="checkbox__input _req" />
                <label for="formAgreement" class="checkbox__label"><span>Я даю согласие на обработку персональных данных
                    в соответствии с <a href="#">Условиями</a></span></label>
              </div>
            </div>
            <button class="form__button btn btn-primary fw-bold" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </section>
    )
};

export default Form;
