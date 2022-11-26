import React from 'react';
import './App.scss';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" expand="lg" fixed="top" variant='dark'>
      <Container fluid className='width-1200'>
        <Navbar.Brand href="#" className='text-white'>НЕЗАМЕРЗАЙКА</Navbar.Brand>
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
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <div className='section' id='about'></div>
      <div className='section' id='catalog'></div>
      <div className='section' id='prices'></div>
      <div className='section' id='settings'></div>
      <div className='section' id='contact'></div>
    </div>
  );
}

export default App;
