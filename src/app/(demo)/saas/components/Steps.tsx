import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import step1Img from '@/assets/images/elements/saas-decoration/step-1.png'
import step21Img from '@/assets/images/elements/saas-decoration/step-2-1.png'
import step22Img from '@/assets/images/elements/saas-decoration/step-2-2.png'
import step3Img from '@/assets/images/elements/saas-decoration/step-3.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const Steps = () => {
  return (
    <section className="position-relative z-index-2 py-0 mb-n9">
      <Container fluid className="position-relative">
        <div className="max-width-1550 bg-dark position-relative rounded-4 overflow-hidden py-6 py-lg-8">
          <div className="position-absolute top-100 start-50 translate-middle">
            <Image src={decorationImg} className="opacity-2 blur-9" alt="Grad shape" />
          </div>
          <Container className="position-relative" data-bs-theme="dark">
            <Row className="g-4 align-items-center mb-5 mb-lg-6">
              <Col lg={7} xl={5}>
                <h2 className="mb-0">Simplify data <span className="text-primary-grad">collection</span> with easy</h2>
              </Col>
              <Col lg={5}  className="ms-auto text-lg-end">
                <Button variant='white' className="mb-0"><IconifyIcon width={16} height={16} icon='logos:google-icon' className="me-2" />Sign up with google</Button>
              </Col>
            </Row>
            <Row className="justify-content-center g-4 g-xl-6">
              <Col md={6} lg={4}>
                <Card className="bg-transparent p-0">
                  <div className="bg-white bg-opacity-10 rounded-4 h-200px h-sm-300px overflow-hidden p-4 mb-2 mb-sm-3">
                    <Image src={step1Img} className="d-flex m-auto" alt="step image" />
                  </div>
                  <CardBody className="bg-transparent px-0">
                    <h6>Sign up and customize</h6>
                    <p className="mb-0">Create your account and customize your dashboard to fit your business needs.</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="bg-transparent p-0">
                  <div className="bg-white bg-opacity-10 rounded-4 h-200px h-sm-300px overflow-hidden p-4 mb-2 mb-sm-3">
                    <Image src={step21Img} className="mt-n5 rounded-3" alt="step image" />
                    <Image src={step22Img} className="ms-auto d-flex me-n6 mt-n5 rounded-3" alt="step image" />
                  </div>
                  <CardBody className="bg-transparent px-0">
                    <h6>Integrate and collect data</h6>
                    <p className="mb-0">Start collecting valuable data from all your user business processes instantly.</p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card className="bg-transparent p-0">
                  <div className="bg-white bg-opacity-10 rounded-4 position-relative h-200px h-sm-300px overflow-hidden p-4 mb-2 mb-sm-3">
                    <Image src={step3Img} className="position-absolute mt-2 ms-2 img-fluid rounded-3" alt="step image" />
                  </div>
                  <CardBody className="bg-transparent px-0">
                    <h6>Analyze and optimize</h6>
                    <p className="mb-0">Use the analytics to make informed decisions and drive growth.</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default Steps