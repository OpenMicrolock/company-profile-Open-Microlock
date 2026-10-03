import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/clay-decoration.png'
import decorationBlurImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import decorationBlur2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { pricingData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary position-relative pt-xl-8 pb-0 mb-n4 overflow-hidden">
      <div className="position-absolute end-0 top-0 mt-6 me-n6 z-index-2 d-none d-md-block">
        <Image src={decorationImg} height={400} className="h-400px" alt="Clay-decoration" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationBlurImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <div className="position-absolute start-0 top-0">
        <Image src={decorationBlur2Img} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container  className="position-relative z-index-2 pt-4 pt-sm-5">
        <div className="inner-container-small text-center mb-5 mb-sm-7">
          <nav className="mb-2 d-flex justify-content-center" aria-label="breadcrumb">
            <ol className="breadcrumb pt-0">
              <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Pricing - v2</li>
            </ol>
          </nav>
          <h1 className="mb-0">Affordable &amp; flexible pricing plans</h1>
        </div>
        <Row className="g-4 g-lg-5">
          {
            pricingData.map((item, idx) => (
              <Col xl={10}  className="mx-auto" key={idx}>
                <Card className={`card-hover-shadow card-hover-transition ${item.popular ? 'bg-primary-grad' : 'bg-body'}  bg-opacity-75 rounded-4 p-4 p-sm-5`} {...(item.popular && { 'data-bs-theme': 'dark' })}>
                  <Row className="g-4 g-md-0">
                    <Col md={6}>
                      <div className={`icon-xl ${item.popular ? 'bg-dark' : 'bg-secondary-grad'}  shadow-primary rounded-circle mb-4`}>
                        <Image src={item.icon} height={40} className="h-40px" alt="rocket image" />
                      </div>
                      <p className="lead heading-color fw-semibold mb-2">{item.title}</p>
                      <p className="mb-2"> <span className="h1 mb-0">{item.price}</span> {!item.popular && '/month'}</p>
                      <p className="mb-0">{item.subTitle}</p>
                    </Col>
                    <Col md={5} className="ms-auto">
                      <CardBody className="d-flex flex-column h-100 p-0">
                        <span className="fw-semibold opacity-6 mb-1 mb-md-3">Quick look at all the features</span>
                        <ul className="list-group list-group-borderless mb-3">
                          {
                            item.features.map((feature, idx) => (
                              <li key={idx} className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-success me-1" />{feature}</li>
                            ))
                          }
                        </ul>
                        <Link className={`btn ${item.popular ? 'btn-white' : 'btn-dark'}  icon-link icon-link-hover justify-content-center mb-0`} href="#">{item.popular? 'Contact us' : 'Purchase'}<IconifyIcon icon='bi:arrow-right' /> </Link>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          }

        </Row>
      </Container>
      <span className="position-absolute bottom-0 start-0">
        <svg className="text-dark" width={1920} height={73} viewBox="0 0 1920 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1920 61.5V73H0V0Z" fill="currentColor" />
        </svg>
      </span>
    </section>
  )
}

export default Hero