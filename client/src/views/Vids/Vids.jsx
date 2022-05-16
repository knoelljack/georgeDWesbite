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
        <Container style={containerStyle} fluid>
            <Row>
                <Col>
                    <h1 style={titleStyle} className='cherrylime'>DawgHouse TV</h1>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Vids