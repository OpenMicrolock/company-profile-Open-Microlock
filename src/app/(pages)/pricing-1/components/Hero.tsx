'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React, { Fragment, useState } from 'react'
import { pricingData } from '../data'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import Image from 'next/image'
import { Button, Card, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  const [duration, setDuration] = useState('month')

  const toggle = () => {
    if (duration === 'month') {
      setDuration('year')
      return
    }
    setDuration('month')
  }
  return (
    <section className="price-wrap position-relative overflow-hidden pt-xl-8">
      <div className="bg-primary-grad blur-9 h-300px w-100 opacity-2 position-absolute top-0 start-50 translate-middle-x mt-n7" />
      <Container className="position-relative z-index-2 pt-4 pb-6 pb-xl-8">
        <nav className="mb-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Pricing - v1</li>
          </ol>
        </nav>
        <h3>Pricing Plan For</h3>
        <h1 className="fw-bold mb-4">Every <span className="text-primary-grad">Business</span> Needs</h1>
        <form className="bg-body shadow-primary border border-primary d-inline-flex align-items-center rounded-3 p-3 px-sm-4 py-sm-3">
          <span className="fw-semibold heading-color">Monthly</span>
          <div className="form-check form-switch form-check-lg mx-2 mb-0">
            <input className="form-check-input mt-0 price-toggle" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault" />
          </div>
          <span className="fw-semibold heading-color">Yearly</span>
          <span className="badge bg-success ms-2">20% save</span>
        </form>
      </Container>
      <Container fluid>
        <div className="max-width-1550">
          <Row>
            {
              pricingData.map((item, idx) => (
                <Fragment key={idx}>
                  {
                    item.duration === duration &&
                    <>
                      {
                        item.plans.map((plan, idx) => (
                          <Col md={6} xl={3} className="mb-5 mb-xl-0" key={idx}>
                            <Card className={`shadow ${!plan.popular && 'overflow-hidden'}   p-1`}>
                              {
                                plan.popular &&
                                <div className="bg-primary-grad small text-white rounded position-absolute top-0 start-50 translate-middle px-3 py-1">Recommended</div>
                              }
                              <CardHeader className={`${plan.popular ? 'bg-secondary-grad': 'bg-secondary'} bg-opacity-50 p-4 pb-0`}>
                                <div className={`icon-lg ${plan.popular ? 'bg-pink' : 'bg-body'}  shadow-primary rounded-circle mb-3`}>
                                  <IconifyIcon icon={plan.icon} className={`fa-lg lh-1  ${plan.popular ? 'text-white' : 'heading-color'}`} />
                                </div>
                                <h6 className="mb-3">{plan.title}</h6>
                                <p className="mb-0"> <span className="h2 mb-0 plan-price" data-monthly-price="$25" data-annual-price="$20">${plan.price}</span> /{item.duration}</p>
                                <small>{plan.subTitle}</small>
                                <Link href="" className={`btn ${plan.popular ? 'btn-white-shadow' : 'btn-dark'}  btn-transition w-100 mt-4`}>Get started</Link>
                              </CardHeader>
                              <CardFooter className={`${plan.popular ? 'bg-secondary-grad': 'bg-secondary'} bg-opacity-50 p-4`}>
                                <ul className="list-group list-group-borderless mb-0">
                                  {
                                    plan.features.map((feature, idx) => (
                                      <li key={idx} className="list-group-item d-flex align-items-center heading-color mb-0"><IconifyIcon icon='bi:check-lg' className=" text-primary me-1" />{feature}</li>
                                    ))
                                  }
                                </ul>
                              </CardFooter>
                            </Card>
                          </Col>
                        ))
                      }
                    </>
                  }
                </Fragment>
              ))
            }
            <Col md={6} xl={3} className="mb-5 mb-xl-0">
              <Card className="shadow overflow-hidden p-1">
                <CardHeader className="bg-secondary bg-opacity-50 position-relative overflow-hidden p-4 pb-0">
                  <div className="position-absolute top-0 end-0 mt-n8 me-n5">
                    <Image src={decorationImg} className="blur-7 opacity-2 h-300px" alt="Grad shape" />
                  </div>
                  <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                    <IconifyIcon icon='bi:headset' className="fa-lg lh-1 heading-color" />
                  </div>
                  <h6 className="mb-3">Business plan</h6>
                  <h2>Custom</h2>
                  <small>Customize feature according to users</small>
                  <Button  variant='dark' className="btn-transition w-100 mt-4">Request pricing</Button>
                </CardHeader>
                <CardFooter className="bg-secondary bg-opacity-50 p-4">
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-primary me-1" />Unlimited projects</li>
                    <li className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-primary me-1" />Custom reporting and analytics</li>
                    <li className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-primary me-1" />Dedicated account manager</li>
                    <li className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-primary me-1" />Tailored support and consulting</li>
                    <li className="list-group-item align-items-center d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-primary me-1" />Customizable features</li>
                  </ul>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section >
  )
}

export default Hero