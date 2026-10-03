import Image from 'next/image'
import React from 'react'
import gradShape from '@/assets/images/elements/grad-shape/12.png'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Faq = () => {
  return (
    <section className="bg-secondary pt-0 position-relative">
    <div className="position-absolute end-0 bottom-0 d-none d-sm-block">
      <Image src={gradShape} className="blur-2" alt="Decoration shape" />
    </div>
    <Container className="position-relative">
      <div className="inner-container position-relative text-center mb-4 mb-md-5">
        <h2 className="mb-0">Got questions? (FAQs)</h2>
      </div>
      <Row>
        <Col lg={8} className="mx-auto">
          <Accordion defaultActiveKey={'1'} className="accordion-bg-body-light" id="accordionFaq">
            <AccordionItem eventKey='1' className="mb-4">
              <AccordionHeader className="font-base" id="heading-1">
                  How do I get started with your service?
              </AccordionHeader>
                <AccordionBody className="accordion-body pt-0 pt-0">
                  The first step is to sign up for our service. You can do this by visiting our website and locating the sign-up or registration button. Click on it and follow the prompts to create your account.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='2' className="mb-4">
              <AccordionHeader className="font-base" id="heading-2">
                  What payment methods do you accept?
              </AccordionHeader>
                <AccordionBody className="accordion-body pt-0">
                  September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='3' className="mb-4">
              <AccordionHeader className="font-base" id="heading-3">
                  How can I contact your customer support team?
              </AccordionHeader>
                <AccordionBody className="accordion-body pt-0">
                  Agencies provide a wide range of services depending on their specialization. Some common services include advertising campaigns, digital marketing, branding, creative design, media planning and buying, public relations, talent management, event planning, and market research.
                </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey='4' className="mb-4">
              <AccordionHeader className="font-base" id="heading-4">
                  Do you offer custom solutions for businesses?
              </AccordionHeader>
                <AccordionBody className="accordion-body pt-0">
                  When selecting an agency, consider your specific requirements, budget, and the agency's expertise and track record in your industry. Research their portfolio, client testimonials, and case studies to gauge their capabilities. It's also important to meet with the agency to assess their communication style and ensure they align with your goals.
                </AccordionBody>
            </AccordionItem>
          </Accordion>
          <p className="heading-color text-center">Confused? Our team is ready to assist you! Start a chat for quick support. <Link href="#" className="hover-underline-animation fw-semibold">Talk to Us</Link></p>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Faq