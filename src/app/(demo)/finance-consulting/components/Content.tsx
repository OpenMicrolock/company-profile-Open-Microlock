import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'

const Content = () => {
  return (
    <section className="position-relative z-index-2 pt-0">
      <Container>
        <Row>
          <Col lg={6} xl={5} className="pt-5 pt-xl-7 order-2">
            <h5 className="mb-4 mb-xl-5">Achieving financial excellence together</h5>
            <Row className=" g-4">
              <Col md={6}>
                <h6 className="mb-2"><IconifyIcon icon='bi-lightning-charge-fill' className="text-success me-2" />Our mission</h6>
                <p className="mb-0">We deliver exceptional financial consulting services tailored to your unique needs.</p>
              </Col>
              <Col md={6}>
                <h6 className="mb-2"><IconifyIcon icon='bi-bullseye' className="text-warning me-2" />Our goal</h6>
                <p className="mb-0">We aim to help you grow and protect your wealth, ensuring a secure.</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xl={5} className="ms-auto mt-n6 mt-lg-n9 order-1 order-lg-2">
            <Card className="bg-dark rounded-4 mt-lg-n9" data-bs-theme="dark">
              <CardHeader className="bg-transparent pt-4">
                <h5 className="text-center">Book a consultant</h5>
              </CardHeader>
              <CardBody className="p-4 pt-0">
                <form className="row form-border-transparent g-4">
                  <Col md={6}>
                    <label className="form-label">First name</label>
                    <input type="text" className="form-control bg-secondary" />
                  </Col>
                  <Col md={6}>
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control bg-secondary" />
                  </Col>
                  <Col md={6}>
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control bg-secondary" />
                  </Col>
                  <Col md={6}>
                    <label className="form-label">Mobile number</label>
                    <input type="text" className="form-control bg-secondary" />
                  </Col>
                  <Col xs={12}>
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control bg-secondary" />
                  </Col>
                  <Col xs={12}>
                    <label className="form-label">Message</label>
                    <textarea className="form-control bg-secondary" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                  </Col>
                  <Col xs={12} className="mt-4">
                    <button className="btn btn-white mb-2 mb-md-0">Send a message</button>
                  </Col>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Content