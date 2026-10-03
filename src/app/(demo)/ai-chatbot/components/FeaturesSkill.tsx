import Image from 'next/image'
import React from 'react'
import aboutImg from '@/assets/images/about/14.jpg'
import chatMsgImg from '@/assets/images/elements/chat-msg.svg'
import { Col, Container, Row } from 'react-bootstrap'

const FeaturesSkill = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="align-items-xl-center">
          <Col lg={6} className="position-relative order-2 pe-xl-7">
            <Image src={aboutImg} className="rounded-4" alt="feature image" />
            <Image src={chatMsgImg} className="position-absolute top-0 start-50 translate-middle ms-n9 mt-n5 rotate-13 d-none d-sm-block" alt='chatMsgImg' />
          </Col>
          <Col lg={6} className="ms-auto order-1 order-lg-2 mb-4 mb-sm-6 mb-lg-0">
            <h4 className="mb-0">"AI chatbots innovate conversations with insights from extensive knowledge repositories"</h4>
            <div className="mt-4">
              <p className="lead heading-color fw-semibold mb-0">Jacqueline Miller</p>
              <span>CEO &amp; Founder</span>
            </div>
            <hr className="my-4 border-primary opacity-2" />
            <Row className="row-cols-2 row-cols-md-3 g-3 g-sm-4">
              <Col>
                <h2 className="mb-0">5<span className="text-primary">x</span></h2>
                <p className="mb-0">Boost content production</p>
              </Col>
              <Col>
                <h2 className="mb-0">85<span className="text-purple">%</span></h2>
                <p className="mb-0">Save time on prospecting efforts</p>
              </Col>
              <Col>
                <h2 className="mb-0">68<span className="text-pink">%</span></h2>
                <p className="mb-0">Reduce editing time</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturesSkill