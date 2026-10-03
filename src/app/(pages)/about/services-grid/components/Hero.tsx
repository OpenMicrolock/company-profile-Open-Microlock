import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import serviceImg from '@/assets/images/elements/service-hero.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-dark position-relative pt-xl-8 pb-0 overflow-hidden">
      <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
        <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5" data-bs-theme="dark">
        <Row>
          <Col md={7} lg={5} className="text-center text-md-start">
            <nav className="mb-2 d-flex justify-content-center justify-content-md-start" aria-label="breadcrumb">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
            <h1 className="mb-4">Our Professional Services</h1>
            <Link href="/contact-1" className="btn btn-white mb-0"><IconifyIcon icon='bi:telephone' className="me-2" />Contact our experts</Link>
          </Col>
          <Col sm={10} md={5} className="ms-auto mt-5 mt-md-0">
            <Image src={serviceImg} alt="hero image" />
          </Col>
        </Row>
      </Container>
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n1 mb-md-n6" viewBox="0 0 1950 237" xmlSpace="preserve">
          <path className="fill-body" d="M1949.5,236.4H0v-164c717.2-131.2,1598.5-54.7,1949.5,0V236.4z" />
        </svg>
      </span>
    </section>
  )
}

export default Hero