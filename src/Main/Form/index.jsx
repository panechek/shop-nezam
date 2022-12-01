import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import products from '../../assets/products.js';
// import * as Yup from 'yup';


import './Form.scss';





const FormEl = ({ handleDelete, countProducts, setCountProducts }) => {
  // const orderSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //     tel: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });

  const makeInitialValue = () => {
    const initialValue = {
      username: '',
      email: '',
      tel: '',
      message: '',
    };
    products.forEach((item) => initialValue[item.name] = '');
    return initialValue
  };

  const formik = useFormik({
    initialValues: makeInitialValue(),
    // validationSchema: orderSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      Object.entries(values).forEach((key, value) => {
        const notProducts = ['username', 'email', 'tel', 'message'];
        const [name, data] = key
        if (data !=='' && !notProducts.includes(name)) {
          formData.append('product', `${name} - ${data} шт.`);
          console.log(formData.getAll('product'));
        }
      })
      formData.append('name', values.username);
      formData.append('email', values.email);
      formData.append('tel', values.tel);
      formData.append('message', values.message);
      setCountProducts([]);
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
          <h1 className="form__title text-uppercase text-center">
              форма заказа
          </h1>
          <Form onSubmit={formik.handleSubmit} id="form" className="form__body">
          {products.map((item) => (
           countProducts.indexOf(item.id) >= 0  && 
            <Form.Group key={item.id} className="form__prod">
              <img src={item.img} alt="product" />
              <div className="input-group">
                <Form.Control
                placeholder="введите количество"
                  onChange={formik.handleChange}
                  value={formik.values[item.name]}
                  id={item.name}
                  name={item.name}
                  type="number"
                  className="form-control" />
                <button onClick={() => handleDelete(item.id)} className="input-group-text" id="btnGroupAddon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle deleteProd" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
            </Form.Group>
            )
          )}
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
