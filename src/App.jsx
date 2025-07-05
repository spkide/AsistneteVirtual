import React from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return(
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Asistente Virtual</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Información</Nav.Link>
            <NavDropdown title="Ver más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ver más</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Reseñas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contactanos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              chatbot
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App
