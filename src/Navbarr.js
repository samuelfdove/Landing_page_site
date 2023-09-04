import { useEffect, useRef, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Navbarr() {
  return(
  <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Samuel Dove</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/playchess">Chess_AI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/samuel-dove-6bba62155/">LinkedIn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://samuelfdove.github.io/chessgame-ws-client/">Multiplayer Chess</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/resume">Resume</a>
              </li> */}
              
            </ul>
            
          </div>
        </div>
    </nav>
  );
}

function Navbarr2() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand href="/">Samuel Dove</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '1000px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/playchess">Chess_AI</Nav.Link>
            <NavDropdown title="Current_Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/poolai">Pool AI</NavDropdown.Item>
              <NavDropdown.Item href="/piecedataset">Chess Move Analysis</NavDropdown.Item>
              <NavDropdown.Item href="/userdataset">Inactive User Analysis</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="https://www.linkedin.com/in/samuel-dove-6bba62155/">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://samuelfdove.github.io/chessgame-ws-client/">
              Multiplayer_Chess
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr2