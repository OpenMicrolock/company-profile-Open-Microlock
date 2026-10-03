'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import steps1 from '@/assets/images/career/steps/01.jpg'
import steps2 from '@/assets/images/career/steps/02.jpg'
import steps3 from '@/assets/images/career/steps/03.jpg'
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import Link from 'next/link'

const Process = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col xl={10} className="mx-auto">
            <TabContainer defaultActiveKey='1'>
              <Row className="g-4">
                <Col md={6} className="order-2">
                  <TabContent id="v-pills-tabContent">
                    <TabPane eventKey='1' className="fade" id="proceee-one" aria-labelledby="proceee-one-tab" tabIndex={0}>
                      <Card className="rounded-4 border overflow-hidden">
                        <Image src={steps1} className="card-img-top" alt="Blog-img" />
                        <CardBody className="p-4">
                          <h6>What to Do</h6>
                          <p className="mb-0">Submit your application through our online portal. Make sure your resume is up-to-date and tailored to the specific position you’re applying for. Include a cover letter if required, highlighting your relevant experience and why you’re interested in joining</p>
                        </CardBody>
                      </Card>
                    </TabPane>
                    <TabPane eventKey='2' className="fade" id="process-two" aria-labelledby="process-two-tab" tabIndex={0}>
                      <Card className="rounded-4 border overflow-hidden">
                        <Image src={steps2} className="card-img-top" alt="Blog-img" />
                        <CardBody className="p-4">
                          <h6>What to Do</h6>
                          <p className="mb-0">This interview typically lasts 20-30 minutes and will be conducted via phone or video call. We’ll ask about your previous experience, your understanding of the role, and why you’re interested in working with us.</p>
                        </CardBody>
                      </Card>
                    </TabPane>
                    <TabPane eventKey='3' className="fade" id="process-three" aria-labelledby="process-three-tab" tabIndex={0}>
                      <Card className="rounded-4 border overflow-hidden">
                        <Image src={steps3} className="card-img-top" alt="Blog-img" />
                        <CardBody className="p-4">
                          <h6>What to Do</h6>
                          <p className="mb-0">Participate in an initial interview with a member of our HR team. This is your chance to learn more about company and to ask any questions you might have about the position or company culture.</p>
                        </CardBody>
                      </Card>
                    </TabPane>
                    <TabPane className="fade" id="process-four" aria-labelledby="process-four-tab" tabIndex={0} />
                    <TabPane className="fade" id="process-five" aria-labelledby="process-five-tab" tabIndex={0} />
                  </TabContent>
                </Col>
                <Col md={5} className="order-1 order-md-2 ms-auto">
                  <h2 className="mb-4">Our Recruitment Process</h2>
                  <Nav className="nav-pills-dark flex-column gap-3 nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <NavItem>
                      <NavLink eventKey="1" className="text-start rounded-pill ps-4 py-3">
                        1. Application Submission
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey="2" className="text-start rounded-pill ps-4 py-3">
                        2. Initial Screening
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink eventKey="3" className="text-start rounded-pill ps-4 py-3">
                        3. First Interview
                      </NavLink>
                    </NavItem>
                    {/* <NavItem> */}
                      <NavLink className="nav-link text-start rounded-pill ps-4 py-3" id="process-four-tab" role="tab" data-bs-toggle="pill" data-bs-target="#process-four" aria-selected="false" disabled>4. Technical/Skill Assessment</NavLink>
                    {/* </NavItem>
                    <NavItem> */}
                      <NavLink className="nav-link text-start rounded-pill ps-4 py-3" id="process-five-tab" role="tab" data-bs-toggle="pill" data-bs-target="#process-five" aria-selected="false" disabled>5. Final Interview</NavLink>
                    {/* </NavItem> */}

                  </Nav>
                </Col>
              </Row>
            </TabContainer>
            <div className="inner-container-small bg-primary rounded-3 text-white text-center py-3 mt-5">
              <p className="mb-0 px-2 px-sm-5 px-md-0"><IconifyIcon icon='bi:info-square-fill' className="heading-color me-2" />Contact our team for more information
                <Link href="#" className="fw-semibold icon-link icon-link-hover hover-underline-animation text-white">Let’s chat <IconifyIcon icon='bi:arrow-right' /></Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Process