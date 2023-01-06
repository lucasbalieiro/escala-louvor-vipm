import { Container, Nav, Navbar,  } from "react-bootstrap";
import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Escala V IPM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink href="/" label="Cadastrar na Escala" />
                <NavLink href="/list" label="Lista de Escala" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    ); 
}