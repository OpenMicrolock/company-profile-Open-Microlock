import Image from 'next/image'
import React from 'react'
import decoration2Img from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import icons7 from '@/assets/images/client/icons/07.svg'
import icons1 from '@/assets/images/client/icons/01.svg'
import icons4 from '@/assets/images/client/icons/04.svg'
import icons10 from '@/assets/images/client/icons/10.svg'
import logoIcon from '@/assets/images/logo-icon.svg'
import icons12 from '@/assets/images/client/icons/12.svg'
import icons9 from '@/assets/images/client/icons/09.svg'
import icons11 from '@/assets/images/client/icons/11.svg'
import icons5 from '@/assets/images/client/icons/05.svg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Integrations = () => {
  return (
    <section>
      <Container className="position-relative">
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-8">
          <Image src={decoration2Img} className="opacity-2 blur-9" alt="Grad shape" />
        </div>
        <Row className="position-relative z-index-2">
          <Col md={8} className="mx-auto text-center">
            <h2 className="mb-4">Maximize efficiency with seamless <span className="text-primary">Integrations</span></h2>
            <p className="mb-4">Our robust integration capabilities ensure your data flows smoothly across systems, empowering you to streamline operations and boost productivity</p>
            <Link href="/saas/integrations" className="btn btn-primary-grad icon-link icon-link-hover">Explore all integrations<IconifyIcon icon='bi:arrow-right' /> </Link>
          </Col>
        </Row>
        <Row className="row-cols-9 g-3 justify-content-sm-between position-relative z-index-2 mt-4 mt-sm-7">
          <Col className="d-none d-lg-flex justify-content-start mt-n8">
            <div className="icon-md card rounded-circle shadow-primary justify-content-center">
              <Image src={icons7}  className="h-20px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-none d-md-flex justify-content-start mt-n6">
            <div className="icon-lg card rounded-circle shadow-primary justify-content-center">
              <Image src={icons1}  className="h-30px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-none d-sm-flex justify-content-start mt-n4">
            <div className="icon-lg card rounded-circle shadow-primary justify-content-center">
              <Image src={icons4}  className="h-30px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-flex justify-content-start">
            <div className="icon-xl card rounded-circle shadow-primary justify-content-center align-items-center">
              <Image src={icons10} height={40} width={40}  className="h-40px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-flex">
            <div className="icon-xxl card rounded-circle shadow-primary justify-content-center">
              <Image src={logoIcon}  className="h-50px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="icon-xl card rounded-circle shadow-primary align-items-center justify-content-center">
              <Image src={icons12}  className="h-40px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-none d-sm-flex justify-content-end mt-n4">
            <div className="icon-lg card rounded-circle shadow-primary justify-content-center">
              <Image src={icons9}  className="h-30px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-none d-md-flex justify-content-end mt-n6">
            <div className="icon-lg card rounded-circle shadow-primary justify-content-center">
              <Image src={icons11}  className="h-30px" alt="client icon" />
            </div>
          </Col>
          <Col className="d-none d-lg-flex justify-content-end mt-n8">
            <div className="icon-md card rounded-circle shadow-primary justify-content-center">
              <Image src={icons5}  className="h-20px" alt="client icon" />
            </div>
          </Col>
        </Row>
        <div className="bg-secondary rounded-4 d-xl-flex align-items-center text-center position-relative z-index-2 p-4 mt-7">
          <ul className="avatar-group align-items-center justify-content-center mb-2 mb-xl-0">
            <li className="avatar">
              <Image className="avatar-img rounded-circle" src={avatar2} alt="avatar" />
            </li>
            <li className="avatar">
              <Image className="avatar-img rounded-circle" src={avatar5} alt="avatar" />
            </li>
            <li className="avatar">
              <Image className="avatar-img rounded-circle" src={avatar10} alt="avatar" />
            </li>
            <li className="avatar">
              <Image className="avatar-img rounded-circle" src={avatar9} alt="avatar" />
            </li>
          </ul>
          <p className="heading-color lead mb-2 mb-xl-0 ms-xl-3">Join over 15M+ users transforming ideas</p>
          <p className="heading-color lead mb-2 mb-xl-0 ms-auto"><Link href="/auth/sign-up" className="hover-underline-animation">Create an account</Link> and kickstart your business</p>
        </div>
      </Container>
    </section>
  )
}

export default Integrations