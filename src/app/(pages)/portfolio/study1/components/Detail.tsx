import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Detail = () => {
  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Col md={4}>
            <span className="text-primary-grad fw-bold lead">01.</span>
            <h5>Overview</h5>
          </Col>
          <Col md={8} className="ms-auto">
            <p className="lead">Ideas are the seeds of innovation. They can originate from personal experiences, observations, or the desire to solve a problem.</p>
            <p>Once an idea takes root, it requires nurturing and refinement. This stage involves research, brainstorming, and gathering feedback. Conducting market analysis, exploring existing solutions, and collaborating with others can help refine the idea further. The goal is to gain a deeper understanding of the idea's feasibility, potential impact, and market viability.</p>
            <ul className="list-inline">
              <li className="list-inline-item"> <Link className="btn btn-light btn-sm mb-lg-0" href="#">Branding</Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-light btn-sm mb-lg-0" href="#">Packaging</Link> </li>
              <li className="list-inline-item"> <Link className="btn btn-light btn-sm mb-lg-0" href="#">UI/UX design</Link> </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <span className="text-primary-grad fw-bold lead">02.</span>
            <h5>The Challenge</h5>
          </Col>
          <Col md={8} className="ms-auto">
            <p>Turning ideas into reality is a transformative process that drives innovation and progress. It begins with recognizing the power and potential of an idea. Through cultivation, planning, and strategizing, ideas are refined and shaped into actionable plans. Challenges are embraced as opportunities for growth, and perseverance becomes key in overcoming obstacles.</p>
            <Row>
              <Col sm={6} lg={5}>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Brand Development</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Art Direction</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Marketing Strategy</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Mobile App Design</li>
                </ul>
              </Col>
              <Col sm={6} lg={5}>
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Content Management</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />System &amp; Guides</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Graphic Design</li>
                  <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-circle' className="text-primary me-2" />Brand Development</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Detail