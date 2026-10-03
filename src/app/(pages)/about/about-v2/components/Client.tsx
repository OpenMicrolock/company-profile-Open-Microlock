import React from 'react'
import { clientData } from '../data'
import Image from 'next/image'
import appleImg from '@/assets/images/elements/apple.svg'
import giconImg from '@/assets/images/elements/gicon.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Client = () => {
  return (
    <section className="bg-secondary-grad pt-1">
      <Container>
        <Row className="g-4">
          <Col md={7} className="mb-3 mb-md-0">
            <h3 className="mb-4 mb-sm-5 pe-7">Join over <span className="text-purple">1,000+</span> companies using Folio</h3>
            <div className="d-flex flex-wrap gap-4 gap-sm-5">
              {
                clientData.map((item, idx) => (
                  <div className="swap-logo" key={idx}>
                    <Image src={item.logo} className="h-30px w-auto" alt="client-img" />
                    <div className="swap-item">
                      <Image src={item.logoLight} className="dark-mode-item h-30px w-auto" alt="client logo" />
                      <Image src={item.logoDark} className="light-mode-item h-30px w-auto" alt="client logo" />
                    </div>
                  </div>
                ))
              }
            </div>
          </Col>
          <Col md={5} lg={4} className="ms-auto">
            <div className="d-flex gap-4 gap-lg-2 flex-wrap mb-4">
              <div>
                <Image src={appleImg} className="icon-lg mb-3" alt='appleImg' />
                <ul className="list-inline mb-1">
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                </ul>
                <span>4.8 stars on App Store</span>
              </div>
              <div className="ms-xl-auto">
                <Image src={giconImg} className="icon-lg mb-3" alt='giconImg' />
                <ul className="list-inline mb-1">
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-fill' className="text-warning" /></li>
                  <li className="list-inline-item me-0"><IconifyIcon icon='bi:star-half' className="text-warning" /></li>
                </ul>
                <span>4.6 stars on Google</span>
              </div>
            </div>
            <Link className="btn btn-outline-primary icon-link icon-link-hover mt-2" href="">Join our community<IconifyIcon icon='bi:arrow-right' /> </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Client