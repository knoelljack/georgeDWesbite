import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

const pStyle = {
  color : "white",
  textAlign : "center",
  padding : "15% 10%",
}

const cStyle = {
  textAlign : "center",
  justifyContent : "center",
  padding : "0",
  margin : "12% 0%"
}
const containStyle = {
  backgroundColor: "black",
  height: "100vh",
}


const Contact = () => {
  return (
    <>
      <Container fluid id='contact' style={containStyle}>
        <Row style={{alignItems : "center"}}>
          <Col xs={12} md={6} style={cStyle}>
            <Image fluid src='/georgeImages/2.jpeg' alt=''></Image>
          </Col>
          <Col>
            <p style={pStyle} className='perfectlyTogether l-size xs-size'>For bookings and all other inquiries please contact <a style={{color: "yellow"}} href='mailto:gadulcich@gmail.com'>gadulcich@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact