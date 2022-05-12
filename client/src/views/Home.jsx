import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const myStyle = {
    // backgroundImage : "url(/georgeImages/4.jpeg)",
    backgroundColor: "black",
    display : "flex",
    height : "1000px",
    width : "100%",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    textAlign : "center"
}

const Home = () => {
  return (
    <>
        <Container style={myStyle} fluid>
            {/* <Row className="d-flex">
                <Col>
                    <Image fluid src="/georgeImages/1.jpeg"></Image>
                </Col>
                <Col>
                    <Image fluid src="/georgeImages/4.jpeg"></Image>
                </Col>
                <Col>
                    <Image fluid src="/georgeImages/8.jpeg"></Image>
                </Col>
            </Row>
            <Row>
                <Col className = "text-center">
                    <Image fluid src="/georgeImages/4.jpeg"></Image>
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <img src='/georgeImages/3.jpeg'></img>
                    <p className='cherrylime' style={{fontSize : "150px", color : "yellow"}}>George<br></br>Dulcich</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home