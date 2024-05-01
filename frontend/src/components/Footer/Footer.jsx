import React from 'react';
import "./Footer.css"
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid id="Footer">
            <Row>
                <Col>
                    <p className="">Cafe 9¾: Where Love And Magic Meet</p>
                    <p className="">Address: 1234 Main St, Anytown, XXX</p>
                    <p className="">Phone: 555-555-5555</p>
                    <p className="">Email: info@yourcompany.com</p>
                </Col>
            </Row>
            <Row className="border-top text-center py-3">
                <Col className="p-0">
                    <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;