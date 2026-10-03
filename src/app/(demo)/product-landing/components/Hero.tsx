import Image from 'next/image'
import React from 'react'
import weatherImg from '@/assets/images/elements/weather-info.png'
import notifImg from '@/assets/images/elements/call-notif.png'
import digitalWatchImg from '@/assets/images/product/digital-watch-hero.png'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="position-relative overflow-hidden pt-xl-9 pb-0">
      <div className="position-absolute top-0 end-0 mt-8 me-n5">
        <Image src={decorationImg} className="blur-9 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute mx-xl-5 ms-xxl-9 mt-8 rotate-335 d-none d-xl-block">
        <Image src={weatherImg} alt="weather-info" />
      </div>
      <div className="inner-container text-center align-items-center mt-5 mb-8">
        <h1 className="display-5 mb-4">Smart technology on your wrist</h1>
        <p className="w-75 mx-auto mb-4">Discover the perfect blend of style and technology. Stay connected, track your health, and elevate your everyday life.</p>
        <Button variant='primary' className="mb-0">Explore collections</Button>
      </div>
      <div className="bg-secondary-grad position-relative">
        <span>
          <svg className="position-absolute top-0 start-0" viewBox="0 0 1921 209" xmlSpace="preserve">
            <path className="fill-body" d="M1920.5,209C1092.5-17.8,295.2,114.5,0,209V0h1920.5V209z" />
          </svg>
        </span>
        <Container className="position-relative">
          <div className="position-absolute top-0 end-0 ms-n6 mt-n9 d-none d-sm-block">
            <Image src={notifImg} alt="decoration" />
          </div>
          <Image src={digitalWatchImg} className="mt-n6 mt-md-n8" alt="digital watch image" />
        </Container>
      </div>
    </section>
  )
}

export default Hero