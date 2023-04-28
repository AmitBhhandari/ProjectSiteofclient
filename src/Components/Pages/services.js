import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './services.css';

const ServiceList = ({ services }) => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <Carousel interval={5000} pauseOnHover={true} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
        {services.map((service) => (
          <Carousel.Item key={service.id}>
            <Card className="service-card">
              <Card.Img variant="top" src={service.image} alt={service.name} className="service-card-img" />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Link href={service.link} className="service-learn-more-link">Learn More</Card.Link>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceList;

