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
      const formData = new FormData();

      formData.append('name', formik.username);
      formData.append('email', formik.email);
      formData.append('tel', formik.tel);
      formData.append('quantity', formik.quantity);
      formData.append('prod', formik.prod);
      formData.append('message', formik.message);
      
      try {
        const res = await fetch('sendmail.php', {
          method: 'POST',
          body: formData,
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
        <h2 className="section__title">ГОТОВЫ СДЕЛАТЬ ЗАКАЗ?</h2>
        <p className="text-center">Заполните форму, укажите желаемое количество товара, при необходимости напишите
          комментарий.<br /> Мы свяжемся с
          вами в ближайшее время!</p>
        <div className="form">
          <Form onSubmit={formik.handleSubmit} id="form" className="form__body">
            <h1 className="form__title text-uppercase text-center">
              форма заказа
            </h1>
            <div className="form__item">
              <Form.Group className="options">
                {products.map((item) => (
                   <Form.Check
                   key={item.id}
                   id={item.name}
                   type="radio"
                   value={item.name} 
                   name="prod" 
                   className="options__input"
                   label={item.name}
                   checked={formik.values.prod === item.name}
                   onChange={() => formik.setFieldValue('prod', item.name)}
                   />
                ))}
              </Form.Group>
            </div>
            <Form.Group className="form__item">
              <Form.Label htmlFor="username" className="form__label">Имя*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
               id="username"
               name="username"
               required
                className="form__input _req"  />
            </Form.Group>
            <Form.Group className="form__item">
              <Form.Label htmlFor="tel" className="form__label">Телефон*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.tel}
               id="tel"
               name="tel"
               required
               className="form__input _req _email"  />
            </Form.Group>
            <Form.Group className="form__item">
              <Form.Label htmlFor="email" className="form__label">E-mail*:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              required
               id="email"
               name="email"
               className="form__input _req _email"  />
            </Form.Group>
            <Form.Group className="form__item">
              <Form.Label htmlFor="formQuantity" className="form__label">Количество:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.quantity}
              id="quantity"
              name="quantity"
              required
              className="form__input _req _quantity" />
            </Form.Group>

            <Form.Group className="form__item">
              <Form.Label htmlFor="message" className="form__label">Сообщение:</Form.Label>
              <Form.Control
              onChange={formik.handleChange}
              value={formik.values.message}
               name="message"
                className="form__input"
                 id="message" />
            </Form.Group>
            <Button className="form__button btn btn-primary fw-bold" type="submit">Отправить</Button>
          </Form>
        </div>
      </Container>
    </section>
    )
};

export default FormEl;
