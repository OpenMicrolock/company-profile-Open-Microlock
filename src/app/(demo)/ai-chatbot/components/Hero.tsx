import Image from 'next/image'
import React from 'react'
import chartHeart from '@/assets/images/elements/chat-heart.png'
import chartBoat from '@/assets/images/bg/chat-boat.jpg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration-2.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="pt-0">
      <div className="bg-dark position-relative overflow-hidden pb-6 pt-8 py-sm-9">
        <div className="position-absolute end-0 top-0">
          <Image src={decorationImg} className="opacity-1 blur-8 h-300px rotate-335" alt="Grad shape" />
        </div>
        <Container className="position-relative pb-7" data-bs-theme="dark">
          <div className="inner-container">
            <h1 className="text-center mb-0">Rapidly Develop an <span className="text-purple">AI Chatbot</span> Using Your Expertise</h1>
            <ul className="list-inline d-flex justify-content-center flex-wrap gap-2 gap-md-4 mb-0 mt-4 mt-xl-5">
              <li className="list-inline-item"> <IconifyIcon icon='bi:cloud-fill' className=" text-pink me-2 lead" />Cloud hosting
              </li>
              <li className="list-inline-item"> <IconifyIcon icon='bi:chat-square-quote-fill' className="text-success me-2 lead" />Team collaboration</li>
              <li className="list-inline-item"> <IconifyIcon icon='bi:lightbulb-fill' className="text-warning me-2 lead" />Fully adaptable</li>
              <li className="list-inline-item"> <IconifyIcon icon='bi:database-fill' className="text-info me-2 lead" />Unify your data</li>
            </ul>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-4 mt-xl-5">
              <Button variant='primary' className="icon-link icon-link-hover mb-0">Start building now <IconifyIcon icon='bi:arrow-right' /></Button>
              <Button variant='white-shadow' className="mb-0">Get started</Button>
            </div>
          </div>
        </Container>
      </div>
      <Container className="mt-n7 mt-sm-n9">
        <div className="bg-body bg-opacity-10 bg-blur border border-white border-opacity-10 position-relative rounded-5 shadow-primary-lg p-2 p-sm-4">
          <span className="d-none d-sm-block">
            <svg className="mt-n4" width={40} height={10} viewBox="0 0 40 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="text-success" d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="currentColor" />
              <path className="text-warning" d="M25 5C25 7.76142 22.7614 10 20 10C17.2386 10 15 7.76142 15 5C15 2.23858 17.2386 0 20 0C22.7614 0 25 2.23858 25 5Z" fill="currentColor" />
              <path className="text-danger" d="M40 5C40 7.76142 37.7614 10 35 10C32.2386 10 30 7.76142 30 5C30 2.23858 32.2386 0 35 0C37.7614 0 40 2.23858 40 5Z" fill="currentColor" />
            </svg>
          </span>
          <Image src={chartBoat} className="rounded-4 shadow-sm" alt="chatbot image" />
          <Image src={chartHeart} className="position-absolute top-0 start-0 ms-8 mt-n4 d-none d-sm-block" alt='chartHeart' />
        </div>
      </Container>
    </section>
  )
}

export default Hero