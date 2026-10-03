import TopNavigationPage from '@/components/TopNavigation'
import Hero from './components/Hero'
import Step from './components/Step'
import Content from './components/Content'
import Contact from './components/Contact'
import Footer from '@/components/Footer'

const ServicesListPage = () => {
  return (
    <>
      <TopNavigationPage position showSignUp />
      <Hero />
      <Step />
      <Content />
      <Contact />
      <Footer />
    </>

  )
}

export default ServicesListPage