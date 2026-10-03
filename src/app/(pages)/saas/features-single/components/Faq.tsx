import Image from 'next/image'
import React from 'react'
import gradShapeImg from '@/assets/images/elements/grad-shape/05.png'
import { faqData } from '../data'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Faq = () => {
  return (
    <section className="position-relative overflow-hidden">
      <Container className="position-relative">
        <Row className="g-4">
          <Col md={4}>
            <h2 className="mb-3">Frequently Asked Questions</h2>
            <p className="mb-0">Our team is ready to assist you! Start a chat for quick support. <Link href="" className="hover-underline-animation fw-semibold">Talk to Us</Link></p>
          </Col>
          <Col md={7} className="ms-auto">
            <Accordion defaultActiveKey='heading-1' className="accordion-icon accordion-border-bottom" id="accordionFaq">
              {
                faqData.map((item, idx) => (
                  <AccordionItem eventKey={item.id} className="mb-3" key={idx}>
                    <AccordionHeader className="font-base" id="heading-1">
                        <span className="lead heading-color">{item.question}</span>
                    </AccordionHeader>
                      <AccordionBody className="pb-0">
                        {item.answer}
                      </AccordionBody>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faq