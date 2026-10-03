'use client'
import TopNavigationPage from '@/components/TopNavigation'
import ThemeToggleDropdown from '@/components/TopNavigation/components/ThemeToggleDropdown'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Cta from './components/Cta'
import Features from './components/Features'
import Hero from './components/Hero'
import NewsLetter from './components/NewsLetter'
import ProductFeatures from './components/ProductFeatures'
import ProductFeatures2 from './components/ProductFeatures2'
import ProductsGrid from './components/ProductsGrid'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const ProductLandingPage = () => {
  return (
    <>
      <div className='header-absolute'>
        <div className="alert fade show bg-dark border-0 rounded-0 text-center py-2 m-0 d-none d-lg-block" role="alert" style={{ zIndex: 1025 }}>
          <Container className="d-flex justify-content-between px-2 px-xl-4">
            <p className="small text-white mb-0"><IconifyIcon icon='bi:headset' className="me-2" />Call us: <Link href="" className="link-white">+123 555 66 </Link></p>
            <p className="small text-white mb-0">🔥 Hurry, limited time 40% discount!</p>
            <ul className="list-inline d-flex align-items-center gap-2 dropdown-hover mb-0">
              <ThemeToggleDropdown />
              <li className="list-inline-item vr"> </li>
              <li className="list-inline-item">
                <Link href="" className="text-white text-primary-hover fw-light small">Login</Link>
                <span className="text-white mx-1">/</span>
                <Link href="" className="text-white text-primary-hover fw-light small">Register</Link>
              </li>
            </ul>
          </Container>
        </div>
        <TopNavigationPage hideThemeToggler showSearchInput />
      </div>
      <Hero />
      <Features />
      <ProductFeatures />
      <ProductFeatures2 />
      <ProductsGrid />
      <Cta />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>

  )
}

export default ProductLandingPage