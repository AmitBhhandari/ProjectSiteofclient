import React from 'react';
import classes from './footer.module.css'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <footer className="py-5">
        <Container>
          <Row className="text-center text-md-left">
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <p className="mb-0">Learn about our company and mission.</p>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 font-weight-bold">Social</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-white">Facebook</a></li>
                <li className="mb-2"><a href="#" className="text-white">Twitter</a></li>
                <li className="mb-2"><a href="#" className="text-white">Instagram</a></li>
              </ul>
            </Col>
            <Col md={4} className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 font-weight-bold">Newsletter</h5>
              <p className="mb-0">Subscribe to our newsletter to receive updates.</p>
              <form className="form-inline mt-3">
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

