import elementsImg from '@/assets/images/elements/404.svg'
import decorationImg from '@/assets/images/elements/grad-shape/blur-decoration.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="bg-secondary position-relative pt-xl-8 overflow-hidden">
      <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
        <Image src={decorationImg} className="blur-7 opacity-2" alt="Grad shape" />
      </div>
      <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
        <Image src={decorationImg} className="blur-8 opacity-1" alt="Grad shape" />
      </div>
      <Container className="text-center mx-auto position-relative pt-4 pt-sm-5">
        <Image src={elementsImg} className="h-md-400px mb-4 mb-lg-6" alt="404 image" />
        <h1 className="h3 mb-3">Page not found</h1>
        <p className="mb-3">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="btn btn-white-shadow mb-0">Back to home</Link>
      </Container>
    </section >
  )
}

export default Hero