import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {LinkContainer } from "react-router-bootstrap"
import logo from '../assets/knitting.png'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>
            <img src={logo} alt="ProShop" style={{  marginRight: '10px' }}/>
            {/* <a href="https://www.flaticon.com/free-icons/crochet" title="crochet icons">Crochet icons created by Freepik - Flaticon</a> */}
            ProShop</Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/cart'><Nav.Link><FaShoppingCart/> Cart</Nav.Link></LinkContainer>
            <LinkContainer to='/login'><Nav.Link><FaUser/> Sign In</Nav.Link></LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
