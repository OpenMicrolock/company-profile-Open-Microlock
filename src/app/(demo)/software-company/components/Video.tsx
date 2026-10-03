import React from 'react'
import aboutImg from '@/assets/images/about/05.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import GlightBox from '@/components/GlightBox'
import Image from 'next/image'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Video = () => {
  return (
    <section className="bg-body position-relative overflow-hidden">
      <div className="bg-dark h-500px w-100 position-absolute top-0 start-0">
        <div className="position-absolute top-0 start-0 translate-middle">
          <Image src={decoration2Img} className="opacity-1 blur-8" alt="Grad shape" />
        </div>
        <span className="position-absolute start-0 bottom-0">
          <svg className="fill-body" width={1920} height={99} viewBox="0 0 1920 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 93L1946 0V99H0V93Z" />
          </svg>
        </span>
      </div>
      <Container className="position-relative">
        <Row className="mb-4 mb-md-6">
          <Col md={6}>
            <h2 className="text-white mb-0">Mastering every step of our methodology</h2>
          </Col>
        </Row>
        <div className="bg-parallax position-relative h-400px h-xl-500px rounded-4 overflow-hidden" style={{ background: `url(${aboutImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="bg-overlay bg-purple opacity-1" />
          <div className="position-absolute top-50 start-50 translate-middle z-index-2">
            <GlightBox href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-icon btn-xl btn-white btn-round mb-0" data-glightbox data-gallery="Video"><IconifyIcon icon='bi-play-fill' className="fa-lg" /></GlightBox>
          </div>
        </div>
        <div className="inner-container-small bg-body shadow-primary rounded-3 text-center py-3 mt-5">
          <p className="mb-0 px-2 px-sm-5 px-md-0">🚀 Need any help or questions, don't worry!
            <Link href="/contact-2" className="fw-semibold heading-color hover-underline-animation">Hit the button</Link>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Video