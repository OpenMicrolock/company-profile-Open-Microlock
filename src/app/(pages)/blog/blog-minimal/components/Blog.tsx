import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/images/blog/4by3/01.jpg'
import blog4 from '@/assets/images/blog/4by3/04.jpg'
import blog2 from '@/assets/images/blog/4by3/02.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import grad5 from '@/assets/images/elements/grad-shape/05.png'
import grad11 from '@/assets/images/elements/grad-shape/11.png'
import { CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

const Blog = () => {
  return (
    <section className="bg-secondary overflow-hidden pt-0">
      <Container className="inner-container">
        <Row className="g-4 g-lg-6">
          <Col md={6}>
            <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
              <div className="d-flex gap-2 position-absolute top-0 start-0 z-index-2 m-4">
                <span className="badge bg-dark">Technology</span>
                <span className="badge bg-white text-dark">June 28, 2024</span>
              </div>
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={blog1} className="rounded-4 img-scale" alt="Blog-img" />
              </div>
              <CardBody className="px-2">
                <CardTitle as={'h6'} className="mb-2"><Link href="#">Building a strong identity for your business</Link></CardTitle>
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
              </CardBody>
            </article>
          </Col>
          <Col md={6}>
            <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
              <div className="d-flex gap-2 position-absolute top-0 start-0 z-index-2 m-4">
                <span className="badge bg-dark">Research</span>
                <span className="badge bg-white text-dark">July 15, 2024</span>
              </div>
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={blog4} className="rounded-4 img-scale" alt="Blog-img" />
              </div>
              <CardBody className="px-2">
                <h6 className="card-title mb-2"><Link href="#">Tips for improving your website's visibility</Link></h6>
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
              </CardBody>
            </article>
          </Col>
          <Col xs={12}>
            <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
              <div className="card-img-scale-wrapper rounded-4">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/9No-FiEInLA" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
              <CardBody className="px-2">
                <div className="d-flex gap-2 z-index-2 mb-2">
                  <span className="badge bg-dark">Technology</span>
                  <span className="badge bg-white text-dark">June 28, 2024</span>
                </div>
                <CardTitle as={'h6'} className="mb-2"><Link href="">10 things you need to know about Folio</Link></CardTitle>
                <Link className="icon-link icon-link-hover" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
              </CardBody>
            </article>
          </Col>
          <Col md={6}>
            <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
              <div className="d-flex gap-2 position-absolute top-0 start-0 z-index-2 m-4">
                <span className="badge bg-dark">Design</span>
                <span className="badge bg-white text-dark">June 28, 2024</span>
              </div>
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={blog2} className="rounded-4 img-scale" alt="Blog-img" />
              </div>
              <CardBody className="px-2">
                <CardTitle as={'h6'} className="mb-2"><Link href="#">Techniques to captivate your audience</Link></CardTitle>
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
              </CardBody>
            </article>
          </Col>
          <Col md={6}>
            <article className="card card-img-scale bg-transparent overflow-hidden h-100 p-0">
              <div className="d-flex gap-2 position-absolute top-0 start-0 z-index-2 m-4">
                <span className="badge bg-dark">Research</span>
                <span className="badge bg-white text-dark">July 15, 2024</span>
              </div>
              <div className="card-img-scale-wrapper rounded-4">
                <Image src={blog3} className="rounded-4 img-scale" alt="Blog-img" />
              </div>
              <CardBody className="px-2">
                <h6 className="card-title mb-2"><Link href="#">Never underestimate the influence</Link></h6>
                <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
              </CardBody>
            </article>
          </Col>
          <Col xs={12}>
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
          </Col>
          <Col xs={12}>
            <div className="bg-body position-relative rounded-3 overflow-hidden p-4 p-sm-6">
              <div className="position-absolute end-0 top-0 rotate-343 mt-n5 me-n8">
                <Image src={grad5} height={300} className="h-200px h-sm-300px" alt="bg pattern" />
              </div>
              <div className="position-absolute start-0 top-0 rotate-343 mt-n5 ms-n6">
                <Image src={grad11} height={200} className="h-200px blur-2" alt="bg pattern" />
              </div>
              <div className="position-relative text-center">
                <h3 className="fw-bold mb-4">Subscribe to new<span className="text-primary-grad"> updates</span></h3>
                <form className="row g-2 align-items-center justify-content-center">
                  <Col xs={'auto'} md={8} lg={6}>
                    <input type="email" className="form-control form-control-lg bg-secondary" placeholder="Enter your email address" />
                  </Col>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-lg btn-dark m-0">Subscribe!</button>
                  </div>
                  <p className="small mt-2">✌️ No Spam — We Promise!</p>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog