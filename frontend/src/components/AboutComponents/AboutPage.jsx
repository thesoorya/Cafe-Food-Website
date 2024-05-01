import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const AboutPage = () => {
  return (
    <Container className='pt-5'>
      <Row>
        <Col>
          <h1>Welcome to Cafe 9¾</h1>
          <p className="lead">Where Love And Magic Meet</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} lg={6}>
          <img src="https://img.freepik.com/free-photo/outdoor-seating-restaurant_53876-100095.jpg?w=740" className='img-fluid' />
        </Col>
        <Col xs={12} lg={6}>
          <p>
            At Cafe 9¾, we believe in creating magical experiences for our customers. Our cozy atmosphere and delicious food and drinks are sure to make you feel right at home.
          </p>
          <p>
            Whether you're stopping by for a quick coffee or staying for a leisurely meal, our friendly staff will always greet you with a smile.
          </p>
          <p>
            Come and experience the magic for yourself at Cafe 9¾!
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Delicious and freshly prepared food</li>
            <li>Cozy and welcoming atmosphere</li>
            <li>Excellent customer service</li>
            <li>Convenient location with ample parking</li>
            <li>Wide variety of menu options</li>
          </ul>
        </Col>
      </Row>

      <Row className='Acc d-flex justify-content-center mt-5'>
        <h2 className='text-center'>Frequently Asked Questions</h2>
        <Col lg={7}>
          <Accordion defaultActiveKey={null}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are your opening hours?</Accordion.Header>
              <Accordion.Body>
                We are open from 8:00 AM to 10:00 PM every day.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Do you offer vegetarian options?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer a variety of delicious vegetarian dishes on our menu.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you provide Wi-Fi for customers?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer free Wi-Fi for all our customers.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I make reservations?</Accordion.Header>
              <Accordion.Body>
                Yes, we accept reservations for groups of 6 or more. Please call ahead to book your table.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Do you have parking facilities?</Accordion.Header>
              <Accordion.Body>
                Yes, we have ample parking available for our customers.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
