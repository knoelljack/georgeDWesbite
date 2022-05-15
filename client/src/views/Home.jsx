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
    // fontSize : "10vw",
    color : "yellow",
    // margin : "50% 0%"
}

const Home = () => {
    return (
        <>
            <Container style={myStyle} fluid>
                <Row>
                    <Col xs={12}>
                        <p className='cherrylime' style={pStyle}>George</p>
                    </Col>
                    <Col xs={12}>
                        <p className='cherrylime' style={pStyle}>Dulcich</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home