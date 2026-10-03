import Image from 'next/image'
import React from 'react'
import icons5Img from '@/assets/images/client/icons/05.svg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="pt-xl-8">
      <Container className="inner-container pt-4 pt-md-5">
        <nav className="mb-2 justify-content-center d-flex" aria-label="breadcrumb">
          <ol className="breadcrumb pt-0">
            <li className="breadcrumb-item"><Link href="/home">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/saas/integrations">Integration</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Integration single</li>
          </ol>
        </nav>
        <div className="bg-secondary rounded-4 d-sm-flex align-items-center p-4 p-sm-5 mb-5 mb-sm-7">
          <div className="icon-xxl text-center shadow-primary bg-body rounded-3 flex-shrink-0">
            <Image src={icons5Img} height={60} className="h-60px" alt='icons5Img' />
          </div>
          <div className="ms-sm-4 mt-3 mt-sm-0">
            <h1 className="h3 mb-1">Connect with Graphlo</h1>
            <span>Expert data synchronization for reliable transfer between your application and external systems</span>
          </div>
        </div>
        <h6 className="mb-3">Overview</h6>
        <p>Integrating with Folio is a game-changer. With this integration, you can effortlessly synchronize data, messages, and tasks between our software and Folio. Enjoy real-time updates, improved communication, and a more organized workflow.</p>
        <p>How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me mean able.</p>
        <h6 className="mb-3 mt-4">step:1 Access master Dashboard</h6>
        <p>With this integration, you can effortlessly synchronize data, messages, and tasks between our software and Folio. Enjoy real-time updates, improved communication, and a more organized workflow.</p>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />Receive instant notifications in Folio whenever there's an update or action in Graphlo
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />Keep all your data consistent and up to date, whether it's customer information, project details, or important messages.
          </li>
        </ul>
        <h6 className="mb-3 mt-4">Step 2: Generate integration token</h6>
        <p>With this integration, you can effortlessly synchronize data, messages, and tasks between our software and Folio. Enjoy real-time updates, improved communication, and a more organized workflow.</p>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />In the Graphlo dashboard, navigate to the "Integrations" or "API Settings" section, usually located in the settings menu
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />Locate the option to generate an integration token and follow the provided instructions.
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />This token will serve as the authentication mechanism between your SaaS application and Graphlo.
          </li>
        </ul>
        <h6 className="mb-3 mt-4">Step 3: Map data fields</h6>
        <ul className="list-group list-group-borderless">
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />After configuring the integration, you'll need to map the relevant data fields between your SaaS application and Graphlo.
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />This mapping ensures that the data exchanged between the two platforms is correctly synchronized.
          </li>
          <li className="list-group-item heading-color d-flex mb-0">
            <IconifyIcon icon='bi:arrow-right' className="me-2" />Common data fields to map may include customer information, product details, orders, and inventory levels.
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Hero