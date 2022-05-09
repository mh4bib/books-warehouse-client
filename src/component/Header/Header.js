import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    if (error) {
        console.log(error);
    }
    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold' style={{ color: '#d8b445' }} as={Link} to="/">BOOK FAIR</Navbar.Brand>
                    <Navbar.Toggle style={{ color: '#b98632' }} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* left link  */}
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: '#b98632' }} as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link style={{ color: '#b98632' }} as={Link} to="/manage-inventories">MANAGE ITEMS</Nav.Link>
                            <Nav.Link style={{ color: '#b98632' }} href="#about-us">ABOUT US</Nav.Link>
                            <Nav.Link style={{ color: '#b98632' }} as={Link} to="/blogs">BLOGS</Nav.Link>
                        </Nav>

                        {/* right links */}
                        <Nav>
                            {
                                !user ?
                                    <>
                                        <Nav.Link style={{ color: '#b98632' }} as={Link} to="/login">Login</Nav.Link>
                                        <div style={{ color: '#b98632' }} className='vertical-line d-none d-lg-block'></div>
                                        <Nav.Link style={{ color: '#b98632' }} as={Link} to="/register">Register</Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link style={{ color: '#b98632' }} as={Link} to="/my-items">My Items</Nav.Link>
                                        <Nav.Link style={{ color: '#b98632' }} as={Link} to="/add-inventory">Add Item</Nav.Link>
                                        <Nav.Link style={{ color: '#b98632' }} onClick={handleLogout}>Logout</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;