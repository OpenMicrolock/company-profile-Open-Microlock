import Image from 'next/image'
import React from 'react'
import decorationTab3 from '@/assets/images/elements/saas-decoration/tab-3.png'
import decorationTab2 from '@/assets/images/elements/saas-decoration/tab-2.png'
import decorationStep3 from '@/assets/images/elements/saas-decoration/step-3.png'
import { Col, Container, Row } from 'react-bootstrap'

const CoreFeatures = () => {
  return (
    <section className="pt-md-0">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Row className=" g-4 align-items-center mb-6">
              <Col md={6} className=" pe-md-5">
                <div className="bg-secondary-grad p-4 rounded-4">
                  <Image src={decorationTab3} alt="tab image" />
                </div>
              </Col>
              <Col md={6}>
                <h4 className="mb-md-4">Comprehensive data analysis</h4>
                <p className="mb-0">Dive deep into your business data with our advanced analytics tools. Identify trends, uncover hidden opportunities, and make informed decisions based on comprehensive data analysis.</p>
              </Col>
            </Row>
            <Row className=" g-4 align-items-center mb-6">
              <Col md={6} className=" order-2">
                <h4 className="mb-md-4">Real-time data access</h4>
                <p className="mb-0">Stay ahead of the curve with real-time reporting. Our analytics feature provides you with immediate access to the latest data, enabling you to monitor performance and make quick adjustments.</p>
              </Col>
              <Col md={6} className=" ps-md-5 order-md-2">
                <div className="bg-secondary p-4 rounded-4">
                  <Image src={decorationTab2} alt="tab image" />
                </div>
              </Col>
            </Row>
            <Row className=" g-4 align-items-center">
              <Col md={6} className=" pe-md-5">
                <div className="bg-secondary-grad p-4 rounded-4">
                  <Image src={decorationStep3} className="rounded-4" alt="tab image" />
                </div>
              </Col>
              <Col md={6}>
                <h4 className="mb-md-4">Customizable and interactive dashboards</h4>
                <p className="mb-0">Tailor your analytics experience with fully customizable dashboards. Choose from a variety of widgets, charts, and graphs to create a personalized view of your key metrics.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CoreFeatures