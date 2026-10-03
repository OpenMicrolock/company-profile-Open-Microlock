import Image from 'next/image'
import React from 'react'
import aiRobot from '@/assets/images/elements/ai-robot.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Hero = () => {
  return (
    <section className="bg-secondary-grad position-relative overflow-hidden pt-sm-8 pt-lg-9 pb-5">
      <span className="position-absolute bottom-0 start-0">
        <svg className="fill-body" width={1920} height={254} viewBox="0 0 1920 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M556.048 176.63C371.384 97.9289 108.406 143.838 0 176.63V254H1920V0C1863.62 35.5602 1712.53 98.8233 1559.27 67.394C1406.01 35.9648 1206.33 86.6647 1125.65 115.943C1012.72 168.964 740.712 255.331 556.048 176.63Z" />
        </svg>
      </span>
      <Container className="position-relative pt-4 pt-md-0">
        <Row>
          <Col md={7} lg={6} className="mb-5 mb-md-0">
            <h1 className="display-5 mb-3 mb-md-4">Smart Solutions with <span className="text-primary">AI</span></h1>
            <p className="lead mb-3 mb-md-4">Harness AI to unlock your business potential, streamline operations, and drive growth.</p>
            <Button variant='primary-grad' className="icon-link icon-link-hover" href="">Get Started<IconifyIcon icon='bi:arrow-right'  /> </Button>
          </Col>
          <Col md={5} className="ms-auto">
            <Image src={aiRobot} className="aos" data-aos="fade-up" data-aos-delay={200} data-aos-duration={500} data-aos-easing="ease-in-out" alt="AI-robot" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero