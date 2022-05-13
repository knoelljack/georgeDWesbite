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
import Vids from './views/Vids';
import Shows from './views/Shows';
import './App.css'

const navStyle = {
  fontSize : "20px",
}

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid className="justify-content-space-between">
            <Navbar.Brand className='perfectlyTogether' href="/">George Dulcich</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto text-center perfectlyTogether"
              style={navStyle}
              navbarScroll
              >
                <Nav.Link className='nav-links' href="/">Home</Nav.Link>
                <Nav.Link className='nav-links' href="/about">About</Nav.Link>
                <Nav.Link className='nav-links' href="/dawghousetv">DawgHouse TV</Nav.Link>
                <Nav.Link className='nav-links' href="/shows">Upcoming Shows</Nav.Link>
                <Nav.Link className='nav-links'  href="/contact">Contact</Nav.Link>
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
        <Route exact path='/dawghousetv'>
          <Vids/>
        </Route>
        <Route exact path='/shows'>
          <Shows/>
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
