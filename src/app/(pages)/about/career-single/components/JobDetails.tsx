'use client'
import Image from 'next/image'
import React from 'react'
import avatar9 from '@/assets/images/avatar/09.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const JobDetails = () => {
  const viewPort = useViewPort()
  return (
    <section className="pt-sm-7">
      <Container data-sticky-container>
        <Row className="g-4">
          <Col md={7} className="order-2">
            <p className="lead heading-color">Hello, I'm Jacqueline Miller-CEO here at Folio.</p>
            <p>From humble beginnings, we have grown to serve hundreds of satisfied customers, generating millions in revenue. Our growth trajectory has been nothing short of extraordinary, with consistent triple-digit year-on-year growth.</p>
            <p>This success is a testament to our robust and beautiful product, which is trusted and used by growing organizations every day.  Each team member plays a vital role in our journey, contributing their unique skills and expertise to our collective success.</p>
            <h6 className="mt-5 mb-3">Principal responsibilities</h6>
            <ul className="ps-3">
              <li className="mb-2"><b>Model Development:</b> Design, develop, and deploy machine learning models for various applications.</li>
              <li className="mb-2"><b>Data Analysis:</b> Analyze large datasets to identify patterns, trends, and insights that inform model development</li>
              <li className="mb-2"><b>Algorithm Optimization:</b> Optimize and fine-tune algorithms for improved accuracy and efficiency.</li>
              <li className="mb-2"><b>Collaboration:</b> Work closely with cross-functional teams, including data scientists, engineers, and product managers, to integrate machine learning solutions.</li>
              <li className="mb-2"><b>Research:</b> Stay up-to-date with the latest advancements in machine learning and artificial intelligence, and apply new techniques to our projects.</li>
              <li className="mb-2"><b>Documentation:</b> Maintain clear and comprehensive documentation of models, algorithms, and processes.</li>
            </ul>
            <h6 className="mt-5 mb-3">Qualifications</h6>
            <ul className="ps-3">
              <li className="mb-2"><b>Education:</b> Bachelor's or Master's degree in Computer Science, Data Science, Machine Learning, or a related field.</li>
              <li className="mb-2"><b>Experience:</b> 2+ years of experience in machine learning, data science, or a similar role.</li>
              <li className="mb-2"><b>Technical skills:</b> Proficiency in Python and machine learning libraries such as TensorFlow, PyTorch, or scikit-learn. Experience with data processing frameworks like Pandas and NumPy</li>
              <li className="mb-2"><b>Analytical skills:</b> Strong analytical and problem-solving skills, with the ability to interpret complex data and translate it into actionable insights.</li>
              <li className="mb-2"><b>Communication:</b> Excellent written and verbal communication skills, with the ability to explain complex concepts to non-technical stakeholders.</li>
            </ul>
            <p>Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne's new manners savings staying had. Under folly balls, death own point now men. Match way she avoids seeing death. She drifts their fat off.</p>
            <h6 className="mt-5 mb-3">What we offer</h6>
            <ul className="ps-3">
              <li className="mb-2"><b>Competitive salary:</b>We offer a competitive salary and benefits package.</li>
              <li className="mb-2"><b>Remote work:</b>Enjoy the flexibility of working from anywhere.</li>
              <li className="mb-2"><b>Professional development:</b>Opportunities for continuous learning and professional growth through training programs and conferences</li>
              <li className="mb-2"><b>Innovative projects:</b>Work on diverse and exciting projects that challenge your skills and creativity.</li>
              <li className="mb-2"><b>Collaborative culture:</b>Be part of a team that values collaboration, innovation, and mutual support.</li>
            </ul>
            <p>Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</p>
            <div className="bg-secondary bg-opacity-50 rounded-4 mt-5 p-4">
              <h6 className="mb-3">How to apply</h6>
              <p>If you are excited about the opportunity to make a significant impact through machine learning, we would love to hear from you! Click the link below to apply:</p>
              <Link href="#" className="btn btn-sm btn-success icon-link icon-link-hover mb-0" data-bs-toggle="modal" data-bs-target="#applyForm">Apply now<i className="bi bi-arrow-right" /> </Link>
            </div>
          </Col>
          <Col md={5} lg={4} className="ms-auto order-1 order-md-2">
              <Sticky
                disabled={viewPort ? viewPort.width <= 576 : false}
                topOffset={100}
                bottomOffset={0}
                boundaryElement="div.row"
                hideOnBoundaryHit={false}
                stickyStyle={{ transition: '0.2s all linear' }} >
                <Card className="bg-secondary bg-opacity-50">
                  <CardHeader className="border-bottom bg-transparent p-4">
                    <p className="fw-semibold mb-3">Hiring manager:</p>
                    <div className="avatar avatar-xl flex-shrink-0">
                      <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
                    </div>
                    <div className="mt-3">
                      <h6 className="mb-2">Jacqueline Miller</h6>
                      <Link href="" className="link-primary-grad icon-link icon-link-hover mb-0">View profile <IconifyIcon icon='bi:arrow-right' /></Link>
                    </div>
                  </CardHeader>
                  <CardBody className="p-4">
                    <ul className="list-group list-group-borderless">
                      <li className="list-group-item mb-2">
                        <small>Application Deadline:</small>
                        <p className="heading-color fw-semibold mt-1 mb-0">August 31, 2024</p>
                      </li>
                      <li className="list-group-item mb-2">
                        <small>Department:</small>
                        <p className="heading-color fw-semibold mt-1 mb-0">Information technology</p>
                      </li>
                      <li className="list-group-item mb-2">
                        <small>Employment Type:</small>
                        <p className="heading-color fw-semibold mt-1 mb-0">Full time</p>
                      </li>
                      <li className="list-group-item mb-2">
                        <small>Location:</small>
                        <p className="heading-color fw-semibold mt-1 mb-0">New york</p>
                      </li>
                      <li className="list-group-item mb-2">
                        <small>Compensation:</small>
                        <p className="heading-color fw-semibold mt-1 mb-0">$30,000 - $50,000 / year</p>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Sticky>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default JobDetails