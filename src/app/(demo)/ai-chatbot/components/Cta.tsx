import Image from 'next/image'
import React from 'react'
import chatbotImg from '@/assets/images/elements/chatbot-cta.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-dark position-relative rounded-4 overflow-hidden p-4 p-sm-6" data-bs-theme="dark">
          <div className="position-absolute top-0 end-0 mt-n6">
            <Image src={decorationImg} className="blur-8 opacity-3" alt="Grad shape" />
          </div>
          <Row className="g-4 align-items-center position-relative">
            <Col lg={6}>
              <h2 className="mb-3">Experience the Power of <span className="text-purple">AI Chatbot</span></h2>
              <p className="mb-4">Our AI chatbot offers enhancing customer satisfaction and boosting your business efficiency.</p>
              <Link href="/pricing-1" className="btn btn-outline-secondary mb-0">Start free trial</Link>
            </Col>
            <Col lg={6} className="position-absolute end-0 top-0 mt-n3 me-n5 d-none d-lg-block">
              <Image src={chatbotImg} alt='chatbotImg' />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta