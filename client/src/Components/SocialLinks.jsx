import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const socialStyle = {
    backgroundColor : "#212529",
    padding: "5% 0%",
    // position : "absolute",
    bottom : 0
}

const SocialLinks = () => {
  return (
    <>
        <Container style={socialStyle} fluid>
            <Row>
                <Col className="text-center justify-content-space-between">
                    <a href='https://www.instagram.com/georgedulcich/'><img src='instagram70light.png' alt=''></img></a>
                    <a href='https://twitter.com/georgedulcich'><img src='twitter70light.png' alt=''></img></a>
                    <a href='https://www.youtube.com/channel/UCtQARoui_0HGmwNZcJnZVkA'><img src='youtube70.png' alt=''></img></a>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SocialLinks