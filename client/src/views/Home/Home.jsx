import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'

const myStyle = {
    backgroundImage: "url(/georgeImages/3.jpeg)",
    backgroundColor: "black",
    height: "80vh",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    textAlign: "center",
}
const pStyle = {
    color : "yellow",
}

const Home = () => {
    return (
        <>
            <Container className='home' style={myStyle} fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <p className='cherrylime' style={pStyle}>George</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className='cherrylime' style={pStyle}>Dulcich</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home