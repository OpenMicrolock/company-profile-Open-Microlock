'use client'
import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import aboutImg from '@/assets/images/about/01.jpg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Work = () => {
  
  return (
    <section className="bg-dark position-relative overflow-hidden pt-0 pt-sm-5">
      <div className="position-absolute bottom-0 end-0 mb-n8">
        <Image src={decorationImg} className="opacity-2 blur-9" alt="Grad shape" />
      </div>
      <span className="position-absolute top-0 start-0">
        <svg className="text-secondary rtl-flip" width={1920} height={197} viewBox="0 0 1920 197" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1920V5.5L0 197V0Z" fill="currentColor" />
        </svg>
      </span>
      <Container className="position-relative pt-lg-8 pt-xl-0" data-bs-theme="dark">
        <Row className="align-items-end align-items-xxl-center">
          <Col md={9} lg={6} className="mx-auto pe-xl-7">
            <Image src={aboutImg} className="rounded-4" alt="process image" />
          </Col>
          <Col lg={6} className="mt-5 mt-xl-7">
            <span className="text-primary lead">Our process</span>
            <h2 className="mt-3 mb-4">Streamline your path to success</h2>
            <Accordion defaultActiveKey={'1'} className="accordion-step-border" id="accordionFaq">
              <AccordionItem eventKey='1' className="accordion-item">
                <AccordionHeader className="font-base" id="heading-1">
                    <span className="accordion-step-number">01</span> Consultation &amp; Strategy
                </AccordionHeader>
                  <AccordionBody className="pt-0">
                    We begin by understanding your goals, challenges, and vision. Through in-depth consultation, we craft a tailored strategy that aligns with your objectives.
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='2' className="accordion-item">
                <AccordionHeader className="font-base" id="heading-2">
                    <span className="accordion-step-number">02</span> Implementation &amp; Development
                </AccordionHeader>
                  <AccordionBody className="pt-0">
                    We provide a range of tools, guides, and best practices to help you create designs, websites, and content that are inclusive and accessible to all individuals, regardless of their visual abilities.
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='3' className="accordion-item">
                <AccordionHeader className="font-base" id="heading-3">
                    <span className="accordion-step-number">03</span> Refinement &amp; Delivery
                </AccordionHeader>
                  <AccordionBody className="pt-0">
                    This crucial process ensures that content is easily readable and perceivable by individuals with varying degrees of visual impairment. By adhering to accessibility standards, you create a more inclusive and user-friendly experience for all users, regardless of their visual abilities, and contribute to a more accessible digital environment.
                  </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <Row className="g-4 mt-5 mt-sm-6 mt-md-8">
          <Col sm={6} md={3}>
            <div className="d-flex h-100 pe-xl-4">
              <div>
                <div className="d-flex mb-2 mb-sm-6">
                  <h4 className="purecounter h1 mb-0" data-purecounter-start={0} data-purecounter-end={22} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={22} />
                  </h4>
                  <span className="h1 text-primary mb-0">+</span>
                </div>
                <p className="lead">Years of experience</p>
              </div>
              <div className="vr bg-white bg-opacity-25 ms-auto d-none d-sm-block" />
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="d-flex h-100 pe-xl-4">
              <div>
                <div className="d-flex mb-2 mb-sm-6">
                  <h4 className="purecounter h1 mb-0" data-purecounter-start={0} data-purecounter-end={200} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={200} />
                  </h4>
                  <span className="h1 text-pink mb-0">+</span>
                </div>
                <p className="lead">In-house projects completed</p>
              </div>
              <div className="vr bg-white bg-opacity-25 ms-auto d-none d-sm-block" />
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="d-flex h-100 pe-xl-4">
              <div>
                <div className="d-flex mb-2 mb-sm-6">
                  <h4 className="purecounter h1 mb-0" data-purecounter-start={0} data-purecounter-end={32} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={32} />
                  </h4>
                  <span className="h1 text-info mb-0">+</span>
                </div>
                <p className="lead">Awards and counting</p>
              </div>
              <div className="vr bg-white bg-opacity-25 ms-auto d-none d-sm-block" />
            </div>
          </Col>
          <Col sm={6} md={3}>
            <div className="d-flex">
              <div>
                <div className="d-flex mb-2 mb-sm-6">
                  <span className="h1 mb-0">&gt;</span>
                  <h4 className="purecounter h1 mb-0" data-purecounter-start={0} data-purecounter-end={10} data-purecounter-delay={300}>
                  <CountUp duration={3} start={0} end={10} />
                  </h4>
                  <span className="h1 text-warning mb-0">K</span>
                </div>
                <p className="lead">Satisfied users</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work