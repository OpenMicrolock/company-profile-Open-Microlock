import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Step = () => {
  return (
    <section className="pt-md-0 overflow-hidden">
      <Container>
        <h2 className="text-center mb-6">Our workflow</h2>
        <Row className="position-relative g-6 g-lg-7">
          <Col md={4} className=" mt-md-8">
            <Card className="card-body bg-secondary bg-opacity-75 text-center rounded-4 p-4">
              <div className="icon-lg bg-primary rounded-circle text-white mx-auto position-absolute top-0 start-50 translate-middle mt-n2">01</div>
              <h6 className="mt-4">Initial consultation</h6>
              <p className="mb-0">An initial meeting to understand your vision and objectives.</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-body bg-secondary bg-opacity-75 text-center rounded-4 p-4">
              <div className="icon-lg bg-pink rounded-circle text-white mx-auto position-absolute top-0 start-50 translate-middle mt-n2">02</div>
              <h6 className="mt-4">Development and Execution</h6>
              <p className="mb-0">We begin development and execution based on the agreed plan.</p>
            </Card>
          </Col>
          <Col md={4} className=" mt-md-8">
            <Card className="card-body bg-secondary bg-opacity-75 text-center rounded-4 p-4">
              <div className="icon-lg bg-purple rounded-circle text-white mx-auto position-absolute top-0 start-50 translate-middle mt-n2">03</div>
              <h6 className="mt-4"> Review and Delivery</h6>
              <p className="mb-0">Post-delivery support to ensure a smooth transition and continued success</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Step