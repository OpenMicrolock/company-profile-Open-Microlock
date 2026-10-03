import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import hourglassImg from '@/assets/images/elements/hourglass.png'
import reportBookImg from '@/assets/images/elements/report-book.png'
import decorationImg from '@/assets/images/elements/saas-decoration/05.png'
import aboutImg from '@/assets/images/about/06.jpg'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const About = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <h2 className="mb-3 mb-lg-4">Easily streamline your user analytics</h2>
            <Link href="/about/about-v1" className="btn btn-primary mb-0">Know more</Link>
            <hr className="my-4 my-lg-5 border-primary opacity-2" />
            <Row className=" g-4">
              <Col md={6}>
                <Card className="card-body bg-transparent p-0">
                  <Image src={hourglassImg} className="w-40px mb-4" alt="feature icon" />
                  <h6>Real-time data insights</h6>
                  <p>Monitor key metrics, track performance, and gain actionable insights instantly.</p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="card-body bg-transparent p-0">
                  <Image src={reportBookImg} className="w-40px mb-4" alt="feature icon" />
                  <h6>Customizable reports</h6>
                  <p>With our customizable reporting tools, you can dive deep into specific</p>
                </Card>
              </Col>
            </Row>
            <div className="bg-body shadow-primary rounded d-inline-block py-3 px-md-4 mt-4">
              <p className="heading-color mb-0 px-3 px-sm-5 px-md-0"><IconifyIcon icon='bi:info-square-fill' className="me-2" />Contact our team for more information &nbsp;
                <Link href="/contact-1" className="fw-semibold icon-link icon-link-hover hover-underline-animation">Let’s chat <IconifyIcon icon='bi:arrow-right' /></Link>
              </p>
            </div>
          </Col>
          <Col lg={5} className="position-relative ms-auto">
            <div className="bg-secondary rounded-4 position-relative p-5">
              <Image src={decorationImg} alt="Saas image" />
              <Image src={aboutImg} className="rounded-4" alt="image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About