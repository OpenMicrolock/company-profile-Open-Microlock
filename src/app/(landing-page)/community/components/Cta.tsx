import Image from 'next/image'
import React from 'react'
import patternImg from '@/assets/images/elements/geo-grad-pattern.svg'
import gradShapeImg from '@/assets/images/elements/grad-shape/10.png'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Cta = () => {
  return (
    <section className="bg-secondary-grad position-relative rounded-3 overflow-hidden py-6 py-sm-7">
      <div className="position-absolute end-0 top-0 rotate-13 mt-n5 me-n6 d-none d-sm-block">
        <Image src={patternImg} height={600} className="h-600px opacity-3" alt="bg pattern" />
      </div>
      <div className="position-absolute start-0 top-0 rotate-343 mt-n3 ms-n5 d-none d-xl-block">
        <Image src={gradShapeImg} height={500} className="h-500px" alt="bg pattern" />
      </div>
      <Container>
        <Row className="g-4 align-items-center position-relative">
          <Col xl={6}>
            <h2>Partner with our <span className="text-primary-grad">creative</span> team</h2>
            <p className="mb-0">Discover the difference a dedicated, creative, and strategic team can make for your business. </p>
          </Col>
          <Col xl={6} className="text-xl-end">
            <Button variant='dark' className="mb-0">Schedule a consultation</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta