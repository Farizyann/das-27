import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">...</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={'nav-link'} to="/">Products</NavLink>
                        <NavLink className={'nav-link'} to="/categories">Categories</NavLink>
                        <NavLink className={'nav-link'} to="/products/add">Add Product</NavLink>
                        <NavLink className={'nav-link'} to="/categories/add">Add Category</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Menu };