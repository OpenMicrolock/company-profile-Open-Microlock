'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import rocketImg from '@/assets/images/elements/rocket.png'
import thunderImg from '@/assets/images/elements/thunder.png'
import fireImg from '@/assets/images/elements/fire.png'
import moneyHand from '@/assets/images/elements/money-hand.png'
import { Card, CardBody, CardFooter, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'
import { pricingData } from '../data'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

const Pricing = () => {

  const [duration, setDuration] = useState('month')
  const [feature, setFeature] = useState<string[]>(['Customizable features', '5 user accounts', 'Customizable features', '10 GB storage', 'Email support'])

  const toggle = () => {
    if (duration === 'month') {
      setDuration('year')
      return
    }
    setDuration('month')
  }

  return (
    <section className="price-wrap overflow-hidden pt-0">
      <Container>
        <Row>
          <TabContainer defaultActiveKey='starter-plan'>
            <Col xl={8} className="position-relative">
              <div className="position-absolute end-0 top-0 me-xl-n4 z-index-2 d-none d-sm-block">
                <Image src={moneyHand} alt="decoration" />
              </div>
              <div className="inner-container-small ms-0 mb-4 mb-lg-6">
                <h2 className="mb-sm-4">Affordable solutions for every budget</h2>
                <p>Need guidance? <Link href="#" className="link-purple hover-underline-animation">Reserve a 20-minute call</Link></p>
              </div>
              <form className="d-flex align-items-center mb-4">
                <span className="fw-semibold">Monthly</span>
                <div className="form-check form-switch form-check-lg mx-2 mb-0">
                  <input className="form-check-input mt-0 price-toggle" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault" />
                </div>
                <div className="position-relative">
                  <span className="fw-semibold">Yearly</span> &nbsp;
                  <span className="badge bg-success">10% save</span>
                </div>
              </form>
              <Nav className="nav nav-pills-secondary nav-responsive gap-3 gap-xxl-4" id="myTab" role="tablist">
                {
                  pricingData.map((item, idx) => (
                    <>
                      {
                        item.duration === duration &&
                        <>
                          {
                            item.plans.map((plan, idx) => (
                              <NavItem className="col" role="presentation" style={{ minWidth: '14rem' }} key={idx} onClick={() => setFeature(plan.features)}>
                                <NavLink className="p-4 rounded-4 " key={idx} eventKey="starter-plan" role="tab" data-bs-toggle="tab" data-bs-target="#starter-plan-pane" aria-controls="starter-plan-pane" aria-selected="true">
                                  <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                                    <Image src={plan.icon} className="h-40px" alt="rocket image" />
                                  </div>
                                  <p className="heading-color fw-semibold mb-3">{plan.name}</p>
                                  <span className="mb-0 price-text"> <span className="h2 mb-0 plan-price" data-monthly-price="$25" data-annual-price="$20">${plan.price}</span> /{item.duration}</span>
                                </NavLink>
                              </NavItem>
                            ))
                          }
                        </>
                      }

                    </>
                  ))
                }
              </Nav>
            </Col>
            <Col xl={4} className="mt-5 mt-xl-0">
              <TabContent id="myTabContent" data-bs-theme="dark">

                <TabPane className="fade" eventKey="starter-plan" role="tabpanel" aria-labelledby="starter-plan" tabIndex={0} >
                  <Card className="bg-dark p-4 p-sm-5 rounded-4">
                    <CardBody className="p-0">
                      <h5 className="mb-3">Included features</h5>
                      <ul className="list-group list-group-borderless mb-4">
                        {
                          feature.map((item, idx) => (
                            <li key={idx} className="list-group-item d-flex heading-color mb-0"><IconifyIcon icon='bi:check-lg' className="text-success me-1" />{item}</li>
                          ))
                        }
                      </ul>
                    </CardBody>
                    <CardFooter className="bg-transparent text-center mt-0 mt-xl-6 p-0">
                      <Link href="#" className="btn btn-primary w-100 mb-2">Get started</Link>
                      <Link href="#" className="link-white hover-underline-animation">View comparison table</Link>
                    </CardFooter>
                  </Card>
                </TabPane>
              </TabContent>
            </Col>
          </TabContainer>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing