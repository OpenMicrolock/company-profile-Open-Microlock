import Image from 'next/image'
import React from 'react'
import patternImg from '@/assets/images/elements/geo-grad-pattern.svg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import { servicesData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-secondary-grad position-relative pt-xl-8 overflow-hidden">
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n3 z-index-2" viewBox="0 0 1950 178">
          <path className="fill-body" d="M1480.3,21.8c238.7-17.4,359.6,39,469.7,74.4V178H0v-54.2V4.4c57.3,38.5,287.7,14.6,446.4,0 c170.6-15.7,342.3,14.5,440.8,33C1104,78,1274.8,36.9,1480.3,21.8z" />
        </svg>
      </span>
      <div className="position-absolute end-0 top-0 rotate-180 mt-n5 me-n9">
        <Image src={patternImg} className="h-700px opacity-1" alt="bg pattern" />
      </div>
      <div className="position-absolute start-0 bottom-0 mb-8 ms-n7">
        <Image src={patternImg} className="h-400px opacity-1" alt="bg pattern" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5 pb-5 pb-lg-8">
        <nav className="mb-2 d-flex justify-content-center" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </nav>
        <h1 className="mb-4 text-center">Our Services</h1>
        <Row>
          <Col xl={10} className="mx-auto">
            <Row className=" g-4 g-lg-5">
              {
                servicesData.map((item, idx) => {
                  return (
                    <Col xl={11} className={`${item.isCenter && 'ms-auto'}`} key={idx}>
                      <Card className="card-hover-shadow card-hover-transition shadow-primary-sm bg-body bg-opacity-75 bg-blur rounded-4 p-3 p-lg-4">
                        <Row className=" g-0">
                          <Col md={5}>
                            <Image src={item.image} className="card-img mb-3 mb-md-0" alt="..." />
                          </Col>
                          <Col md={7}>
                            <CardBody className="d-flex flex-column h-100 px-2 px-md-4 py-0 py-md-2">
                              <CardTitle as={'h5'} className="card-title">{item.title}</CardTitle>
                              <p className="card-text">{item.description}</p>
                              <ul className="list-inline d-flex flex-wrap gap-2 mb-3">
                                {
                                  item.features.map((feature, idx) => (
                                    <li className="list-inline-item heading-color" key={idx}> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />{feature}</li>
                                  ))
                                }
                              </ul>
                              <Link className="icon-link icon-link-hover stretched-link mt-auto" href="/about/services-single">View detail<IconifyIcon icon='bi:arrow-right' /> </Link>
                            </CardBody>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero