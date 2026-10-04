import React from 'react'
import textBgImg from '@/assets/images/about/text-bg.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import awardsImg from '@/assets/images/elements/awards-saly.png'
import fwaLightImg from '@/assets/images/elements/fwa-light.svg'
import clutchLightImg from '@/assets/images/elements/clutch-light.svg'
import webbyImg from '@/assets/images/elements/webby.svg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <section className="bg-secondary-grad pt-0 pb-1">
      <Container className="position-relative z-index-2">
        <Row>
          <Col xl={10} className="mx-auto">
            <Row className=" align-items-center g-4 g-lg-6 mb-6 mb-md-8">
              <Col sm={8} lg={5} className="position-relative mx-auto">
                <div className="text-bg-img text-center text-lg-start fw-bold lh-1" style={{ background: `url(${textBgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundClip: 'text' }}>2002</div>
                <h5 className="bg-body px-4 py-2 position-absolute top-0 start-0 rotate-335">Since</h5>
              </Col>
              <Col lg={7}>
                <h2 className="mb-4">Bringing ideas to life</h2>
                <p>Our creative experts blend innovation with strategy to turn your vision into reality.</p>
                <p className="mb-4">We believe great design is strategic. Our approach combines industry knowledge with creative insights to ensure your visual identity is impactful and results-driven.</p>
                <ul className="list-inline d-flex flex-wrap gap-2 gap-sm-4 mb-3">
                  <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-primary-grad me-1" />Creative design
                  </li>
                  <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-primary-grad me-1" />Strategic insight</li>
                </ul>
                <Link className="btn btn-white-shadow mb-0 mt-3" href="/about/services-list">Explore our services </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="max-width-1550 bg-dark position-relative rounded-4 py-5 py-sm-6 py-lg-8 mb-n9" data-bs-theme="dark">
          <Container>
            <Row>
              <Col lg={5}>
                <h2 className="mb-4 mb-sm-6">Our awards and achievements</h2>
                <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  <Col>
                    <Image  src={fwaLightImg} className="h-30px mb-3" alt="award logo" />
                    <p className="mb-0">Digital vanguard award</p>
                  </Col>
                  <Col>
                    <Image  src={clutchLightImg} className="h-30px mb-3" alt="award logo" />
                    <p className="mb-0">Best website of the week</p>
                  </Col>
                  <Col>
                    <Image  src={webbyImg} className="h-30px mb-3" alt="award logo" />
                    <p className="mb-0">5X developer awards</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className="ms-auto position-absolute bottom-0 end-0 d-none d-lg-block">
                <Image src={awardsImg} alt='awardsImg' />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default About