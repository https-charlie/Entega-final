import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image' ;
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <section className='menu'>
       <Navbar bg="light" expand="lg">
        <Container>
              <Navbar.Brand><NavLink to="/"><Image className="logo-eco" src="/logo.png" /></NavLink></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                activeKey="/home"
                className="me-auto w-100 "
              >
                <div className='col-md-10 menu-eco'>
                  <Nav.Item>
                  <NavLink to="/">Inicio</NavLink>
                  </Nav.Item>
                  <NavDropdown title="Productos" id="nav-dropdown">
                    <NavDropdown.Item ><NavLink to="/categoria/Sweaters">Sweaters</NavLink></NavDropdown.Item>
                    <NavDropdown.Item ><NavLink to="/categoria/Jogger">Joggers</NavLink></NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className='col-md-2 cart-eco'>
                  <Nav.Item>
                    <Nav.Link to="#/cart">
                        <CartWidget />
                    </Nav.Link>
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar.Collapse>
        </Container>
       </Navbar>

    </section>
  );
}

export default NavBar;
