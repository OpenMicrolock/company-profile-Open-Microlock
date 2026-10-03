import React from 'react'
import { serviceData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Services = () => {
  return (
    <section className="position-relative pt-6 pt-xxl-0">
      <Container>
        <Row className="g-4 g-lg-5">
          {
            serviceData.map((item, idx) => (
              <Col md={6} xl={4} key={idx}>
                <Card className="card-bg-grad-hover card-content-hover bg-secondary bg-opacity-75 h-100 p-4 p-sm-5">
                  {
                    item.badge &&
                    <div className="badge bg-dark position-absolute top-0 end-0 m-4">New</div>
                  }
                  <div className="card-header bg-transparent p-0 pb-5">
                    <Image src={item.icon} height={70} className="h-70px" alt="icon" />
                  </div>
                  <div className="card-footer bg-transparent mt-auto p-0">
                    <h6 className="mb-3">{item.title}</h6>
                    <ul className="ps-3 mb-0">
                      {
                        item.features.map((feature, idx) => (
                          <li key={idx} className="mb-2">{feature}</li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="hover-content d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle">
                    <Link className="btn btn-white icon-link icon-link-hover mb-0 stretched-link" href="/about/services-single">Explore service<IconifyIcon icon='bi:arrow-right' /> </Link>
                  </div>
                </Card>
              </Col>
            ))
          }
        </Row>
        <p className="mb-0 mt-5 text-center heading-color">🔥 Let’s create something great work together.
          <Link href="" className="fw-bold hover-underline-animation heading-color">Got a project in mind?</Link>
        </p>
      </Container>
    </section>
  )
}

export default Services