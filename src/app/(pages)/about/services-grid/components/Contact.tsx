import Image from 'next/image'
import React from 'react'
import gradShapeImg from '@/assets/images/elements/grad-shape/10.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className="bg-secondary-grad position-relative overflow-hidden">
      <div className="position-absolute bottom-0 start-0 mb-n9 d-none d-sm-block">
        <Image src={gradShapeImg} height={700} className="rotate-270 h-500px h-lg-700px" alt="decoration shape" />
      </div>
      <Container className=" position-relative">
        <Row className="g-4">
          <Col lg={5}>
            <h2 className="mb-3">Let's level up your brand, together</h2>
            <p>Reach us anytime at <Link href="">example@gmail.com</Link></p>
          </Col>
          <Col lg={6} className="ms-auto">
            <form className="row form-border-transparent g-3">
              <Col md={6}>
                <label className="form-label">Your name</label>
                <input type="text" className="form-control" placeholder="Full name" />
              </Col>
              <Col md={6}>
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              </Col>
              <Col xs={12}>
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject name" />
              </Col>
              <Col xs={12}>
                <label className="form-label">Message</label>
                <textarea className="form-control" placeholder="Write your message here...." id="floatingTextarea2" style={{ height: 150 }} defaultValue={""} />
              </Col>
              <Col xs={12} className="d-xl-flex align-items-center gap-3 mt-4">
                <button className="btn btn-primary text-nowrap mb-2 mb-xl-0">Send a message</button>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input border" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">I agree that my data is <Link href="" className=" hover-underline-animation text-primary-hover">collected and stored</Link>.</label>
                </div>
              </Col>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact