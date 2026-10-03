import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Result = () => {
  return (
    <section className="bg-secondary bg-opacity-50">
      <Container className="pt-8">
        <Row>
          <Col md={4}>
            <span className="text-primary-grad fw-bold lead">03.</span>
            <h5>Result</h5>
          </Col>
          <Col md={8} className="ms-auto">
            <p className="lead">Two assure Edward whence the was. Who worthy yet ten boys denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished.</p>
            <p className="mb-0">Transforming ideas into reality often requires collaboration with a diverse range of individuals. Partnering with experts, seeking mentorship, and building a network of like-minded individuals can provide valuable insights and support.</p>
            <Row className=" row-cols-2 row-cols-md-3 mt-0 g-4 g-lg-5">
              <Col>
                <h2 className="mb-0">22<span className="text-primary mb-0">%</span></h2>
                <p className="mb-0">Increase in time spent on website</p>
              </Col>
              <Col>
                <h2 className="mb-0">4.5<span className="text-purple mb-0">M</span></h2>
                <p className="mb-0">View this project got across our social media network</p>
              </Col>
              <Col>
                <h2 className="mb-0">$12.8<span className="text-pink mb-0">M</span></h2>
                <p className="mb-0">Total raised in funding so far</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Result