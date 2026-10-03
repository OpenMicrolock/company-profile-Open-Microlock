'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Skill = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={4}>
            <div className="d-flex justify-content-between">
              <div className="text-center">
                <div className="d-flex">
                  <h4 className="purecounter display-2 mb-0" data-purecounter-start={0} data-purecounter-end={105} data-purecounter-delay={300}>
                    <CountUp duration={3} start={0} end={105} />
                  </h4>
                  <span className="display-2 text-primary mb-0">+</span>
                </div>
                <p className="px-3 py-2 bg-body mt-n3 mt-md-n4 position-relative">Total projects completed</p>
              </div>
              <div className="vr bg-primary-grad opacity-1 my-3" />
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div className="d-flex justify-content-center">
              <h4 className="purecounter display-2 mb-0" data-purecounter-start={0} data-purecounter-end={35} data-purecounter-delay={300}>
                <CountUp duration={3} start={0} end={35} />
              </h4>
              <span className="display-2 text-purple mb-0">+</span>
            </div>
            <p className="px-3 py-2 bg-body mt-n3 mt-md-n4 position-relative">Awards and accolades</p>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-between">
              <div className="vr bg-primary-grad opacity-1 my-3" />
              <div className="text-center">
                <div className="d-flex">
                  <span className="display-2 heading-color mb-0">&gt;</span>
                  <h4 className="purecounter display-2 mb-0" data-purecounter-start={0} data-purecounter-end={10} data-purecounter-delay={300}>
                    <CountUp duration={3} start={0} end={10} />
                  </h4>
                  <span className="display-2 text-pink mb-0">K</span>
                </div>
                <p className="px-3 py-2 bg-body mt-n3 mt-md-n4 position-relative">Satisfied users</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skill