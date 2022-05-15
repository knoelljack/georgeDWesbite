import React from 'react'
import {Nav, Container, Navbar} from 'react-bootstrap'

const navStyle = {
  fontSize : "20px",
}

const TopNav = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="justify-content-space-between">
                <Navbar.Brand className='perfectlyTogether nav-links' href="/">George Dulcich</Navbar.Brand>
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
    </>
  )
}

export default TopNav