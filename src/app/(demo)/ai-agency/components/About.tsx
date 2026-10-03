'use client'
import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import aboutImg from '@/assets/images/about/07.jpg'
import aiHand from '@/assets/images/elements/ai-hand.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const About = () => {
  return (
    <section className="position-relative pt-0 pb-0 pb-xl-8">
      <Container className="px-xl-7">
        <Row className="align-items-center">
          <Col lg={6} className="position-relative pe-xl-6 mb-5 mb-lg-0">
            <div className="position-absolute top-0 start-0 ms-n6">
              <Image src={decorationImg} className="blur-7 opacity-1" alt="Grad shape" />
            </div>
            <Image src={aboutImg} className="rounded-4 z-index-2 position-relative" alt="about image" />
          </Col>
          <Col lg={6} className="ms-auto">
            <div className="d-flex align-items-center" style={{ maxWidth: '30rem' }}>
              <h2 className="display-4 text-primary-grad mb-0">14+</h2>
              <h6 className="mb-0 ms-3">Products successfully launched</h6>
            </div>
            <hr className="border-primary border-opacity-50 mt-4 mb-5" />
            <TabContainer defaultActiveKey='nav-mission'>
              <Nav className="nav-pills nav-pills-dark gap-3" id="nav-tab" role="tablist">
                <NavItem>
                  <NavLink eventKey='nav-mission' className="nav-link" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="true"><IconifyIcon icon='bi:bullseye' className="me-2" />Our Mission</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey='nav-vision' className="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false"><IconifyIcon icon='bi:eye' className="me-2" />Our Vision</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey='nav-goal' className="nav-link" id="nav-goal-tab" data-bs-toggle="tab" data-bs-target="#nav-goal" type="button" role="tab" aria-controls="nav-goal" aria-selected="false"><IconifyIcon icon='bi:trophy' className="me-2" />Our Goal</NavLink>
                </NavItem>
              </Nav>
              <TabContent className="mt-4">
                <TabPane className="fade" eventKey="nav-mission">
                  <p className="mb-2">We strive to be the trusted partner that helps our clients navigate the complexities of the digital age with confidence and ease</p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Advanced AI technology</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Boosting efficiency with optimized workflows</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Driving sustainable growth with insights</li>
                  </ul>
                </TabPane>
                <TabPane className="fade" eventKey="nav-vision">
                  <p className="mb-2">Effective design communicates your brand's identity, cultivates trust, and can significantly impact conversion rates and customer loyalty.</p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Tailored solutions</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Proven track Record</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Cost-effectiveness</li>
                  </ul>
                </TabPane>
                <TabPane className="fade" eventKey="nav-goal">
                  <p className="mb-2">We provide a range of tools, guides, and best practices to help you create designs, websites.</p>
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Digital pioneers</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Continuous learning</li>
                    <li className="list-group-item heading-color d-flex pb-0"><IconifyIcon icon='bi:patch-check' className="text-success me-2" />Inspiring transformation</li>
                  </ul>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute top-100 start-0 translate-middle ms-9 mt-4 z-index-9 d-none d-xl-block">
        <Image src={aiHand} className="aos ms-9 ps-6" data-aos="fade-right" data-aos-delay={100} data-aos-duration={800} data-aos-easing="ease-in-out" alt="ai hand" />
      </div>
    </section>
  )
}

export default About