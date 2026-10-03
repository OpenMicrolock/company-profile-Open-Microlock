import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const Benefits = () => {
  return (
    <section className="bg-dark overflow-hidden position-relative" data-bs-theme="dark">
      <div className="position-absolute bottom-0 end-0 mb-n8">
        <Image src={decoration2Img} className="opacity-2 blur-9" alt="Grad shape" />
      </div>
      <Container className="position-relative">
        <Row className="g-4">
          <Col lg={4}>
            <p className="heading-color">Key benefits</p>
            <ul className="list-group list-group-borderless mb-4">
              <li className="list-group-item heading-color lead d-flex"><IconifyIcon icon='bi:wallet2' className=" text-primary me-2" />No hidden fees</li>
              <li className="list-group-item heading-color lead d-flex"><IconifyIcon icon='bi:headset' className=" text-pink me-2" />24/7 Customer support</li>
              <li className="list-group-item heading-color lead d-flex"><IconifyIcon icon='bi:rocket-takeoff' className=" text-warning me-2" />Easy upgrade &amp; downgrade</li>
              <li className="list-group-item heading-color lead d-flex"><IconifyIcon icon='bi:clock-history' className=" text-success me-2" />You can cancel anytime</li>
            </ul>
          </Col>
          <Col lg={6} className="ms-auto">
            <Row className="g-4 g-lg-6 mb-5">
              <Col sm={6}>
                <h3 className="border-start border-primary border-2 ps-4 mb-3">2,000+</h3>
                <p className="mb-0">Customers have used our awesome templates since 2019</p>
              </Col>
              <Col sm={6}>
                <h3 className="border-start border-primary border-2 ps-4 mb-3">85+</h3>
                <p className="mb-0">Client's projects complete all over the world</p>
              </Col>
            </Row>
            <blockquote className="d-flex">
              <div className="avatar avatar-xl flex-shrink-0">
                <Image className="avatar-img rounded-circle" src={avatar6} alt="avatar" />
              </div>
              <div className="ms-4">
                <p className="fs-6 fw-normal heading-color mb-4">"We believe that it takes great people to deliver a great product"</p>
                <div className="blockquote-footer mb-0">
                  &nbsp;By Albert Schweitzer
                </div>
              </div>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits