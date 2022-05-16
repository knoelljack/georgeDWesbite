import React from 'react'
import {Col,Row,Container} from 'react-bootstrap';
import './Shows.css'

const listStyle = {
    listStyleType : "none",
    color: "white",
    fontSize : "4vw",
}
const containerStyle = {
    textAlign : "center",
    backgroundColor: "black",
    height : "100vh"
}

const titleStyle = {
    color: "yellow",
    fontSize: "10vw",
    textDecoration: "underline"
}

const Shows = () => {
  return (
    <>
        <Container id='shows' style={containerStyle} fluid>
            <Row>
                <Col>
                    <h1 className='cherrylime' style={titleStyle}>Upcoming Shows</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul style={listStyle} className='perfectlyTogether'>
                        <li>5/14 - "Isaiah and Amigos” at The Hollywood Comedy</li>
                        <li>5/22 - Rick’s Alhambra</li>
                        <li>5/27 - “We Own the Laughs” at The Pasadena Comedy</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Shows