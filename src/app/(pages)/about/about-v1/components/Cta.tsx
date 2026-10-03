import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Cta = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden">
      <span className="position-absolute top-0 start-0 mt-n5">
        <svg className="fill-body" width={1930} height={137} viewBox="0 0 1930 137" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M464.909 117.12C228.685 132.607 108.971 82.5335 0 51.0476V1.5L1930 0V26.649V132.607C1873.32 98.4636 1645.24 119.618 1488.21 132.607C1319.34 146.576 1149.46 119.696 1051.95 103.318C837.339 67.2694 668.231 103.79 464.909 117.12Z" />
        </svg>
      </span>
      <Container className="pt-5">
        <Row className="g-4 align-items-center">
          <Col md={5}>
            <h2 className="mb-3">Stay updated with our newsletter</h2>
            <p className="mb-0">Our newsletter provides valuable content designed to help you stay ahead in your field.</p>
          </Col>
          <Col md={6} xl={5} className="ms-auto">
            <div className="bg-body rounded-2 position-relative z-index-2 p-2 mb-2">
              <form className="input-group">
                <input className="form-control bg-transparent border-0 me-1" type="email" placeholder="Enter your email address" />
                <button type="button" className="btn btn-primary rounded-2 mb-0">Subscribe!</button>
              </form>
            </div>
            <div className="form-text">✌️ No Spam — We Promise!</div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta