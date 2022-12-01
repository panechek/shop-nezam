import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import products from '../../assets/products.js';
import * as Yup from 'yup';


import './Form.scss';





const FormEl = ({ handleDelete, countProducts, setCountProducts }) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const orderSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Слишком короткое')
      .max(50, 'Слишком длинное')
      .required('Заполните поле'),
    tel: Yup.string()
      .required("Заполните поле")
      .matches(phoneRegExp, 'Неверный телефонный номер')
      .min(10, "Слишком короткий номер")
      .max(10, "Слишком длинный номер"),
    email: Yup.string().email('Введите верный адрес почты').required('Заполните поле'),
    "Канистра ПЭТ -10°С 5л": Yup.number().required('Введите количество').min(50, 'Минимальный заказ от 50 шт')
  });

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
    validationSchema: orderSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      const order = []
      Object.entries(values).forEach((key, value) => {
        const notProducts = ['username', 'email', 'tel', 'message'];
        const [name, data] = key;
        if (data !=='' && !notProducts.includes(name)) {
          order.push(`${name}-${data} шт.`);
        }
      })
      formData.append('product', order.join(', '));
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
          <Form onSubmit={formik.handleSubmit} id="form" className="form__body needs-validation"  noValidate>
          {products.map((item) => (
           countProducts.indexOf(item.id) >= 0  && 
           <div key={item.id}>
            <Form.Group className="form__prod  has-validation">
              <img src={item.img} alt="product" />
              <div className="input-group">
                <Form.Control
                placeholder="введите количество"
                  onChange={formik.handleChange}
                  value={formik.values[item.name]}
                  id={item.name}
                  name={item.name}
                  type="number"
                  className={(formik.touched[item.name] && formik.errors[item.name]) ? 'form-control is-invalid form__input' : 'form-control form__input'} />
                <button onClick={() => handleDelete(item.id)} className="input-group-text" id="btnGroupAddon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle deleteProd" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
             
            </Form.Group>
             {formik.touched[item.name] && formik.errors[item.name] ? (
         <div className="invalidfeedback">{formik.errors[item.name]}</div>
        ) : null }
            </div>
            )
          )}
          <Form.Group className="form__item has-validation">
            <Form.Label htmlFor="username" className="form__label">Имя*:</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.username}
              id="username"
              name="username"
              className={(formik.touched.username && formik.errors.username) ? 'form-control is-invalid form__input' : 'form-control form__input'} />
                 {formik.touched.username && formik.errors.username ? (
         <div className="invalid-feedback">{formik.errors.username}</div>
        ) : null }
            </Form.Group>
         
          <Form.Group className="form__item has-validation">
            <Form.Label htmlFor="tel" className="form__label">Телефон*:</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.tel}
              id="tel"
              name="tel"
              className={(formik.touched.tel && formik.errors.tel) ? 'form-control is-invalid form__input' : 'form-control form__input'} />
              {formik.touched.tel && formik.errors.tel ? (
         <div className="invalid-feedback">{formik.errors.tel}</div>
        ) : null }
          </Form.Group>
          <Form.Group className="form__item has-validation">
            <Form.Label htmlFor="email" className="form__label">E-mail*:</Form.Label>
            <Form.Control
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              name="email"
              className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid form__input' : 'form-control form__input'} />
              {formik.touched.email && formik.errors.email ? (
         <div className="invalid-feedback">{formik.errors.email}</div>
        ) : null }
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
