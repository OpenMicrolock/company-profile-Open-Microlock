import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import chatbot2Img from '@/assets/images/elements/saas-decoration/chatbot-02.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { Col, Container, Row } from 'react-bootstrap'

const FeaturesListContent = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <h2 className="mb-md-4">Generate content effortlessly in minutes</h2>
            <p className="mb-md-4">Share your latest product updates directly in-app with visual notifications and interactive widgets for enhanced communication.</p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item d-flex heading-color fw-semibold"><IconifyIcon icon='bi:asterisk' className="text-primary me-2" />Boost feature adoption and engagement</li>
              <li className="list-group-item d-flex heading-color fw-semibold"><IconifyIcon icon='bi:asterisk' className="text-primary me-2" />Write creatively in any language</li>
              <li className="list-group-item d-flex heading-color fw-semibold"><IconifyIcon icon='bi:asterisk' className="text-primary me-2" />Scalable solutions for your growth</li>
              <li className="list-group-item d-flex heading-color fw-semibold"><IconifyIcon icon='bi:asterisk' className="text-primary me-2" />Unlock possibilities with advanced analytics</li>
            </ul>
          </Col>
          <Col lg={6} className=" position-relative ps-lg-5">
            <Image src={chatbot2Img} className="position-relative z-index-2" alt="chatbot feature image" />
            <div className="position-absolute top-50 start-50 translate-middle ms-n6">
              <Image src={decorationImg} className="blur-9 opacity-3" alt="Grad shape" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesListContent