import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/* <Navbar.Brand>2RPNet</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Cadastro" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/person">Pessoas</NavDropdown.Item>
                  <NavDropdown.Item href="/schedule">Eventos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Consulta" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/person/view">Pessoas</NavDropdown.Item>
                  <NavDropdown.Item href="/schedule/view">Eventos</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
}

export default Header;