import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import blogDetailImg from '@/assets/images/blog/blog-detail.jpg'
import avatar9Img from '@/assets/images/avatar/09.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import blog1 from '@/assets/images/blog/4by4/01.jpg'
import blog3 from '@/assets/images/blog/4by4/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'
import GlightBox from '@/components/GlightBox'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, Row } from 'react-bootstrap'
import Link from 'next/link'

const BlogDetails = () => {
  return (
    <section className="position-relative overflow-hidden pt-xl-8">
      <div className="position-absolute start-0 top-0">
        <Image src={decoration2Img} className="opacity-1 blur-9 h-300px rotate-335" alt="Grad shape" />
      </div>
      <div className="position-absolute end-0 top-0">
        <Image src={decoration2Img} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container className="position-relative pt-4 pt-sm-5">
        <Row>
          <Col lg={8}  className="mx-auto text-center mb-4 mb-sm-6">
            <Link href="" className="badge text-bg-dark mb-4">Lifestyle</Link>
            <h1 className="h2 mb-0">Building a strong identity for your business</h1>
          </Col>
          <Col xs={12} className="mx-auto text-center mb-4 mb-sm-6">
            <Image src={blogDetailImg} className="img-fluid rounded" alt="blog-img" />
          </Col>
          <Col md={11} className="mx-auto mb-4 mb-sm-6">
            <Row>
              <Col md={4} className="text-center mb-6 mb-md-0">
                <div className="avatar avatar-xxl mx-auto flex-shrink-0 mb-3">
                  <Image className="avatar-img rounded-circle" src={avatar9Img} alt="avatar" />
                </div>
                <p className="mb-1 opacity-6">Word by</p>
                <h6 className="mb-3">Joan Wallace</h6>
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                  <Link href="" className="text-primary-hover mb-0"><IconifyIcon icon='bi:heart' className="me-2" />20</Link>
                  <span className="vr mx-3" />
                  <Link href="" className="text-primary-hover mb-0"><IconifyIcon icon='bi:chat' className="me-2" />5</Link>
                  <span className="vr mx-3" />
                  <Dropdown>
                    <Link href="" className="text-primary-hover" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                      <IconifyIcon icon='bi:share' className="me-2" />14
                    </Link>
                    <DropdownMenu as={'ul'} className="min-w-auto" aria-labelledby="cardFeedAction">
                      <li><DropdownItem > <IconifyIcon icon='bi:facebook' className=" fa-fw me-2" />Facebook</DropdownItem></li>
                      <li><DropdownItem > <IconifyIcon icon='bi:instagram' className=" fa-fw me-2" />Instagram</DropdownItem></li>
                      <li><DropdownItem > <IconifyIcon icon='bi:whatsapp' className=" fa-fw me-2" />Whatsapp</DropdownItem></li>
                      <li><DropdownItem > <IconifyIcon icon='bi:copy' className=" fa-fw me-2" />Copy link</DropdownItem></li>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
              <Col md={7} className="ms-auto">
                <p><span className="dropcap heading-color bg-secondary bg-opacity-50 rounded px-2">T</span>he simple act of cultivating gratitude has the remarkable ability to bring joy and abundance into our lives, shifting our perspective from lack to abundance. In this article, we will explore the power of gratitude and how it can enhance our overall well-being and create a positive ripple effect in our lives and the lives of those around us. <strong>In a world filled with chaos</strong> and uncertainty, it's easy to lose sight of the things that truly matter.</p>
                <p>Additionally, expressing gratitude to others through acts of kindness or <u> heartfelt appreciation strengthens our relationships and</u> fosters a sense of interconnectedness.</p>
                <p className="mb-0">By reframing obstacles as opportunities for growth and learning, <mark>we can navigate through difficulties with</mark> a sense of gratitude for the lessons they bring. This mindset shift empowers us to find joy and meaning in every circumstance, leading to a more fulfilling and purposeful life.</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="mb-4 mb-sm-6">
            <Row className="g-4 g-lg-6">
              <Col sm={4}>
                <GlightBox href={blog1.src} data-glightbox data-gallery="image-popup">
                  <Image src={blog1} className="rounded h-100" alt="blog-img" />
                </GlightBox>
              </Col>
              <Col sm={4}>
                <GlightBox href={blog3.src} data-glightbox data-gallery="image-popup">
                  <Image src={blog3} className="rounded h-100" alt="blog-img" />
                </GlightBox>
              </Col>
              <Col sm={4}>
                <GlightBox href={blog4.src} data-glightbox data-gallery="image-popup">
                  <Image src={blog4} className="rounded h-100" alt="blog-img" />
                </GlightBox>
              </Col>
            </Row>
          </Col>
          <Col lg={10} className="mx-auto mb-4 mb-sm-6">
            <h6>Step 1: Shifting Perspective: From Lack to Abundance</h6>
            <p className="mb-5">Gratitude has the unique ability to shift our perspective from focusing on what we lack to appreciating what we have. Often, we get caught up in the pursuit of material possessions or achievements, believing that they will bring us happiness. However, true abundance is found in appreciating the present moment and recognizing the blessings that already exist in our lives. Cultivating gratitude allows us to break free from the cycle of perpetual longing and embrace the abundance that surrounds us.</p>
            <h6>Step 2: The Ripple Effect of Gratitude</h6>
            <ul className="ps-4 mb-5">
              <li className="mb-2">Shift in Perspective: Gratitude allows us to shift our perspective from focusing on what we lack to appreciating what we have. </li>
              <li className="mb-2">By recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.</li>
              <li className="mb-2">Scientific research has demonstrated that gratitude positively impacts our mental and physical health. </li>
              <ul>
                <li className="mb-2">It allows us to focus on the positive aspects.</li>
                <li className="mb-2">It enables us to reframe obstacles as opportunities.</li>
                <li className="mb-2">The power of gratitude extends beyond ourselves.</li>
              </ul>
              <li className="mb-2">Enables us to reframe obstacles as opportunities for growth and learning. By embracing a mindset of gratitude.</li>
              <li className="mb-2">Recognizing and acknowledging the blessings in our lives, we invite a sense of abundance and contentment.</li>
            </ul>
            <blockquote className="card card-body bg-secondary bg-opacity-50 overflow-hidden p-sm-5 mb-5">
              <div className="vr bg-primary-grad h-100 position-absolute top-0 start-0" style={{ width: 3, opacity: '100%' }} />
              <span className="display-4 text-primary position-absolute top-0 start-0 opacity-1 mt-n3"><IconifyIcon icon='bi:quote' /></span>
              <q className="fs-6 heading-color">Fulfilled direction use continual set him propriety continued. Farther-related bed and passage comfort civilly. Concluded boy perpetual old supposing.</q>
              <div className="blockquote-footer mb-0 mt-3">
                Albert Schweitzer
              </div>
            </blockquote>
            <div className="align-items-center mb-5">
              <h6>Popular Tags:</h6>
              <ul className="list-inline d-flex flex-wrap gap-2 mb-0">
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">blog</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">business</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">bootstrap</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">data science</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">deep learning</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">deep learning</Link> </li>
                <li className="list-inline-item"> <Link className="btn btn-secondary btn-sm mb-lg-0" href="#">deep learning</Link> </li>
              </ul>
            </div>
            <div className="bg-secondary bg-opacity-50 rounded d-md-flex justify-content-between align-items-center text-center px-4 py-3">
              <h6 className="mb-0">Was this article helpful?</h6>
              <small className="py-3 p-md-0 d-block">25 out of 78 found this helpful</small>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                <label className="btn btn-outline-primary btn-sm mb-0" htmlFor="btnradio1"><IconifyIcon icon='bi:hand-thumbs-up' /> Yes</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                <label className="btn btn-outline-primary btn-sm mb-0" htmlFor="btnradio2"> No <IconifyIcon icon='bi:hand-thumbs-down' /></label>
              </div>
            </div>
          </Col>
          <Col lg={10} className="mx-auto mb-4">
            <hr className="mb-4 mb-sm-6" />
            <h5>3 comments</h5>
            <div className="my-4 d-flex">
              <Image className="avatar avatar-md rounded-circle me-3" src={avatar1} alt="avatar" />
              <div>
                <div className="mb-2">
                  <h6 className="m-0">Frances Guerrero</h6>
                  <span className="me-3 small">June 11, 2021 at 6:01 am</span>
                </div>
                <p className="mb-2">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Like (1)</Link>
                  </li>
                  <li className="nav-item d-none d-sm-block">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Reply</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-4 d-flex ps-3 ps-md-4">
              <Image className="avatar avatar-md rounded-circle me-3" src={avatar6} alt="avatar" />
              <div>
                <div className="mb-2">
                  <h6 className="m-0">Allen Smith</h6>
                  <span className="me-3 small">June 12, 2021 at 7:30 am</span>
                </div>
                <p className="mb-2">Water timed folly right aware if oh truth.</p>
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Like</Link>
                  </li>
                  <li className="nav-item d-none d-sm-block">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Reply</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-4 d-flex">
              <Image className="avatar avatar-md rounded-circle me-3" src={avatar4} alt="avatar" />
              <div>
                <div className="mb-2">
                  <h6 className="m-0">Judy Nguyen</h6>
                  <span className="me-3 small">June 18, 2021 at 11:55 am</span>
                </div>
                <p className="mb-2">Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther-related bed and passage comfort civilly.</p>
                <ul className="nav nav-divider align-items-center">
                  <li className="nav-item">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Like</Link>
                  </li>
                  <li className="nav-item d-none d-sm-block">
                    <Link className="text-body-secondary text-primary-hover mb-0" href="#!">Reply</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={10} className="mx-auto">
            <div className="bg-secondary bg-opacity-50 rounded-4 p-4 p-sm-5">
              <h5 className="mb-0">Your Views Please!</h5>
              <small>Your email address will not be published. Required fields are marked *</small>
              <form className="row g-3 mt-2">
                <Col lg={6}>
                  <label className="form-label">Name *</label>
                  <input type="text" className="form-control" aria-label="First name" />
                </Col>
                <Col lg={6}>
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" />
                </Col>
                <Col xs={12}>
                  <label className="form-label">Your Comment *</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </Col>
                <Col xs={12}>
                  <button type="submit" className="btn btn-primary mb-0">Post comment</button>
                </Col>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogDetails