import Image from 'next/image'
import React from 'react'
import grad5 from '@/assets/images/elements/grad-shape/05.png'
import grad11 from '@/assets/images/elements/grad-shape/11.png'
import { Button, Col, Container, Row } from 'react-bootstrap'

const CtaBox = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-secondary position-relative rounded-3 overflow-hidden p-4 p-sm-6">
          <div className="position-absolute end-0 top-0 rotate-343 mt-n5 me-n8">
            <Image src={grad5} height={500} className="h-200px h-md-300px h-lg-500px" alt="bg pattern" />
          </div>
          <div className="position-absolute start-0 top-0 rotate-343 mt-n5 ms-n6">
            <Image src={grad11} width={200} className="h-200px blur-2" alt="bg pattern" />
          </div>
          <Row className="g-4 align-items-center position-relative">
            <Col xl={8}>
              <h5 className="fw-light">Have a project in mind?</h5>
              <h2 className="h1 fw-bold">Let’s get to <span className="text-primary-grad"> work.</span></h2>
            </Col>
            <Col xl={4} className="text-xl-end">
              <Button variant='dark' className="mb-0">Get in touch</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CtaBox