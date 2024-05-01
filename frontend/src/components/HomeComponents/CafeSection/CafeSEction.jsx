import React from 'react';
import "./CafeSection.css"
import { Container, Row, Col } from 'react-bootstrap';

const CafeSection = () => {
    return (
        <header id='CafeSection'>
            <Container>
                <Row className='d-flex justify-content-center g-0 CafeSectionContainer'>
                    <Col xs={12} lg={5} className="d-flex align-items-center cafeSectionDesc p-3">
                        <div>
                            <h2 className='mb-4'>Cafe 9¾: Where Love and Magic Meet</h2>
                            <p>Step into our enchanted cafe, inspired by tales of wonder. Indulge in artisanal brews and delectable treats amid whimsical decor. Share intimate moments and laughter in cozy corners. At Cafe 9¾, let love and magic intertwine in a captivating experience you won't soon forget.</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={7} className='cafeSectionImgContainer'>
                        <img src="https://img.freepik.com/free-photo/lovely-purple-street_1361-116.jpg?t=st=1711984027~exp=1711987627~hmac=ddb95d651e0f5a75aa46520fb838bf450fa18789374c7fb48b1e0b69dcd1a1ad&w=740" alt="" className=" img-fluid cafeSectionImg" />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default CafeSection;