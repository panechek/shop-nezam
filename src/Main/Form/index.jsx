import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import products from '../../assets/products.js'


import './Form.scss';

const FormEl = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      tel: '',
      quantity: '',
      prod: '',
      message: '',
    },
    onSubmit: async (values) => {
      try {
        const res = await fetch('sendmail.php', {
          method: 'POST',
          body: values,
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        formik.resetForm();
        console.log(res);
      } catch (err) {
        console.log(err)
      }
    }
  })
    return (
        <section id="form">
      <Container>
        <h2 class="section__title">ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?</h2>
        <p class="text-center">Заполните форму, укажите желаемое количество товара, при необходимости напишите
          комментарий.<br /> Мы свяжемся с
          вами в ближайшее время!</p>
        <div class="form">
          <Form onSubmit={formik.handleSubmit} id="form" class="form__body">
            <h1 class="form__title text-uppercase text-center">
              форма заказа
            </h1>
            <div class="form__item">
              <Form.Group class="options">
                {products.map((item) => (
                   <Form.Check
                   id={item.name}
                   type="radio"
                   value={item.name} 
                   name="prod" 
                   class="options__input"
                   label={item.name} />
                ))}
              </Form.Group>
            </div>
            <Form.Group class="form__item">
              <Form.Label htmlFor="username" class="form__label">Имя*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
               id="username"
               name="username"
               required
                class="form__input _req"  />
            </Form.Group>
            <Form.Group class="form__item">
              <Form.Label htmlFor="tel" class="form__label">Телефон*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.tel}
               id="tel"
               name="tel"
               required
               class="form__input _req _email"  />
            </Form.Group>
            <Form.Group class="form__item">
              <Form.Label htmlFor="email" class="form__label">E-mail*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              required
               id="email"
               name="email"
               class="form__input _req _email"  />
            </Form.Group>
            <Form.Group class="form__item">
              <Form.Label htmlFor="formQuantity" class="form__label">Количество:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.quantity}
              id="quantity"
              name="quantity"
              required
              class="form__input _req _quantity" />
            </Form.Group>

            <Form.Group class="form__item">
              <Form.Label htmlFor="message" class="form__label">Сообщение:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.message}
               name="message"
                class="form__input"
                 id="message" />
            </Form.Group>
            <Button class="form__button btn btn-primary fw-bold" type="submit">Отправить</Button>
          </Form>
        </div>
      </Container>
    </section>
    )
};

export default FormEl;
