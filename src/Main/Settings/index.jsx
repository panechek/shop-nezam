import React from "react";
import { Container } from "react-bootstrap";

import db from '../../assets/info.js';

import './Settings.scss';

const Settings = ({ title, type }) => {
  const data = db.filter((item) => item.part === type)

    return (
        <section id="settings">
        <article className="bg-primary">
          <Container className="info">
            <h2 className="section__title text-white">{title}</h2>
            <div className="info__list">
              {data.map((item) => (
                <div className="info__item" key={item.id}>
                <div className="info__icon">
                  {item.icon}
                </div>
                <p className="info__text">
                 {item.text}
                </p>
              </div>
              ))}
              </div>
              </Container>
        </article>
      </section>
    )
};

export default Settings;
