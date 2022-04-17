import React from "react";
import { signOut } from 'firebase/auth';
import {  Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../../imgaes/Dlogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from 'react-firebase-hooks/auth';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  return (
    <div>
      <Navbar  bg="light"  expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="mx-auto fs-5">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/bookNow">
                Book Now
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {
                user ? 
                <span className='text-black-50 mt-2 fs-5' onClick={handleSignOut}>log out</span>
                :
                <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
            <Form className="d-flex sm:w-100 position-relative">
                <FormControl className="me-2 w-100" type="text" placeholder="" />
                <span className="fs-4 position-absolute end-0 me-3"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
