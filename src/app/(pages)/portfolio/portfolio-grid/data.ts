import { StaticImageData } from "next/image"
import portfolio1 from "@/assets/images/portfolio/3by4/01.jpg"
import portfolio9 from "@/assets/images/portfolio/3by4/09.jpg"
import portfolio3 from "@/assets/images/portfolio/3by4/03.jpg"
import portfolio4 from "@/assets/images/portfolio/3by4/04.jpg"
import portfolio5 from "@/assets/images/portfolio/3by4/05.jpg"
import portfolio7 from "@/assets/images/portfolio/3by4/07.jpg"
import portfolio2 from "@/assets/images/portfolio/3by4/02.jpg"
import portfolio6 from "@/assets/images/portfolio/3by4/06.jpg"
import portfolio8 from "@/assets/images/portfolio/3by4/08.jpg"


export type ProtFolioType = {
  title: string
  category: string
  image: StaticImageData
  link: string
}

export const protFolioData: ProtFolioType[] = [
  {
    title: "Design blast",
    category: "UI/UX design",
    image: portfolio1,
    link: "/portfolio/study1"
  },
  {
    title: "Media mastery",
    category: "SEO",
    image: portfolio9,
    link: "/portfolio/study1"
  },
  {
    title: "Brand revamp",
    category: "Logo design",
    image: portfolio3,
    link: "/portfolio/study1"
  },
  {
    title: "ShopSmart",
    category: "E-commerce",
    image: portfolio4,
    link: "/portfolio/study2"
  },
  {
    title: "Surge Tech",
    category: "UI/UX design",
    image: portfolio5,
    link: "/portfolio/study2"
  },
  {
    title: "App Innovation",
    category: "Development",
    image: portfolio7,
    link: "/portfolio/study2"
  },
  {
    title: "Momentum",
    category: "Design",
    image: portfolio2,
    link: "/portfolio/study1"
  },
  {
    title: "TechWave",
    category: "Animation",
    image: portfolio6,
    link: "/portfolio/study2"
  },
  {
    title: "Cropo stone",
    category: "Packaging",
    image: portfolio8,
    link: "/portfolio/study1"
  }
]