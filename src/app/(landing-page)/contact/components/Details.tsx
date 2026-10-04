import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Details = () => {
  return (
    <section className="position-relative overflow-hidden pb-0">
      <Container>
        <Row className="g-lg-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <h5>How can we help you?</h5>
            <p className="lead mb-4">Get in touch with us to see how we can help you with your project</p>
            <form className="row form-border-bottom g-4">
              <Col md={6}>
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="What's Your good name?" />
                  <span className="focus-border" />
                  <span className="position-absolute top-50 end-0 translate-middle-y"><IconifyIcon icon='bi:emoji-smile' /></span>
                </div>
              </Col>
              <Col md={6}>
                <div className="position-relative">
                  <input type="email" className="form-control" placeholder="Enter your email address" required />
                  <span className="focus-border" />
                  <span className="position-absolute top-50 end-0 translate-middle-y"><IconifyIcon icon='bi:envelope' /></span>
                </div>
              </Col>
              <Col xs={12}>
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="How can we help you?" />
                  <span className="focus-border" />
                  <span className="position-absolute top-50 end-0 translate-middle-y"><IconifyIcon icon='bi:journals'  /></span>
                </div>
              </Col>
              <Col xs={12}>
                <div className="position-relative">
                  <textarea className="form-control" id="floatingTextarea2" style={{ height: 100 }} placeholder="Describe about your project" defaultValue={""} />
                  <span className="focus-border" />
                  <span className="position-absolute top-0 end-0"><IconifyIcon icon='bi:chat-square-dots' /></span>
                </div>
              </Col>
              <Col xs={12} className="mt-4">
                <button className="btn btn-primary-grad mb-0">Send a message</button>
              </Col>
            </form>
          </Col>
          <Col lg={6} xxl={5} className="ms-auto">
            <Card className="card-body bg-secondary bg-opacity-50 rounded-4 p-4 p-sm-5 mb-4">
              <h5 className="mb-4">Get in touch</h5>
              <div className="d-sm-flex gap-3 mb-4">
                <div className="icon-lg bg-body shadow-primary heading-color rounded-circle flex-shrink-0"><IconifyIcon icon='bi:telephone'  /></div>
                <div className="mt-3 mt-sm-0">
                  <p className="mb-1">Feel free to call us.</p>
                  <ul className="list-inline d-flex flex-wrap gap-sm-3 mb-0">
                    <li className="list-inline-item"> <Link href="" className="fw-semibold heading-color text-primary-hover">+(251) 854-6308</Link></li>
                    <li className="list-inline-item"> <Link href="" className="fw-semibold heading-color text-primary-hover">+(469) 537-2410</Link></li>
                  </ul>
                </div>
              </div>
              <div className="d-sm-flex gap-3 mb-4">
                <div className="icon-lg bg-body shadow-primary heading-color rounded-circle flex-shrink-0"><IconifyIcon icon='bi:envelope' /></div>
                <div className="mt-3 mt-sm-0">
                  <p className="mb-1">Join our growing team.</p>
                  <Link href="" className="fw-semibold heading-color text-primary-hover mb-0">example@gmail.com</Link>
                </div>
              </div>
              <div className="d-sm-flex gap-3">
                <div className="icon-lg bg-body shadow-primary heading-color rounded-circle flex-shrink-0"><IconifyIcon icon='bi:pin-map-fill' /></div>
                <div className="mt-3 mt-sm-0">
                  <p className="mb-1">Are you ready for coffee?</p>
                  <p className="fw-semibold heading-color mb-0">55/123 Norman street, Banking road, Sydney NSW 5000</p>
                </div>
              </div>
            </Card>
            <ul className="list-inline d-sm-flex align-items-center justify-content-center mb-0">
              <li className="list-inline-item heading-color fw-semibold me-sm-3">Connect with:</li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-facebook" href="#"><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-instagram" href="#"><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-twitter-x" href="#"><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-xs btn-icon bg-linkedin" href="#"><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Details