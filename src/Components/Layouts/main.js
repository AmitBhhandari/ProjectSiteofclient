import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const Body = () => {
  return (
    <div >
      <Row>
        <Col md={4}>
          <Card>
            <Image
              src="https://media.istockphoto.com/id/619052288/photo/laptop-and-computer-parts.jpg?s=612x612&w=0&k=20&c=ejIT6Owx79tk4E3z4FxS16kWQHPHL3VDE7TQRMauMLU="
              width="460" height="400"
            />
            <Card.Body>
              <Card.Title>Hardware</Card.Title>
              <Card.Text>
                We offer a wide range of hardware components for your computer,
                including motherboards, graphics cards, processors, and more.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Image src="https://content.jdmagicbox.com/comp/hyderabad/u8/040pxx40.xx40.190916125838.q6u8/catalogue/pheonix-software-solutions-new-nallakunta-hyderabad-cctv-computer-software-dealers-o97ohcyykc.jpg?clr=333333" width="460" height="400"/>
            <Card.Body>
              <Card.Title>Software</Card.Title>
              <Card.Text>
                We offer a variety of software options, including operating
                systems, productivity tools, and security software.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Image src="https://www.computerrepairhomeservice.in/wp-content/uploads/2019/06/Laptop-Repair-Service-at-Home-in-Sector-66-Noida.png" width="460" height="400"/>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Our team of experts can help you with anything from setting up a
                new computer to repairing an old one.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
  );
};

export default Body;
