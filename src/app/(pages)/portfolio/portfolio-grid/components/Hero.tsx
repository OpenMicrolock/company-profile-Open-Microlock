import Image from 'next/image'
import React from 'react'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-dark position-relative pt-xl-8 overflow-hidden">
      <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
        <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <div className="inner-container text-center mx-auto position-relative pt-4 pt-sm-5">
        <nav className="mb-2 d-flex justify-content-center" aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-dark pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
          </ol>
        </nav>
        <h1 className="mb-5 text-white">Our Portfolio</h1>
      </div>
      <span>
        <svg className="position-absolute bottom-0 start-0 mb-n1 mb-lg-n5 mb-xxl-n7" viewBox="0 0 1950 237" xmlSpace="preserve">
          <path className="fill-body" d="M1949.5,236.4H0v-164c717.2-131.2,1598.5-54.7,1949.5,0V236.4z" />
        </svg>
      </span>
    </section>
  )
}

export default Hero