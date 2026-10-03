'use client'
import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import portfolio5Img from '@/assets/images/portfolio/05.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import Sticky from 'react-sticky-el'
import useViewPort from '@/hooks/useViewPort'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Project = () => {
  const viewPort = useViewPort()
  return (
    <section className="position-relative pt-6 pt-xl-7 overflow-hidden">
      <div className="position-absolute end-0 top-0">
        <Image src={decoration2Img} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
      </div>
      <Container fluid className="px-xxl-5 pt-2">
        <div className="h-300px h-sm-400px h-xl-500px rounded-4 overflow-hidden" data-jarallax data-speed="0.6" style={{ background: `url(${portfolio5Img.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </Container>
      <Container className="pt-6 pt-xl-7">
        <Row className="g-4" data-sticky-container>
          <Col md={7} lg={8}>
            <nav className="mb-2" aria-label="breadcrumb">
              <ol className="breadcrumb pt-0">
                <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
                <li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Portfolio case study v2</li>
              </ol>
            </nav>
            <h1 className="h2 mb-3">Mobile app development</h1>
            <p className="lead">Ideas are the seeds of innovation. They can originate from personal experiences, observations, or the desire to solve a problem.</p>
            <h6 className="mt-5 mb-3"><span className="text-primary me-2">01.</span>Overview</h6>
            <p>Design a clean, intuitive interface that provides an exceptional user experience. Ensure ease of navigation and accessibility for all users, including those with disabilities. Implement a robust set of features including secure payment gateways, real-time push notifications, and comprehensive user analytics. Incorporate a seamless shopping experience with a well-structured product catalog and efficient checkout process.</p>
            <ul className="list-inline">
              <li className="list-inline-item"> <Button variant='secondary' size='sm' className="mb-lg-0" href="#">Branding</Button> </li>&nbsp;
              <li className="list-inline-item"> <Button variant='secondary' size='sm' className="mb-lg-0" href="#">Packaging</Button> </li>&nbsp;
              <li className="list-inline-item"> <Button variant='secondary' size='sm' className="mb-lg-0" href="#">UI/UX design</Button> </li>
            </ul>
            <h6 className="mt-5 mb-3"><span className="text-primary me-2">02.</span>The Challenge</h6>
            <p><span className="dropcap fs-2 heading-color bg-secondary bg-opacity-50 rounded px-2">I</span>ntegrating multiple third-party services, such as payment gateways, social media logins, and user analytics tools, presented a significant challenge. Ensuring these integrations worked harmoniously without compromising the app's performance was crucial. Additionally, securing user data and privacy, particularly during transactions, required robust encryption and compliance with data protection regulations to build user trust.</p>
            <p>Delivering the project within a stringent timeline necessitated meticulous planning and efficient execution. Coordinating among different teams, managing resources effectively, and adhering to the project schedule were vital to meeting the deadline without compromising on quality.</p>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-lg' className="text-success me-2" />Integrating multiple third-party services seamlessly.</li>
              <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-lg' className="text-success me-2" />Ensuring robust security and privacy for user data.</li>
              <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-lg' className="text-success me-2" />Meeting strict project deadlines while maintaining quality.</li>
              <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-lg' className="text-success me-2" />Providing a consistent user experience across all devices and platforms.</li>
              <li className="list-group-item d-flex heading-color"><IconifyIcon icon='bi:check-lg' className="text-success me-2" />Designing for scalability to handle increased user traffic and data</li>
            </ul>
          </Col>
          <Col md={5} lg={4}>
            <Sticky
              disabled={viewPort ? viewPort.width <= 576 : false}
              topOffset={100}
              bottomOffset={0}
              boundaryElement="div.row"
              hideOnBoundaryHit={false}
              stickyStyle={{ transition: '0.2s all linear' }} >
              <Card className="card-body bg-secondary-grad rounded-4 p-4 ms-md-4">
                <ul className="list-group list-group-borderless">
                  <li className="list-group-item mb-3">
                    <small>Client</small>
                    <p className="heading-color fw-semibold mt-1 mb-0">Themesdesginer Agency</p>
                  </li>
                  <li className="list-group-item mb-3">
                    <small>Category</small>
                    <p className="heading-color fw-semibold mt-1 mb-0">UI/UX design</p>
                  </li>
                  <li className="list-group-item mb-3">
                    <small>Location</small>
                    <p className="heading-color fw-semibold mt-1 mb-0">489 Depot Road Midland</p>
                  </li>
                  <li className="list-group-item mb-3">
                    <small>Time spent</small>
                    <p className="heading-color fw-semibold mt-1 mb-0">2023, 4 months</p>
                  </li>
                  <li className="list-group-item d-grid mb-0">
                    <Link href="#" className="btn btn-dark mb-0">View project<IconifyIcon icon='bi:box-arrow-up-right' className="ms-2" /></Link>
                  </li>
                </ul>
              </Card>
            </Sticky>
          </Col>
        </Row>
        <Row className="g-4 align-items-end mt-4 mt-sm-6">
          <Col md={7}>
            <Image src={portfolio1} className="rounded-4" alt="portfolio image" />
          </Col>
          <Col md={4} className=" ms-auto">
            <Image src={portfolio3} className="rounded-4 position-relative" alt="portfolio image" />
          </Col>
          <Col md={6} className=" mx-auto">
            <Image src={portfolio4} className="rounded-4 mt-md-n6" alt="portfolio image" />
          </Col>
        </Row>
        <Card className="card-body bg-secondary bg-opacity-50 p-sm-5 mt-5 mt-sm-7">
          <q className="fs-6 heading-color">Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend.</q>
          <div className="d-flex align-items-center mt-4">
            <div className="avatar">
              <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Emma Watson</h6>
              <small>CEO, Co-founder</small>
            </div>
          </div>
        </Card>
        <Row className="g-lg-4 mt-6">
          <Col lg={5}>
            <h6 className="mb-3"><span className="text-primary me-2">03.</span>Result</h6>
            <p className="lead mb-lg-4">Two assure Edward whence the was. Who worthy yet ten boys denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished.</p>
          </Col>
          <Col lg={7} xl={6} className="ms-auto">
            <p>Partnering with experts, seeking mentorship, and building a network of like-minded individuals can provide valuable insights and support.</p>
            <Row className="row-cols-2 row-cols-md-3 g-4 mt-1">
              <Col>
                <h2 className="mb-0">22<span className="text-primary mb-0">%</span></h2>
                <p className="mb-0">Increase in time spent on website</p>
              </Col>
              <Col>
                <h2 className="mb-0">4.5<span className="text-primary mb-0">M</span></h2>
                <p className="mb-0">View this project got across our social media network</p>
              </Col>
              <Col>
                <h2 className="mb-0">$12.8<span className="text-primary mb-0">M</span></h2>
                <p className="mb-0">Total raised in funding so far</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mt-5 mb-4" />
        <ul className="pagination pagination-border-none d-flex justify-content-between mb-0">
          <li>
            <ul className="list-unstyled">
              <li className="page-item">
                <Link className="page-link" href=""><IconifyIcon icon='bi:arrow-left' className=" me-2 rtl-flip" />Prev project</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="list-unstyled">
              <li className="page-item active"><Link className="page-link" href=""><IconifyIcon icon='bi:grid-fill' /></Link></li>
            </ul>
          </li>
          <li>
            <ul className="list-unstyled">
              <li className="page-item">
                <Link className="page-link" href="">Next project<IconifyIcon icon='bi:arrow-right' className=" ms-2 rtl-flip" /></Link>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Project