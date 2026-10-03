'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { blogData } from '../data'
import Image from 'next/image'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Blog = () => {
  const viewPort = useViewPort()
  return (
    <section>
      <Container data-sticky-container>
        <Row className="">
          <Col lg={4}>
            <Sticky
              disabled={viewPort ? viewPort.width <= 768 : false}
              topOffset={100}
              bottomOffset={0}
              boundaryElement="div.row"
              hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear' }} >
              <h2 className="mb-3">Development tips &amp; trends</h2>
              <p className="mb-sm-5"><IconifyIcon icon='bi:instagram' className="text-primary-grad me-2" />Follow us on <b>Instagram</b> to see life at <Link href="" className="hover-underline-animation">@folio</Link></p>
            </Sticky>
          </Col>
          <Col lg={7} className="ms-auto">
            {
              blogData.map((item, idx) => (
                <article className="card card-hover-transition bg-transparent border-bottom rounded-0 p-4 ps-0" key={idx}>
                  <Row className=" align-items-sm-center">
                    <Col xs={5} sm={3} xl={2}>
                      <Image src={item.image} className="card-img" alt="blog-img" />
                    </Col>
                    <Col xs={7} sm={9} xl={10}>
                      <CardBody className="ps-0 pe-3 py-0">
                        <CardTitle as={'h6'} className="mb-3 mb-md-0">{item.title}</CardTitle>
                        <div className="d-sm-flex justify-content-between align-items-center mt-3">
                          <ul className="nav nav-divider align-items-center">
                            <li className="nav-item d-none d-sm-block">{item.date}</li>
                            <li className="nav-item d-none d-xl-block">{item.readTime}</li>
                          </ul>
                          <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                </article>
              ))
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog