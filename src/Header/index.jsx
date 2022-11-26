import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';
import './Header.scss';

const Header = () => {
    return (
    <header className="App-header">
      <Navbar bg="dark" expand="lg" fixed="top" variant='dark'>
      <Container fluid className='width-1200 header'>
        <img src={Logo} alt='logo-can'/>
        <Navbar.Brand href="#" className='text-white  align-top'>
          <h1 className='fs-1 fw-bold'>НЕЗАМЕРЗАЙКА</h1>
          <p className='fs-5'>продажа оптом доставка по москве</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#about">О нас</Nav.Link>
            <Nav.Link href="#catalog">Каталог</Nav.Link>
            <Nav.Link href="#prices">Цены</Nav.Link>
            <Nav.Link href="#settings">Контакты</Nav.Link>
            <Nav.Link href="#contact">Контакты</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Поиск..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Найти</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
    )
}

export default Header;
