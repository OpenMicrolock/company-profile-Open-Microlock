import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { blogData } from '../data'
import Image from 'next/image'
import blogImg from '@/assets/images/blog/adv.jpg'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Blog = () => {
  return (
    <section>
      <Container className="pt-7">
        <Row>
          <Col xl={8}  className="mb-5 mb-xl-0">
            <h4 className="mb-4">Today's top highlights</h4>
            {
              blogData.map((item, idx) => (
                <article className="card bg-secondary bg-opacity-50 card-hover-transition p-3 mb-4" key={idx}>
                  <Row>
                    <Col md={4}>
                      <Image src={item.image} className="img-fluid card-img" alt="blog-img" />
                    </Col>
                    <Col md={8}>
                      <CardBody className="d-flex flex-column h-100 ps-0 pe-3">
                        <div className="d-flex gap-2 mb-3">
                          <span className={`badge ${item.variant}`}>{item.category}</span>
                          <span className="badge bg-white text-dark">{item.readTime}</span>
                        </div>
                        <CardTitle as={'h6'} className="mb-3 mb-md-0">{item.title}</CardTitle>
                        <div className="d-sm-flex justify-content-between align-items-center mt-auto">
                          <p className="mb-4 mb-sm-2 heading-color fw-semibold">{item.author}</p>
                          <Link className="icon-link icon-link-hover stretched-link" href="/blog/blog-single">Read more<IconifyIcon icon='bi:arrow-right' /> </Link>
                        </div>
                      </CardBody>
                    </Col>
                  </Row>
                </article>
              ))
            }
            <div className="text-center">
              <button type="button" className="btn btn-sm btn-secondary">Load more post <IconifyIcon icon='bi:arrow-down-circle' className="ms-2 align-middle" /></button>
            </div>
          </Col>
          <Col xl={3} className="ms-auto">
            <Row>
              <Col sm={6} lg={3} xl={12}>
                <Card  className="bg-transparent">
                  <CardHeader className="border-bottom bg-transparent px-0">
                    <p className="lead fw-bold heading-color mb-0">Categories</p>
                  </CardHeader>
                  <CardBody className="px-0">
                    <ul className="nav flex-column fs-sm">
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">All topics <span className="fw-normal opacity-6 ms-1">(48)</span></Link>
                      </li>
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">Digital <span className="fw-normal opacity-6 ms-1">(12)</span></Link>
                      </li>
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">Marketing <span className="fw-normal opacity-6 ms-1">(5)</span></Link>
                      </li>
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">Development <span className="fw-normal opacity-6 ms-1">(10)</span></Link>
                      </li>
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">Technology <span className="fw-normal opacity-6 ms-1">(9)</span></Link>
                      </li>
                      <li className="nav-item mb-1">
                        <Link href="" className="nav-link py-1 px-0">UI/UX design <span className="fw-normal opacity-6 ms-1">(4)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link href="" className="nav-link py-1 px-0">Lifestyle <span className="fw-normal opacity-6 ms-1">(3)</span></Link>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} lg={3} xl={12}>
                <Card className="bg-transparent">
                  <CardHeader className="border-bottom bg-transparent px-0">
                    <p className="lead fw-bold heading-color mb-0">Follow us on</p>
                  </CardHeader>
                  <CardBody className="px-0">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"> <Link className="btn btn-icon bg-facebook" href=""><IconifyIcon icon='bi:facebook' className=" lh-base" /></Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-icon bg-instagram" href=""><IconifyIcon icon='bi:instagram' className=" lh-base" /></Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-icon bg-twitter" href=""><IconifyIcon icon='bi:twitter-x' className=" lh-base" /></Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-icon bg-linkedin" href=""><IconifyIcon icon='bi:linkedin' className=" lh-base" /></Link> </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} lg={3} xl={12}>
                <Card className="bg-transparent">
                  <CardHeader className="border-bottom bg-transparent px-0">
                    <p className="lead fw-bold heading-color mb-0">Popular Tags</p>
                  </CardHeader>
                  <CardBody className="px-0">
                    <ul className="list-inline mb-0 social-media-btn">
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">blog</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">business</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">bootstrap</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">data science</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">deep learning</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Adventure</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Community</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Tutorials</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Interview</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Photography</Link> </li>
                      <li className="list-inline-item"> <Link className="btn btn-secondary btn-xs" href="">Classic</Link> </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
              <Col sm={6} lg={3} xl={12}>
                <Card className="rounded-4 overflow-hidden mt-3">
                  <Image src={blogImg} className="img-fluid" alt="Adv image" />
                  <div className="card-img-overlay d-flex flex-column align-items-center text-center pt-5 mx-auto">
                    <h6 className="text-white mb-3">New Smart earbuds</h6>
                    <Button size='sm' variant='dark' className="mb-0">Shop now</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog