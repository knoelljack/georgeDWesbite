import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const myStyle = {
    backgroundImage : "url(/georgeImages/3.jpeg)",
    backgroundColor: "black",
    display : "flex",
    height : "1000px",
    width : "100%",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    textAlign : "center",
    justifyContent: "center",
}
const titleStyle = {
    position : "absolute",
    bottom : "30%"
}

const Home = () => {
  return (
    <>
        <Container style={myStyle} fluid>
            <Row style={titleStyle}>
                <Col>
                    <p className='cherrylime' style={{fontSize : "150px", color : "yellow"}}>George</p>
                </Col>
                <Col>
                    <p className='cherrylime' style={{fontSize : "150px", color : "yellow"}}>Dulcich</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home