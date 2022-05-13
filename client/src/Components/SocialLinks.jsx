import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const socialStyle = {
    backgroundColor : "#212529",
    padding: "5% 0%",
}

const SocialLinks = () => {
  return (
    <>
        <Container style={socialStyle} fluid>
            <Row>
                <Col fluid className="text-center justify-content-space-between">
                    <Link to='#'><img src='instagram70light.png'></img></Link>
                    <Link to='#'><img src='twitter70light.png'></img></Link>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default SocialLinks