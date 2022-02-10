import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="http://localhost:3000/login">Siddharth Tanwar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="http://localhost:3000/login">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header