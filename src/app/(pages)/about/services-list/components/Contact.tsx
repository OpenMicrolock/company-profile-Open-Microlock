import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="pb-0 overflow-hidden">
      <div className="bg-secondary-grad position-relative pb-8">
        <span>
          <svg className="position-abslolute top-0 start-0 mt-n3 mt-sm-n1" viewBox="0 0 1920 108" xmlSpace="preserve">
            <path className="fill-body" d="M0,0l1920,1.5V108L0,0z" />
          </svg>
        </span>
        <Container className="position-relative pt-5 pt-lg-0">
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <span className="hand-wave-animate h2">🖐️</span>
              <h2 className="mb-3 h1">Say Hello</h2>
              <p>Our friendly team is ready to assist you with whatever you need.</p>
              <Row className="row-cols-1 row-cols-sm-2 g-4 mt-3 mt-md-5">
                <Col>
                  <span className="fs-3 text-primary-grad"><IconifyIcon icon='bi:headset' /></span>
                  <h6 className="my-2 my-sm-3">Call us</h6>
                  <p className="mb-2">Let's work together towards a common goal - get in touch!</p>
                  <Link href="" className="heading-color hover-underline-animation">+91 222 555 666</Link>
                </Col>
                <Col>
                  <span className="fs-3 text-primary-grad"><IconifyIcon icon='bi:envelope' /></span>
                  <h6 className="my-2 my-sm-3">Email us</h6>
                  <p className="mb-2">We respond to all inquiries within 24 hours.</p>
                  <Link href="" className="heading-color hover-underline-animation">example@gmail.com</Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="ms-auto mt-5 mt-lg-n7">
              <Card className="card-body rounded-4 shadow-primary-lg p-4">
                <form className="row form-border-transparent g-3">
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
                    <input type="email" className="form-control bg-secondary" id="floatingInput" />
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
                    <textarea className="form-control bg-secondary" id="floatingTextarea2" style={{ height: 150 }} defaultValue={""} />
                  </Col>
                  <Col xs={12} className="mt-4">
                    <button className="btn btn-primary mb-2 mb-md-0">Send a message</button>
                  </Col>
                </form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Contact