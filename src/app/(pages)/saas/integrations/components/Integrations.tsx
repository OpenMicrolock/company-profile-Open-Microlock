import React from 'react'
import { integrationsData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Integrations = () => {
  return (
    <section className="pt-0">
      <Container>
        <div className="d-md-flex justify-content-center align-items-center mb-4 mb-lg-6">
          <p className="mb-4 mb-md-0 me-4">Filter by:</p>
          <ul className="nav nav-underline gap-md-4 mb-0">
            <li className="nav-item">
              <Link className="nav-link py-0 active" aria-current="page" href="#">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-0" href="#">Productivity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-0" href="#">CRM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-0" href="#">Payment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-0" href="#">e-commerce</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link py-0" href="#">Streaming</Link>
            </li>
          </ul>
        </div>
        <Row className="g-4 g-xl-5">
          {
            integrationsData.map((item, idx) => (
              <Col md={6} lg={4}  key={idx}>
                <Card className="card-hover-transition bg-secondary bg-opacity-50 h-100 p-4">
                  <CardBody className="p-0">
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <div className="icon-lg text-center shadow-primary bg-body rounded-3 flex-shrink-0" style={{ lineHeight: '3.2rem' }}>
                        <Image src={item.icon} className="h-30px" alt='icon' />
                      </div>
                      <div>
                        <h6 className="mb-0">{item.name}</h6>
                        <span>{item.category}</span>
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </CardBody>
                  <CardFooter className="bg-transparent p-0 mt-4">
                    <Link href="/saas/integrations-single" className="link-primary-grad icon-link icon-link-hover stretched-link mb-0">Explore integration<IconifyIcon icon='bi:arrow-right' /> </Link>
                  </CardFooter>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Integrations