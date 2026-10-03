import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import { jonListData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const JobListing = () => {
  return (
    <section className="py-0 mb-n8">
      <Container fluid>
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-5 py-sm-6 py-lg-8">
          <div className="position-absolute top-0 start-0 mt-n6 ms-n5">
            <Image src={decorationImg} className="blur-7 opacity-1" alt="Grad shape" />
          </div>
          <div className="position-absolute top-100 start-50 translate-middle">
            <Image src={decoration2Img} className="opacity-2 blur-9" alt="Grad shape" />
          </div>
          <Container className="position-relative" data-bs-theme="dark">
            <h2 className="text-center mb-4">New job openings</h2>
            <p className="text-center lead mx-auto mb-5">Explore our exciting career opportunities and find the perfect fit for your skills and aspirations.</p>
            <Row>
              <Col lg={10} className="mx-auto">
                {
                  jonListData.map((item, idx) => (
                    <Card className="bg-transparent bg-opacity-50 border border-opacity-10 card-hover-transition card-hover-shadow mb-4" key={idx}>
                      <CardBody className="p-4">
                        <Row className=" g-3 g-sm-4 align-items-center">
                          <Col md={5}>
                            <h6 className="mb-0">{item.title}</h6>
                          </Col>
                          <Col sm={4} md={2}>
                            <span>{item.location}</span>
                          </Col>
                          <Col sm={4} md={3}>
                            <span>{item.department}</span>
                          </Col>
                          <Col sm={4} md={2} className="text-sm-end">
                            <Link href="/about/career-single" className="fw-semibold link-success icon-link icon-link-hover stretched-link">Apply <IconifyIcon icon='bi:arrow-right' /></Link>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  ))
                }
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default JobListing