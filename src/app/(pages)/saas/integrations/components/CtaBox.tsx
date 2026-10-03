import Image from 'next/image'
import React from 'react'
import gradShapeImg from '@/assets/images/elements/grad-shape/05.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const CtaBox = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="bg-secondary-grad position-relative rounded-3 overflow-hidden p-4 p-sm-6">
          <div className="position-absolute end-0 top-0 rotate-343 mt-n5 d-none d-md-block">
            <Image src={gradShapeImg} height={400} className="h-400px opacity-8 blur-2" alt="bg pattern" />
          </div>
          <Row className="g-4 align-items-center position-relative">
            <Col xl={6}>
              <h2>Elevate your business to the next level</h2>
              <p className="mb-0">Explore the possibilities and discover how integrating with [Your SaaS Product] can take your business to the next level.</p>
            </Col>
            <Col xl={6} className=" text-xl-end">
              <Link href="" className="btn btn-dark mb-0">Optimize Your Workflow</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CtaBox