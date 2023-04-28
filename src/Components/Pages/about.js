import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Image src="https://c0.wallpaperflare.com/preview/253/707/639/hardware-computer-repair-service.jpg" fluid />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Our Shop</h2>
            <p>
              We are a hardware and software computer shop that offers a wide range of products and services to meet all of your computer needs. Our team of experts is dedicated to providing high-quality products and unparalleled customer service. Whether you're looking to upgrade your computer, need help with a repair, or simply have a question, we're here to help.
            </p>
            <p>
              In addition to computer services, we also offer professional CCTV installation services for your home or office. Our team of experts can help you select the right CCTV system for your needs and provide a hassle-free installation process.
            </p>
            <p>
              We believe in providing our customers with the best possible experience, which is why we offer a wide selection of products and services at competitive prices. From the latest hardware components to the newest software applications, we have everything you need to get the most out of your computer.
            </p>
            <p>
              Thank you for choosing us for all of your computer needs. We look forward to serving you!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

