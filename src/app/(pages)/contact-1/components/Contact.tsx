import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Button, Card, CardBody, CardFooter, Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="pt-0 mt-n6 mt-lg-n7 mt-xl-n8">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col md={4}>
            <Card className="bg-secondary rounded-4 p-4 h-100">
              <CardBody className="p-0">
                <div className="icon-lg bg-pink text-white rounded-circle mb-3"><IconifyIcon icon='bi:telephone' /></div>
                <h6>Call us</h6>
                <p className="mb-0">Speak with a member of our team. We’re always ready to assist you.</p>
              </CardBody>
              <CardFooter className="bg-transparent p-0 pt-3">
                <Link href="#" className="text-primary-grad">+(251) 854-6308</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-secondary rounded-4 p-4 h-100">
              <CardBody className="p-0">
                <div className="icon-lg bg-primary text-white rounded-circle mb-3"><IconifyIcon icon='bi:envelope' /></div>
                <h6>Mail us</h6>
                <p className="mb-0">We’re prompt and aim to respond to all inquiries within 24 hours.</p>
              </CardBody>
              <CardFooter className="bg-transparent p-0 pt-3">
                <Link href="#" className="text-primary-grad">example@gmail.com</Link>
              </CardFooter>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="bg-secondary rounded-4 p-4 h-100">
              <CardBody className="p-0">
                <div className="icon-lg bg-warning text-white rounded-circle mb-3"><IconifyIcon icon='bi:headset' /></div>
                <h6>Support</h6>
                <p className="mb-0">Check out helpful resources, FAQs and developer tools. </p>
              </CardBody>
              <CardFooter className="bg-transparent p-0 pt-3">
                <Button variant='white-shadow' size='sm' className="icon-link icon-link-hover" href="">Chat now<IconifyIcon icon='bi:arrow-right' /> </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact