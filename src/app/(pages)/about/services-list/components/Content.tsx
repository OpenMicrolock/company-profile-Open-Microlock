import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import serviceImg from '@/assets/images/elements/service-2.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Content = () => {
  return (
    <section className="py-0">
      <Container>
        <Row className="align-items-center align-items-xl-end">
          <Col md={5}  className="mb-9 mb-md-0">
            <h2 className="mb-4">Integrate with a wide range of <span className="text-primary">projects</span></h2>
            <p className="mb-3">Our integration solutions facilitate smooth collaboration and help you achieve project goals efficiently.</p>
            <ul className="list-group list-group-borderless mb-4">
              <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Expand your reach</li>
              <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Exceptional integration</li>
              <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Extensive project connectivity</li>
              <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Connect and Collaborate</li>
            </ul>
            <Link className="btn btn-dark icon-link icon-link-hover" href="/portfolio/modern">Explore our work<IconifyIcon icon='bi:arrow-right' /> </Link>
          </Col>
          <Col md={6} className="ms-auto">
            <div className="bg-secondary bg-opacity-50 rounded-4">
              <Image src={serviceImg} className="mt-n8" alt="image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Content