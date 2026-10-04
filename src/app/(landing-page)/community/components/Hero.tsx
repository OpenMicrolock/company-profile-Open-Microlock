import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import patternImg from '@/assets/images/elements/bg-pattern.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="position-relative pt-8 pt-xl-9 overflow-hidden">
      <div className="position-absolute end-0 top-0">
        <Image src={decorationImg} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <div className="position-absolute start-0 top-0">
        <Image src={decorationImg} className="opacity-2 blur-9 h-300px rotate-335" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-0">
        <Image src={patternImg} style={{ opacity: '0.05' }} alt="bg pattern" />
      </div>
      <Container className="position-relative">
        <Row>
          <Col md={7} className="mx-auto text-center">
            <h1 className="mb-4">Meet our experts</h1>
            <p className="mb-0">Our dedicated team is passionate about delivering exceptional results that exceed your expectations.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero