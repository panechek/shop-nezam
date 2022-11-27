import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import './Header.scss';

const Header = () => {
    return (
    <header className="App-header">
      <Navbar bg="dark" expand="lg" fixed="top" variant='dark'>
      <Container className='header'>
        <img src={Logo} alt='logo-can' className='header__logo' />
        <Navbar.Brand href="#" className='text-white  align-bottom'>
          <h1 className='fs-1 fw-bold'>НЕЗАМЕРЗАЙКА</h1>
          <p className='mb-0 header__text'>продажа оптом доставка по москве</p>
          </Navbar.Brand>
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
