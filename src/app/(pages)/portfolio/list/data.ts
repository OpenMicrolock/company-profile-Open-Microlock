import { StaticImageData } from "next/image"
import { ProtFolioType } from "../portfolio-grid/data"
import portfolio4 from "@/assets/images/portfolio/list/04.jpg"
import portfolio2 from "@/assets/images/portfolio/list/02.jpg"
import portfolio3 from "@/assets/images/portfolio/list/03.jpg"
import portfolio1 from "@/assets/images/portfolio/list/01.jpg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark8 from "@/assets/images/client/logo-dark/08.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight8 from "@/assets/images/client/logo-light/08.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"


type PortfolioType = {
  title: string
  description: string
  year: number
  categories: string[]
  image: StaticImageData
  clientLogo: {
    light: StaticImageData
    dark: StaticImageData
  }
  link: string
}

export const portfolioData: PortfolioType[] = [
  {
    title: "Mobile app development",
    description: "The app received positive feedback for its functionality and user experience, helping the client reach a wider audience.",
    year: 2024,
    categories: ["Branding", "Packaging", "UI/UX design"],
    image: portfolio4,
    clientLogo: {
      light: logoDark1,
      dark: logoLight1
    },
    link: "/portfolio/study1"
  },
  {
    title: "Brand identity development",
    description: "The most powerful software & app landing page for any kind of app and software marketing business.",
    year: 2023,
    categories: ["Graphics", "UI/UX design"],
    image: portfolio2,
    clientLogo: {
      light: logoDark3,
      dark: logoLight3
    },
    link: "/portfolio/study2"
  },
  {
    title: "Transforming ideas into reality",
    description: "The website significantly improved the client's online sales and customer engagement.",
    year: 2021,
    categories: ["Web Design", "Branding", "UI/UX design"],
    image: portfolio3,
    clientLogo: {
      light: logoDark8,
      dark: logoLight8
    },
    link: "/portfolio/study1"
  },
  {
    title: "Digital marketing overhaul",
    description: "Designed and developed a responsive e-commerce platform for folio agency retail.",
    year: 2020,
    categories: ["Marketing", "SEO", "Social media"],
    image: portfolio1,
    clientLogo: {
      light: logoDark5,
      dark: logoLight5
    },
    link: "/portfolio/study2"
  }
]