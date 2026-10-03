import Image from 'next/image'
import React from 'react'
import emojiImg from '@/assets/images/elements/emoji.png'
import { serviceData, ServiceType } from '../data'
import { Card, CardFooter, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ServiceCard = ({ description, icon, title, variant }: ServiceType) => {
  return (
    <Card className="card-hover-shadow card-icon-transition text-center bg-body bg-opacity-50 bg-blur rounded-4 h-100 p-4">
      <div className={`card-icon icon-xl ${variant} d-flex justify-content-center align-items-center text-white rounded-circle`}>
        {icon}
      </div>
      <CardFooter className="bg-transparent mt-6 p-0">
        <h6 className="mb-3">{title}</h6>
        <p>{description}</p>
        <Link href="/about/services-single" className="link-primary-grad icon-link icon-link-hover stretched-link mb-0">Read more <i className="bi bi-arrow-right" /></Link>
      </CardFooter>
    </Card>
  )
}

const Services = () => {
  return (
    <section className="bg-secondary position-relative overflow-hidden pt-0">
      <Container className="position-relative">
        <div className="inner-container-small text-center mb-6 mb-lg-7">
          <h2 className="mb-0">Our expert services</h2>
        </div>
        <Row className="g-4 g-xl-5">
          {
            serviceData.map((item, idx) => (
              <Col sm={6} lg={4} className="mb-4" key={idx}>
                <ServiceCard {...item} />
              </Col>
            ))
          }
          <Col sm={6} lg={4} className="mb-4">
            <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
              <Image src={emojiImg} className="mb-3" alt='emojiImg' />
              <p>Not satisfied yet?</p>
              <Link href="/about/services-grid" className="btn btn-primary-grad mb-0">Explore all services</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services