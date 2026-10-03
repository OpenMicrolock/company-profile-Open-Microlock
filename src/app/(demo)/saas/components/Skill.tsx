import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="border-top border-bottom border-primary mx-xl-6 py-4 py-xl-6 px-xl-4">
          <Row className="g-4">
            <Col sm={4}>
              <div className="d-flex justify-content-between">
                <div className="d-md-flex align-items-center">
                  <h4 className="h2 mb-0">99<span className="ms-1 text-primary">%</span></h4>
                  <p className="mb-0 ms-md-3">Track and analyze business reports</p>
                </div>
                <div className="vr bg-primary mx-2 opacity-2 d-none d-sm-block" />
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex justify-content-between">
                <div className="d-md-flex align-items-center">
                  <h4 className="h2 mb-0">4.8</h4>
                  <div className="ms-md-3">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                    </ul>
                    <p className="mb-0">Best rated company</p>
                  </div>
                </div>
                <div className="vr bg-primary mx-2 opacity-2 d-none d-sm-block" />
              </div>
            </Col>
            <Col sm={4}>
              <div className="d-flex justify-content-between">
                <div className="d-md-flex align-items-center">
                  <h4 className="h2 mb-0">95<span className="ms-1 text-purple">%</span></h4>
                  <p className="mb-0 ms-md-3">Genuine reputed happy customers</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section >
  )
}

export default Skill