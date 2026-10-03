import Image from 'next/image'
import React from 'react'
import chatbotImg from '@/assets/images/elements/saas-decoration/chatbot-03.png'
import { featuresData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const FeaturesAccordion = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 align-items-xl-center">
          <Col lg={6} xl={5} className="order-2">
            <div className="bg-secondary-grad rounded-4 position-relative p-4">
              <Image src={chatbotImg} alt="Saas image" />
            </div>
          </Col>
          <Col lg={6} className="ms-auto order-1 order-lg-2">
            <h2 className="mb-4 mb-lg-5">Boost productivity with intelligent automation</h2>
            <Accordion defaultActiveKey='collapse-1' className="accordion-border-start mb-sm-5" id="accordionFaq">
              {
                featuresData.map((item, idx) => (
                  <AccordionItem eventKey={item.eventKey} className="mb-4" key={idx}>
                    <AccordionHeader className="font-base fw-semibold rounded" id="heading-1">
                        <span className="heading-icon"><IconifyIcon icon={item.icon} /></span>
                        <span className="fw-semibold">{item.title}</span>
                    </AccordionHeader>
                      <AccordionBody className="pt-0 pt-0">
                        {item.content}
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

export default FeaturesAccordion