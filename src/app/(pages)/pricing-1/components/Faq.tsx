import React from 'react'
import { faqData } from '../data'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Faq = () => {
  return (
    <section className="bg-secondary bg-opacity-75">
      <Container>
        <div className="inner-container position-relative text-center mb-4 mb-md-5">
          <h2 className="mb-0">Have questions? (FAQs)</h2>
        </div>
        <Row>
          <Col lg={8} className="mx-auto">
            <Accordion defaultActiveKey='heading-1' className="accordion-bg-body-light" id="accordionFaq">
              {
                faqData.map((item, idx) => (
                  <AccordionItem eventKey={item.eventKey} className=" mb-4" key={idx}>
                    <AccordionHeader className="font-base" id="heading-1">
                      {item.question}
                    </AccordionHeader>
                    <AccordionBody className=" pt-0 pt-0">
                      {item.answer}
                    </AccordionBody>
                  </AccordionItem>
                ))
              }
            </Accordion>
            <p className="heading-color text-center">Need help? Our team is ready to assist you. Start a chat for quick support. <Link href="" className="hover-underline-animation fw-semibold">Talk to Us</Link></p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faq