import React from 'react'
import { processData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Process = () => {
  return (
    <section className="pt-0 mt-n9">
      <Container fluid className="position-relative">
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-5 py-sm-6 py-lg-8" data-bs-theme="dark">
          <Container className="position-relative">
            <h2 className="mb-4 mb-lg-6">Step-by-Step Process</h2>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {
                processData.map((item, idx) => (
                  <Col key={idx}>
                    <h4 className="text-primary-grad">0{idx + 1}</h4>
                    <h6>{item.title}</h6>
                    <p className="mb-0">{item.description}</p>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default Process