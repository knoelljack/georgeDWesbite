import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import './About.css'

const paragraphStyle = {
    color : "white",
    textAlign : "center",
    padding : "15% 10%",
}

const colStyle = {
    textAlign : "center",
    justifyContent: "center",
}
const contStyle = {
    backgroundColor : "black",
    // height: "100vh",
}

const About = () => {
  return (
    <>
        <Container id='about' fluid style={contStyle}>
            <Row>
                <Col id='first' xs={12} md={6} style={colStyle} >
                    <Image fluid src="/georgeImages/8.jpeg"></Image>
                </Col>
                <Col>
                    <p className='perfectlyTogether xs-size l-size' style={paragraphStyle}>George Dulcich is a Los Angeles based comedian born and raised in Glendale, California. He began his stand-up career in New York City in 2019 but returned to Los Angeles “after things went to crap” at the onset of the pandemic. <br></br><br></br>
                    George was named a 2022 “Rising Star” by The Pasadena Comedy and performs at the club regularly. In addition to The Pasadena Comedy, he has performed at major Los Angeles clubs such as Flappers, The Haha Comedy and The Hollywood Comedy. New York City clubs under his credit include Broadway Comedy Club, The Village Underground and Gotham Comedy Club. In 2021 George performed in Zagreb, Croatia at Smijeha Comedy Club. <br></br><br></br>
                    George is a co-founder, writer and performer on the popular sketch comedy channel DawgHouse TV. 
                    </p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default About