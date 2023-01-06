import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navStyle = {
    backgroundColor: 'lightblue'
} 

const Header = ({ title }) => {
    return (
        <Navbar style={navStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;