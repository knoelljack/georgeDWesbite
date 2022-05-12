import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

const myStyle = {
    backgroundImage : "url(/georgeImages/4.jpeg)",
    backgroundColor: "black",
    display : "flex",
    height : "1000px",
    width : "100%",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
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
        </Container>
    </>
  )
}

export default Home