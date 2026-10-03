import Image from 'next/image'
import React from 'react'
import portfolio9 from '@/assets/images/portfolio/3by4/09.jpg'
import portfolio6 from '@/assets/images/portfolio/3by4/06.jpg'
import portfolio1 from '@/assets/images/portfolio/3by4/01.jpg'
import GlightBox from '@/components/GlightBox'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Images = () => {
  return (
    <section className="py-0 mb-n9">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col xs={6} md={4}>
            <GlightBox href={portfolio9.src} data-glightbox data-gallery="image-popup">
              <Image src={portfolio9} className="rounded" alt="portfolio-img" />
            </GlightBox>
          </Col>
          <Col xs={6} md={4}>
            <GlightBox href={portfolio6.src} data-glightbox data-gallery="image-popup">
              <Image src={portfolio6} className="rounded" alt="portfolio-img" />
            </GlightBox>
          </Col>
          <Col xs={6} md={4}>
            <GlightBox href={portfolio1.src} data-glightbox data-gallery="image-popup">
              <Image src={portfolio1} className="rounded" alt="portfolio-img" />
            </GlightBox>
          </Col>
          <Col xs={12}>
            <div className="bg-parallax rounded h-400px h-xl-500px overflow-hidden" data-jarallax data-speed="0.6" style={{ background: `url(${portfolio4.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Images