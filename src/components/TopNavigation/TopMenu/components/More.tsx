'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Dropdown, DropdownToggle, Row } from 'react-bootstrap'

const More = () => {
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
        More
        <IconifyIcon height={12} width={19} icon="bi:chevron-down" className="ms-1" />
      </DropdownToggle>
      <div className="dropdown-menu dropdown-menu-size-xl dropdown-menu-center p-xl-3 p-">
      <Row className="row-cols-1 row-cols-md-2 pt-2">
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-primary bg-opacity-15 text-primary rounded flex-shrink-0"><IconifyIcon icon='bi:file-earmark-text' className="bi  fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Documentation</p>
                  <p className="mb-0 text-body small">Using documentation you can easily develop projects</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-pink bg-opacity-15 text-pink rounded flex-shrink-0"><IconifyIcon icon='bi:stickies' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Snippets</p>
                  <p className="mb-0 text-body small">Development guides for building projects with Folio</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-success bg-opacity-15 text-success rounded flex-shrink-0"><IconifyIcon icon='bi:bullseye' className=" fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Changelog</p>
                  <p className="mb-0 text-body small">Recent feature release and announcement.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-warning bg-opacity-15 text-warning rounded flex-shrink-0"><IconifyIcon icon='bi:mask' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Playwright tips</p>
                  <p className="mb-0 text-body small">Tips and In-depth guide for headless browser automation</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-info bg-opacity-15 text-info rounded flex-shrink-0"><IconifyIcon icon='bi:grid-fill' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Integrations</p>
                  <p className="mb-0 text-body small">Taking advantage of integrations with other services.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
          <Col>
            <div className="dropdown-item bg-secondary-hover d-flex align-items-center justify-content-between position-relative text-wrap py-3">
              <div className="d-flex">
                <div className="icon-md bg-purple bg-opacity-15 text-purple rounded flex-shrink-0"><IconifyIcon icon='bi:chat-dots' className="fs-6" /></div>
                <div className="mx-3">
                  <p className="stretched-link heading-color fw-bold mb-0">Supports</p>
                  <p className="mb-0 text-body small">Need help? Our customers support is there to help you.</p>
                </div>
              </div>
              <Link className="icon-link icon-link-hover text-primary-hover stretched-link" href="#" target="_blank"><IconifyIcon icon='bi:chevron-right' /> </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Dropdown>
  )
}

export default More
