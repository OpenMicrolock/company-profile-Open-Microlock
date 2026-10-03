import Image from 'next/image'
import React from 'react'
import gradShape from '@/assets/images/elements/grad-shape/08.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import aboutImg from '@/assets/images/about/04.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <section className="bg-secondary pt-0 overflow-hidden">
      <Container>
        <Row className="g-4">
          <Col lg={5}>
            <h2 className="mb-2 mb-lg-4">Leading the future of software innovation</h2>
            <p className="mb-2 mb-lg-4">Our expert team is dedicated to understanding your unique needs and delivering solutions that exceed expectations.</p>
            <ul className="list-group list-group-borderless mb-3 mb-lg-4">
              <li className="list-group-item d-flex heading-color fw-semibold pb-0"><IconifyIcon icon='bi-check-circle' className="text-primary me-2" />Collaborative approach</li>
              <li className="list-group-item d-flex heading-color fw-semibold pb-0"><IconifyIcon icon='bi-check-circle' className="text-primary me-2" />Agile development methodology</li>
              <li className="list-group-item d-flex heading-color fw-semibold pb-0"><IconifyIcon icon='bi-check-circle' className="text-primary me-2" />Data security and compliance</li>
            </ul>
            <div className="d-flex gap-3 flex-wrap">
              <Link href="/about/about-v2" className="btn btn-primary mb-0">Learn more</Link>
              <Link href="/contact-1" className="link-primary-grad icon-link icon-link-hover">Schedule a consultation <IconifyIcon icon='bi-arrow-right' /></Link>
            </div>
          </Col>
          <Col lg={6} className="position-relative ms-auto ps-lg-4">
            <div className="position-absolute start-0 bottom-0 ms-n6 mb-5 d-none d-sm-block">
              <Image src={gradShape} className="blur-1 z-index-9 position-relative" alt="shape decoration" />
            </div>
            <div className="position-absolute top-50 start-0 translate-middle-y ms-n4 mt-n7">
              <Image src={decorationImg} className="blur-7 opacity-1" alt="Grad shape" />
            </div>
            <Image src={aboutImg} className="rounded-4 position-relative z-index-2" alt="about image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About