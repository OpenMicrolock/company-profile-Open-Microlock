import React from 'react'
import { detailBoxData } from '../data'
import Image from 'next/image'
import servicesImg from '@/assets/images/services/01.jpg'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, Col, Container, Row } from 'react-bootstrap'

import icons8 from '@/assets/images/client/icons/08.svg'
import icons4 from '@/assets/images/client/icons/04.svg'
import icons12 from '@/assets/images/client/icons/12.svg'
import icons9 from '@/assets/images/client/icons/09.svg'
import icons5 from '@/assets/images/client/icons/05.svg'
import icons3 from '@/assets/images/client/icons/03.svg'
import icons2 from '@/assets/images/client/icons/02.svg'
import icons10 from '@/assets/images/client/icons/10.svg'
import Link from 'next/link'

const WebDevelopment = () => {
  return (
    <Row className="g-4 mt-5 mt-md-7">
      <Col lg={6} className="pe-lg-6">
        <Image src={servicesImg} className="rounded-4" alt="service image" />
      </Col>
      <Col lg={6}>
        <h2>What's included in web development?</h2>
        <Accordion defaultActiveKey='1' className="accordion-icon accordion-icon-start mt-4" id="accordionExample2">
          <AccordionItem eventKey='1' className="mb-2">
            <AccordionHeader as={'h6'} id="heading-1">
              <span className="lead fw-bold">Frontend development</span>
            </AccordionHeader>
            <AccordionBody>
              We use the latest technologies like HTML5, CSS3, JavaScript, and frameworks such as React and Angular to create stunning interfaces that provide seamless user experiences across all devices.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey='2' className="mb-2">
            <AccordionHeader as={'h6'} id="heading-2">
              <span className="lead fw-bold">Backend development</span>
            </AccordionHeader>
            <AccordionBody>
              We build robust and scalable backend systems that power your website. Our expertise includes server-side scripting, database management, and API integration using technologies like Node.js, Python, Ruby on Rails, and PHP. We ensure your website performs efficiently and securely.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey='3' className="mb-2">
            <AccordionHeader as={'h6'} id="heading-3">
              <span className="lead fw-bold">E-commerce solutions</span>
            </AccordionHeader>
            <AccordionBody>
              Transform your business with our comprehensive e-commerce solutions. We develop custom online stores with features like product catalogs, shopping carts, payment gateways, and inventory management. Our solutions are designed to enhance user experience and boost sal
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey='4' className="mb-2">
            <AccordionHeader as={'h6'} id="heading-4">
              <span className="lead fw-bold">Content management systems (CMS)</span>
            </AccordionHeader>
            <AccordionBody>
              We offer custom CMS development and integration services to give you full control over your website content. Our expertise includes popular platforms like WordPress, Joomla, and Drupal. We create intuitive interfaces that make it easy to update and manage your website.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey='5' className="mb-2">
            <AccordionHeader as={'h6'} id="heading-5">
              <span className="lead fw-bold">Custom web applications</span>
            </AccordionHeader>
            <AccordionBody>
              Our team develops bespoke web applications tailored to your specific business needs. Whether you need a custom CRM, ERP, or any other type of web application, we leverage the latest technologies to deliver solutions that enhance your business processes.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
    </Row>
  )
}

const TechnologiesBox = () => {
  const icons = [icons8, icons4, icons12, icons9, icons5, icons3, icons2, icons10]
  return (
    <div className="inner-container text-center mt-7">
      <h4>Technologies used</h4>
      <ul className="list-inline d-flex justify-content-center flex-wrap gap-4 mt-4">
        {
          icons.map((icon, idx) => (
            <li className="list-inline-item me-0" key={idx}>
              <Link href="" className="icon-xl btn-transition bg-body d-flex justify-content-center align-items-center rounded-2">
                <Image src={icon} className="h-40px" alt="icon" />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const Detail = () => {
  return (
    <section className="bg-secondary-grad overflow-hidden mt-6 pt-7">
      <Container className="pb-8">
        <h5 className="mb-4">Key benefits</h5>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4">
          {
            detailBoxData.map((item, idx) => (
              <Col key={idx}>
                <Card className="card-body h-100 rounded-3 p-4">
                  <h6 className="mb-3">{item.title}</h6>
                  <p className="mb-0">{item.description}</p>
                </Card>
              </Col>
            ))
          }
        </Row>
        <WebDevelopment />
        <TechnologiesBox />
      </Container>
    </section>
  )
}

export default Detail