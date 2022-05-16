import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const containerStyle = {
    backgroundColor : "black",
    textAlign : "center"
}
const titleStyle = {
    color: "yellow",
    fontSize: "100pt",
    textDecoration: "underline"
}

const Vids = () => {
  return (
    <>
        <Container id='vids' style={containerStyle} fluid>
            <Row>
                <Col>
                    <h1 style={titleStyle} className='cherrylime'>DawgHouse TV</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KRxjsF0hhFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CjFjJjuKA-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zRc3jeJ9yEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PYqpNXphPCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U1bvCsloIJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qz9Kp4iycEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/L_FJNFxd_Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Vids