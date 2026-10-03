import React from 'react'
import { coreValueData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const CoreValue = () => {
  return (
    <section className="pt-0">
      <Container>
        <h2 className="text-center mb-4 mb-lg-5">Principles for your finance</h2>
        <Row className="g-4 g-lg-5">
          {
            coreValueData.map((item, idx) => (
              <Col sm={6} xl={3} key={idx}>
                <div className="bg-secondary-grad rounded-4 p-4">
                  <div className={`icon-lg bg-body ${item.variant} shadow-primary rounded-circle mb-4`}>
                    <IconifyIcon icon={item.icon} className="fa-lg" />
                  </div>
                  <h6 className="mb-2">{item.title}</h6>
                  <p className="mb-0">{item.description}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default CoreValue