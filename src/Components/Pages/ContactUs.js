import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container className="my-5" style={{boxShadow:" 0 0 10px rgba(0, 0, 0, 0.2)"}}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Contact Us</h1>
          <p>Feel free to contact us if you have any questions or comments!</p>
          <p><strong>Address:</strong> Girdhar Market ,Saket Lodge Near Petrol pump ,Srinagar Garhwal</p>
          <p><strong>Phone:</strong> +91 7678444299 , 8745089049</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;