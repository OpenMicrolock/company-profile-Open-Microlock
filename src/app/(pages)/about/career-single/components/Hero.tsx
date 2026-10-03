import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-dark position-relative overflow-hidden pt-xl-8 pb-sm-7" data-bs-theme="dark">
      <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
        <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5">
        <Row className="g-4 align-items-center">
          <Col md={7} xl={5}>
            <Link href="" className="text-body-secondary text-primary-hover icon-link icon-link-hover"><IconifyIcon icon='bi:arrow-left' className=" me-1" />Back to listing</Link>
            <h1 className="h2 mt-3 mb-0">Machine Learning Specialist</h1>
          </Col>
          <Col md={4} className="ms-auto text-md-end">
            <Button variant='success' className="icon-link icon-link-hover" data-bs-toggle="modal" data-bs-target="#applyForm">Apply now<IconifyIcon icon='bi:arrow-right'  /> </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero