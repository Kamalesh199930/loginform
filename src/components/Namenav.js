import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';

const Namenav = () => {
  return (
    <div>
       
        <h4>
        <Navbar>
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
          <LinkContainer to='/'>

          <Nav.Link href="#Home">Home</Nav.Link>
          </LinkContainer>
         
        <LinkContainer to='/Logout'>
          
         <Nav.Link href="#Logout">Logout</Nav.Link>

         </LinkContainer>
            
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </h4>
       
    </div>
  )
}

export default Namenav