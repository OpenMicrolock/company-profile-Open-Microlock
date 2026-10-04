import Image from 'next/image'
import React from 'react'
import patternImg from '@/assets/images/elements/geo-grad-pattern.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Cta = () => {
  return (
    <section className="pt-6 pt-sm-5">
      <Container>
        <div className="bg-secondary-grad position-relative rounded-3 overflow-hidden p-4 p-sm-6">
          <div className="position-absolute end-0 top-0 rotate-343 mt-n5 me-7 d-none d-sm-block">
            <Image src={patternImg} height={500} className="h-500px opacity-3" alt="bg pattern" />
          </div>
          <div className="position-absolute start-0 top-0 rotate-343 mt-n5 ms-n8">
            <Image src={patternImg} height={300} className="h-300px opacity-1" alt="bg pattern" />
          </div>
          <Row className="g-4 align-items-center position-relative">
            <Col xl={6}>
              <h2>Ready to bring your <span className="text-primary-grad">vision</span> into life?</h2>
              <ul className="list-inline d-flex flex-wrap gap-2 mb-0 mt-3">
                <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />No Credit Card Required
                </li>
                <li className="list-inline-item heading-color"> <IconifyIcon icon='bi:check-circle' className="text-success me-1" />14 days free trial</li>
              </ul>
            </Col>
            <Col xl={6} className="text-xl-end">
              <Button variant='dark' className="mb-0">Let's work together</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Cta