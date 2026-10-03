import Image from 'next/image'
import React from 'react'
import logo3Light from '@/assets/images/client/logo-light/03.svg'
import logo8Light from '@/assets/images/client/logo-light/08.svg'
import logo9Light from '@/assets/images/client/logo-light/09.svg'
import logo2Light from '@/assets/images/client/logo-light/02.svg'
import logo10Light from '@/assets/images/client/logo-light/10.svg'
import logo6Light from '@/assets/images/client/logo-light/06.svg'
import logo3Dark from '@/assets/images/client/logo-dark/03.svg'
import logo8Dark from '@/assets/images/client/logo-dark/08.svg'
import logo9Dark from '@/assets/images/client/logo-dark/09.svg'
import logo2Dark from '@/assets/images/client/logo-dark/02.svg'
import logo10Dark from '@/assets/images/client/logo-dark/10.svg'
import logo6Dark from '@/assets/images/client/logo-dark/06.svg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'

const Client = () => {
  return (
    <section className="pt-0 pb-md-6">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-sm-5 mb-lg-0">
            <h2 className="mb-3 mb-lg-4">Solutions we've built for...</h2>
            <p className="mb-3 mb-lg-4">Our AI solutions have driven innovation, streamlined operations, and fueled exceptional business growth.</p>
            <Button variant='primary' className="icon-link icon-link-hover" href="#">Become a client<IconifyIcon icon='bi:arrow-right' /> </Button>
          </Col>
          <Col lg={8}>
            <Row className=" border-md-transparent g-0">
              <Col xs={6} md={4}  className="border-primary border-opacity-10 border-end border-bottom">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo3Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo3Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
              <Col xs={6} md={4}  className="border-primary border-opacity-10 border-end border-bottom">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo8Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo8Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
              <Col xs={6} md={4}  className="border-primary border-opacity-10 border-bottom">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo9Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo9Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
              <Col xs={6} md={4}  className="border-primary border-opacity-10 border-end">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo2Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo2Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
              <Col xs={6} md={4}  className="border-primary border-opacity-10 border-end">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo10Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo10Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
              <Col xs={6} md={4}  className="border-primary border-opacity-10">
                <div className="text-center p-3 p-md-5">
                  <Image src={logo6Light} className="dark-mode-item h-40px" alt="client logo" />
                  <Image src={logo6Dark} className="light-mode-item h-40px" alt="client logo" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Client