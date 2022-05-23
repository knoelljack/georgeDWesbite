import React, { useState, useEffect } from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import './Shows.css';

const listStyle = {
    listStyleType : "none",
    color: "white",
}
const containerStyle = {
    textAlign : "center",
    backgroundColor: "black",
    height : "100vh"
}

const titleStyle = {
    color: "yellow",
    textDecoration: "underline"
}
const url = "https://docs.google.com/spreadsheets/d/169Fv1KH7Buvx1xqizhATqGq166FzRFs1zdgenaTH5ZA/gviz/tq?";


const Shows = () => {

    const output = document.querySelector('.output');
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        getShowData();
    }, [loading]);

    async function getShowData(){
        setLoading(true);
        await fetch(url)
            .then(res => res.text())
            .then(rep => {
                const data = JSON.parse(rep.substring(47).slice(0,-2));
                data.table.rows.forEach((main) => {
                    console.log(main);
                    const showDate = main.c[0].f;
                    const showName = main.c[1].v;
                    const showLink = main.c[2].v === null ? '#' : main.c[2].v;
                    const item = document.createElement('li');
                    const a = document.createElement('a');
                    const linkText = document.createTextNode(showDate + " - " + showName);
                    a.appendChild(linkText);
                    a.title = linkText;
                    a.href = showLink;
                    item.append(a);
                    output.append(item);
                })
            })
            .finally(setLoading(false))
            .catch(err => console.log(err));
        }

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
                    <ul style={listStyle} className='perfectlyTogether output'>
                        { loading ? (
                            <li>Loading...</li>
                        ) : null }
                    </ul>
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default Shows