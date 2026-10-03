'use client'
import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <section className="position-relative z-index-2 py-0">
      <Container fluid className=" position-relative">
        <div className="max-width-1550 bg-secondary bg-opacity-50 position-relative rounded-4 overflow-hidden px-3 py-4 py-sm-6 py-lg-8">
          <div className="position-absolute top-0 end-0 mt-n6">
            <Image src={decorationImg} className="rotate-270 blur-8 opacity-2" alt="Grad shape" />
          </div>
          <Container>
            <Row className=" g-4">
              <Col lg={7} className="">
                <span className="text-primary-grad fw-semibold">About me</span>
                <h2 className="my-3">I’ve been developing websites since 2009</h2>
                <p className="mb-4">I’m passionate about web development and UI design, specializing in creating visually stunning and highly functional digital experiences. My journey since 2009 has equipped me with a diverse skill set to deliver tailored solutions for my clients.</p>
                <ul className="list-inline d-flex flex-wrap gap-2 align-items-center mb-0">
                  <li className="list-inline-item heading-color fw-semibold me-sm-3">Follow me on:</li>
                  <li className="list-inline-item"> <Link className="btn btn-sm bg-facebook mb-0" href=""><IconifyIcon icon='bi-facebook' className=" lh-base" /> Facebook</Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-sm bg-instagram-gradient mb-0" href=""><IconifyIcon icon='bi-instagram' className=" lh-base" /> Instagram</Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-sm bg-twitter-x mb-0" href=""><IconifyIcon icon='bi-twitter-x' className=" lh-base" /> Twitter</Link> </li>
                  <li className="list-inline-item"> <Link className="btn btn-sm bg-linkedin mb-0" href=""><IconifyIcon icon='bi-linkedin' className=" lh-base" /> Linkedin</Link> </li>
                </ul>
              </Col>
              <Col lg={4} className=" ms-auto">
                <Row>
                  <Col xs={12} className="border-bottom border-primary border-opacity-25 mb-3">
                    <div className="d-flex mb-2">
                      <h4 className="purecounter display-4 mb-0" data-purecounter-start={0} data-purecounter-end={14} data-purecounter-delay={300}>
                        <CountUp duration={3} start={0} end={14} />
                      </h4>
                      <span className="display-4 text-primary mb-0">+</span>
                    </div>
                    <p className="lead heading-color pb-3">Years of experience</p>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex mb-2">
                      <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={68} data-purecounter-delay={300}>
                        <CountUp duration={3} start={0} end={68} />
                      </h4>
                      <span className="h2 mb-0">+</span>
                    </div>
                    <p className="heading-color">Successful projects</p>
                  </Col>
                  <Col sm={6}>
                    <div className="d-flex mb-2">
                      <h4 className="purecounter h2 mb-0" data-purecounter-start={0} data-purecounter-end={105} data-purecounter-delay={300}>
                        <CountUp duration={3} start={0} end={105} />
                      </h4>
                      <span className="h2 mb-0">+</span>
                    </div>
                    <p className="heading-color">Satisfied clients</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default About