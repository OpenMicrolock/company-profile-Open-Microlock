import React from 'react'
import { protFolioData } from '../data'
import Image from 'next/image'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section className="position-relative pt-3">
      <Container>
        <ul className="nav nav-underline justify-content-center gap-sm-5 mb-4 mb-sm-6">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">All</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Selected</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Digital</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Branding</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Web design</Link>
          </li>
        </ul>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-lg-5 mb-5">
          {
            protFolioData.map((item, idx) => (
              <Col  key={idx}>
                <Card className="card-img-scale card-content-hover overflow-hidden rounded-4">
                  <div className="card-img-scale-wrapper">
                    <div className="hover-content bg-blur bg-dark bg-opacity-10 p-4">
                      <div className="z-index-2 mt-auto">
                        <h6 className="mb-1 text-white">{item.title}</h6>
                        <small className="text-white">{item.category}</small>
                      </div>
                    </div>
                    <Link href={item.link} className="stretched-link"><Image src={item.image} className="img-scale" alt="portfolio-img" /></Link>
                  </div>
                </Card>
              </Col>
            ))
          }
        </Row>
        <nav aria-label="Page navigation">
          <ul className="pagination pagination-primary-grad d-flex justify-content-center">
            <li className="page-item disabled">
              <Link href='' className="page-link"><IconifyIcon icon='bi:chevron-left' className="mx-n1 rtl-flip" /></Link>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                1
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <Link href="#" className="page-link">2</Link>
            </li>
            <li className="page-item">
              <Link href="#" className="page-link">3</Link>
            </li>
            <li className="page-item">
              <Link href="#" className="page-link">4</Link>
            </li>
            <li className="page-item">
              <Link href="#" className="page-link" aria-label="Next page">
                <IconifyIcon icon='bi:chevron-right' className="mx-n1 rtl-flip" />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  )
}

export default Portfolio