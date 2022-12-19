import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import buttons from '../assets/buttons';

import cn from 'classnames';
import './Header.scss';

const Header = () => {

  const [ connectionOn, setConnectionOn ] = useState(true);

  const switchConnection = () => {
    setConnectionOn(!connectionOn);
  };

  const classOfBtnConnection = cn('header__buttonConnect', {
    "visually-hidden": connectionOn,
    }
  );

  const classButtonOpen = cn('btn', 'btn-secondary', 'header__button', 'openButtonGroup', {
    "visually-hidden": !connectionOn,
  })

    return (
    <header className="App-header">
      <Navbar bg="dark" expand="lg" fixed="top" variant='dark'>
      <Container className='header'>
        <img src={Logo} alt='logo-can' className='header__logo' />
        <Navbar.Brand href="#" className='text-white  align-bottom'>
          <h1 className='fw-bold'>НЕЗАМЕРЗАЙКА</h1>
          <p className='mb-0 header__text'>продажа оптом доставка по Москве и МО</p>
          </Navbar.Brand>
          <div className={classOfBtnConnection}>
            {buttons.map(item => (
              item.name === 'close' ? <button type="button" onClick={switchConnection} key={item.id} className="btn header__button header__button_notBorder">{item.icon}</button> : <a href={item.address} key={item.id} className={`btn header__button bg-${item.name}`} style={{backgroungColor: item.color}}>{item.icon}</a>)
            )}
           </div>
          
          <button type="button" onClick={switchConnection} className={classButtonOpen}>{buttons[2].icon}</button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="ms-auto my-2 my-lg-0 navRow"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#about">О нас</Nav.Link>
            <Nav.Link href="#catalog">Каталог</Nav.Link>
            <Nav.Link href="#prices">Цены</Nav.Link>
            <Nav.Link href="#settings">Условия работы</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    )
}

export default Header;
