import Image from 'next/image'
import React from 'react'
import aiRobot from '@/assets/images/elements/ai-robot-3.png'
import wing1Img from '@/assets/images/elements/wing-1.svg'
import wing2Img from '@/assets/images/elements/wing-2.svg'
import clutch from '@/assets/images/elements/clutch.svg'
import fwaImg from '@/assets/images/elements/fwa.svg'
import dribbbleImg from '@/assets/images/elements/dribbble.svg'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Awards = () => {
  return (
    <section className="position-relative py-0">
      <div className="position-absolute top-100 start-0 translate-middle ms-9 mt-n8 z-index-9 d-none d-lg-block">
        <Image src={aiRobot} className="aos" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800} data-aos-easing="ease-in-out" alt="ai robot" />
      </div>
      <div className="bg-secondary-grad position-relative overflow-hidden py-6 py-md-8">
        <span className="position-absolute top-0 start-0 mt-n5">
          <svg className="fill-body" width={1930} height={137} viewBox="0 0 1930 137" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M464.909 117.12C228.685 132.607 108.971 82.5335 0 51.0476V1.5L1930 0V26.649V132.607C1873.32 98.4636 1645.24 119.618 1488.21 132.607C1319.34 146.576 1149.46 119.696 1051.95 103.318C837.339 67.2694 668.231 103.79 464.909 117.12Z" />
          </svg>
        </span>
        <Container className="ps-lg-6 pt-6">
          <Row className="g-4 align-items-center">
            <Col lg={9} xxl={4}>
              <h2 className="text-center text-sm-start">Our prestigious awards</h2>
            </Col>
            <Col lg={9} xxl={8} className="d-sm-flex justify-content-sm-between ms-auto">
              <Card className="card-body bg-transparent text-center m-auto" style={{ maxWidth: '15rem' }}>
                <div className="d-flex align-items-center mb-3">
                  <Image src={wing1Img} className="rtl-flip" alt="award wing" />
                  <ul className="list-group list-group-borderless align-items-center">
                    <li className="list-group-item fw-semibold heading-color d-flex pb-0">Best Website Award</li>
                    <li className="list-group-item fw-semibold text-primary d-flex pb-0">2023</li>
                  </ul>
                  <Image src={wing2Img} className="rtl-flip" alt="award wing" />
                </div>
                <span className="fw-semibold opacity-6">Accordion to</span>
                <Image src={clutch} className="h-30px mt-2" alt="logo" />
              </Card>
              <Card className="card-body bg-transparent text-center m-auto" style={{ maxWidth: '15rem' }}>
                <div className="d-flex align-items-center mb-3">
                  <Image src={wing1Img} className="rtl-flip" alt="award wing" />
                  <ul className="list-group list-group-borderless align-items-center">
                    <li className="list-group-item fw-semibold heading-color d-flex pb-0">Digital Vanguard Award</li>
                    <li className="list-group-item fw-semibold text-primary d-flex pb-0">2022</li>
                  </ul>
                  <Image src={wing2Img} className="rtl-flip" alt="award wing" />
                </div>
                <span className="fw-semibold opacity-6">Accordion to</span>
                <Image src={fwaImg} className="h-30px mt-2" alt="logo" />
              </Card>
              <Card className="card-body bg-transparent text-center m-auto" style={{ maxWidth: '15rem' }}>
                <div className="d-flex align-items-center mb-3">
                  <Image src={wing1Img} className="rtl-flip" alt="award wing" />
                  <ul className="list-group list-group-borderless align-items-center">
                    <li className="list-group-item fw-semibold heading-color d-flex pb-0">Website of the day</li>
                    <li className="list-group-item fw-semibold text-primary d-flex pb-0">2021</li>
                  </ul>
                  <Image src={wing2Img} className="rtl-flip" alt="award wing" />
                </div>
                <span className="fw-semibold opacity-6">Accordion to</span>
                <Image src={dribbbleImg} className="h-30px mt-2" alt="logo" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Awards