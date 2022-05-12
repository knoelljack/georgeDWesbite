import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import SocialLinks from './Components/SocialLinks'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

const navStyle = {
  fontSize : "20px",
  maxHeight: '100px'
}

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid className="justify-content-space-between">
            <Navbar.Brand href="/">George Dulcich</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto text-center"
              style={navStyle}
              navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      <SocialLinks/>
    </BrowserRouter>
  );
}

export default App;
