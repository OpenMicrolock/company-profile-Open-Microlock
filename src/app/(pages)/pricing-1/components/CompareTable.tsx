'use client'
import React from 'react'
import { clientData } from '../data'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import rocketImg from '@/assets/images/elements/rocket-03.png'
import { Col, Container, Row, Table } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'

const CompareTable = () => {
  return (
    <section className="pt-0 position-relative">
      <div className="position-absolute end-0 top-0 mt-n7 me-6 d-none d-md-block">
        <Image src={rocketImg} height={200} className="h-200px" alt="rocket image" />
      </div>
      <Container>
        <h2 className="text-center mb-0">Compare plan</h2>
        <div className="table-responsive-xl mt-2 mt-md-5">
          <Table className="table table-striped table-borderless align-middle">
            <thead className="align-middle">
              <tr>
                <th scope="col">
                  <p className="mb-0 fs-5 heading-color">Features</p>
                </th>
                <th scope="col">
                  <div className="text-center p-3">
                    <p className="mb-3 heading-color">Basic plan</p>
                    <Link href="" className="btn btn-sm btn-outline-primary mb-0">Get started</Link>
                  </div>
                </th>
                <th scope="col">
                  <div className="text-center p-3">
                    <p className="mb-3 heading-color">Standard plan</p>
                    <Link href="" className="btn btn-sm btn-outline-primary mb-0">Get started</Link>
                  </div>
                </th>
                <th scope="col">
                  <div className="text-center p-3">
                    <p className="mb-3 heading-color">Enterprise plan</p>
                    <Link href="" className="btn btn-sm btn-outline-primary mb-0">Get started</Link>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="border-top-0">
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Storage space</span></th>
                <td className="text-center"> 40GB </td>
                <td className="text-center"> 60GB </td>
                <td className="text-center"> Unlimited </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Cloud connected</span></th>
                <td className="text-center"> Yes </td>
                <td className="text-center"> Yes </td>
                <td className="text-center"> Yes </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Coding tools</span></th>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Advance debugging</span></th>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Mobile apps</span></th>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /></td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Web tools</span></th>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /></td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Version control</span></th>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Security</span></th>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
              </tr>
              <tr>
                <th scope="row"><span className="fw-normal heading-color ps-lg-4 mb-0">Team access</span></th>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-danger"> <IconifyIcon icon='bi:x-circle' className="fa-lg" /> </td>
                <td className="text-center text-success"> <IconifyIcon icon='bi:check-circle' className="fa-lg" /> </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Row className="g-4 align-items-center mt-6">
          <Col lg={3}>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <h6 className="mb-0">Trusted by leading companies</h6>
              <div className="vr bg-primary-grad opacity-1 d-none d-lg-block" />
            </div>
          </Col>
          <Col lg={9}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              spaceBetween={50}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
            >
              {
                clientData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swap-logo">
                      <Image src={item.logo} className="p-2 p-lg-3" alt="client-img" />
                      <div className="swap-item">
                        <Image src={item.logoLight} className="dark-mode-item p-2 p-lg-3" alt="client logo" />
                        <Image src={item.logoDark} className="light-mode-item p-2 p-lg-3" alt="client logo" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CompareTable