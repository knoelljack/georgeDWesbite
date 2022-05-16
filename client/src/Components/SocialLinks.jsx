import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

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
                <Col fluid className="text-center justify-content-space-between">
                    <Link to='#'><img src='instagram70light.png' alt=''></img></Link>
                    <Link to='#'><img src='twitter70light.png' alt=''></img></Link>
                    <Link to='#'><img src='youtube70.png' alt=''></img></Link>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SocialLinks