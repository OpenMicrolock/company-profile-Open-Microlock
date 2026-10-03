import Image from 'next/image'
import React from 'react'
import rocketImg from '@/assets/images/elements/rocket-02.png'
import about13Img from '@/assets/images/about/13.jpg'
import trustpilotImg from '@/assets/images/elements/trustpilot-light.svg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const ChooseUs = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col md={6} className="position-relative">
            <div className="position-absolute top-0 start-0 ms-xl-5">
              <Image src={rocketImg} height={150} className="h-150px rotate-335" alt="rocket image" />
            </div>1
            <Row className="ps-xl-7">
              <Col sm={8}>
                <Image src={about13Img} className="rounded-pill" alt="image" />
              </Col>
              <Col sm={4} md={8} lg={5} className="mt-auto ms-lg-n5 mb-5">
                <Card className="shadow rounded text-center p-0">
                  <CardBody className="p-3">
                    <h6 className="h1">4.8</h6>
                    <ul className="list-inline d-flex justify-content-center gap-2 mb-1">
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                      <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                    </ul>
                    <span>2855 Reviews</span>
                  </CardBody>
                  <CardFooter className="bg-dark p-3">
                    <Image src={trustpilotImg} className="h-30px" alt='trustpilotImg' />
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={5} className="ms-auto mt-5 mt-md-0">
            <h2>Why choose us?</h2>
            <Accordion defaultActiveKey='1' className="accordion-icon accordion-border-bottom mt-5" id="accordionFaq">
              <AccordionItem eventKey='1' className=" mb-3">
                <AccordionHeader className=" font-base" id="heading-1">
                    <span className="lead">Rapid prototype development</span>
                </AccordionHeader>
                  <AccordionBody className="pb-0">
                    Our expert team delivers a functional prototype within 24 hours, ensuring rapid progress and immediate feedback.
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='2' className=" mb-3">
                <AccordionHeader className=" font-base" id="heading-2">
                    <span className="lead">Client-Centric approach</span>
                </AccordionHeader>
                  <AccordionBody className="pb-0">
                    We provide a range of tools, guides, and best practices to help you create designs, websites.
                  </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey='3' className=" mb-3">
                <AccordionHeader className=" font-base" id="heading-3">
                    <span className="lead">24/7 tech &amp; business support</span>
                </AccordionHeader>
                  <AccordionBody className="pb-0">
                    We provide a range of tools, guides, and best practices to help you create designs, websites.
                  </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs