import Image from 'next/image'
import React from 'react'
import aboutImg from '@/assets/images/about/10.jpg'
import gradShapeImg from '@/assets/images/elements/grad-shape/02.png'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Video = () => {
  return (
    <section className="pt-0">
      <div className="bg-parallax position-relative h-400px h-xl-600px overflow-hidden" style={{ background: `url(${aboutImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-overlay bg-dark opacity-1" />
        <div className="position-absolute top-50 start-50 translate-middle z-index-2">
          <GlightBox href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-icon btn-xl btn-white btn-round mb-0" data-glightbox data-gallery="Video"><IconifyIcon icon='bi-play-fill' className="fa-lg" /></GlightBox>
        </div>
      </div>
      <Container className="mt-n5 mt-xl-n7">
        <div className="bg-dark position-relative rounded-4 overflow-hidden p-4 p-md-5 p-lg-6" data-bs-theme="dark">
          <div className="position-absolute top-0 start-0 mt-n7 ms-n5">
            <Image src={gradShapeImg} className="blur-7 opacity-3" alt="Grad shape" />
          </div>
          <Row className="g-4 align-items-center position-relative">
            <Col lg={6} className="text-center text-lg-start">
              <h2 className="h3 mb-3">Need finance guidance?</h2>
              <p className="mb-0">We've always worked very hard to give our customers the best experience.</p>
            </Col>
            <Col lg={4} className="ms-auto text-end">
              <div className="heading-color text-center mb-3"> <span className="fs-2 fw-bold">$9.99</span> /per hour</div>
              <Link href="" className="btn btn-primary-grad mb-0 w-100"><IconifyIcon icon='bi-telephone' className="me-2" />Book call!</Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Video