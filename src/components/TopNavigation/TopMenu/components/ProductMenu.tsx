'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'

const ProductMenu = () => {
  return (
    <Dropdown className="nav-item dropdown-animation custom-dropdown-center">
      <DropdownToggle
        as={Link}
        href=""
        variant='link'
        className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center`}
        aria-haspopup="true"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
      >
        Product
        <IconifyIcon height={12} width={19} icon="bi:chevron-down" className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-size-xl dropdown-menu-center p-xl-3 p-">
        <Row className="row-cols-1 row-cols-md-2 pt-2">
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-primary bg-opacity-15 text-primary rounded flex-shrink-0"><IconifyIcon icon='bi:cpu' className="bi fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Hardware</p>
                  <p className="mb-0 text-body small">ESP32 controller for locks, lamps and other smart home devices.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#product"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-pink bg-opacity-15 text-pink rounded flex-shrink-0"><IconifyIcon icon='bi:code-slash' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Firmware</p>
                  <p className="mb-0 text-body small">C++ firmware with a lightweight HTTP JSON API over local Wi-Fi.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#product"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-success bg-opacity-15 text-success rounded flex-shrink-0"><IconifyIcon icon='bi:phone' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">DARMI App</p>
                  <p className="mb-0 text-body small">Mobile app to monitor and control every device from one place.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#product"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-info bg-opacity-15 text-info rounded flex-shrink-0"><IconifyIcon icon='bi:grid-fill' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Integrations</p>
                  <p className="mb-0 text-body small">Connect doors, lamps and other smart home systems to the platform.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#product"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Dropdown>
  )
}

export default ProductMenu
