'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/05.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { expertiseData } from '../data'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  const viewPort = useViewPort()
  return (
    <section className="pt-8 pb-0 overflow-hidden">
      <Container data-sticky-container>
        <Row className="align-items-stretch">
          <Col lg={5} className="offset-lg-1 order-2 mb-5 mb-lg-0">
            <div data-sticky data-margin-top={100} data-sticky-for={992}>
              <Sticky
                disabled={viewPort ? viewPort.width <= 768 : false}
                topOffset={100}
                bottomOffset={0}
                boundaryElement="div.row"
                hideOnBoundaryHit={false}
                stickyStyle={{ transition: '0.2s all linear' }}>
                <div className="position-relative h-500px h-md-750px w-lg-50vw">
                  <div className="w-100 h-500px h-md-750px rounded-4" style={{ backgroundImage: `url(${bgImg.src})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                </div>
              </Sticky>
            </div>
          </Col>
          <Col lg={6} className="order-1 mb-5 mb-lg-0">
            <div className="pb-lg-7 pt-lg-5">
              <h5 className="mb-lg-4"><span className="hand-wave-animate">🖐️</span> Hello, I’m</h5>
              <h1 className="display-1 position-relative mb-6 mb-sm-5">
                Emily Johnson
                <span className="h5 bg-primary text-white rounded-3 rotate-350 position-absolute bottom-0 end-0 mb-n5 mb-sm-n3 mb-lg-n1 px-4 py-3">Web developer</span>
              </h1>
              <p className="lead mb-4">I am a self-taught web Developer from the USA. Currently, I am a freelancer and collaborating with small companies and agencies. I deal with UI design / Front-end development and Bootstrap Development.</p>
              <Link href="#" className="btn btn-secondary icon-link icon-link-hover">Work with me! <IconifyIcon icon='bi:arrow-right' /></Link>
            </div>
          </Col>
          <Col xl={6} className="order-3">
            <h2 className="mb-4 mb-lg-5">My expertise</h2>
            <Row className="g-4">
              {
                expertiseData.map((item, idx) => (
                  <Col md={6} key={idx}>
                    <Card className={`${item.bgColor} bg-opacity-15 rounded-4 p-4 h-100`}>
                      <CardHeader className="bg-transparent p-0 pb-4">
                        <div className={`icon-lg ${item.bgColor} text-white rounded-circle`}>
                          <IconifyIcon icon={item.icon} className="fa-lg" />
                        </div>
                      </CardHeader>
                      <CardBody className="p-0">
                        <h6>{item.title}</h6>
                        <p className="mb-3">{item.description}</p>
                      </CardBody>
                      <CardFooter className="bg-transparent p-0">
                        <Link href="#" className="link-primary-grad icon-link icon-link-hover">View projects <IconifyIcon icon='bi:arrow-right' /></Link>
                      </CardFooter>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero