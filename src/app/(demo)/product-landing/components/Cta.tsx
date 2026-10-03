import Image from 'next/image'
import React from 'react'
import videoImg from '@/assets/images/product/video-cta.jpg'
import arrivalImg from '@/assets/images/product/arrival-cta.jpg'
import GlightBox from '@/components/GlightBox'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col md={6}>
            <Card className="rounded-4 overflow-hidden">
              <div className="bg-overlay bg-dark opacity-5" />
              <Image src={videoImg} className="img-fluid" alt="CTA image" />
              <div className="card-img-overlay d-flex flex-column align-items-start p-sm-5">
                <div className="mt-auto">
                  <h4 className="text-white mb-3">See our watches in action</h4>
                  <GlightBox href="https://www.youtube.com/embed/tXHviS-4ygo" className="btn btn-sm btn-primary mb-0" data-glightbox data-gallery="office-tour"><IconifyIcon icon='bi:play-fill' className="me-2" />Play video</GlightBox>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="rounded-4 overflow-hidden">
              <Image src={arrivalImg} className="img-fluid" alt="CTA image" />
              <div className="card-img-overlay d-flex flex-column align-items-center text-center p-sm-5 mx-auto" style={{ maxWidth: '75%' }}>
                <span className="heading-color fw-bold mb-2">New arrival</span>
                <h4 className="text-white mb-3">Hurricane smart watch pro at $89 USD</h4>
                <Link href="#" className="btn btn-sm btn-dark mb-0">Explore now</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta