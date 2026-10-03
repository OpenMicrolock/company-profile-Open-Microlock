import Image from 'next/image'
import React from 'react'
import about10 from '@/assets/images/about/10.jpg'
import about11 from '@/assets/images/about/11.jpg'
import about12 from '@/assets/images/about/12.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Gallery = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-lg-5">
          <Col md={7}  className="mb-5 mb-md-0">
            <Image src={about10} className="rounded-4 mb-5" alt="office image" />
            <Image src={about11} className="rounded-4 w-75 d-flex ms-auto me-md-5" alt="office image" />
          </Col>
          <Col md={4} className="ms-auto">
            <div className="text-end mb-5 mb-md-6">
              <h6 className="mb-0">Since</h6>
              <span className="display-2 text-primary-grad">2002</span>
            </div>
            <Image src={about12} className="rounded-4" alt="office image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery