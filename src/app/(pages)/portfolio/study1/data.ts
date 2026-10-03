import { StaticImageData } from "next/image"
import portfolio1Img from "@/assets/images/portfolio/4by4/01.jpg"
import portfolio2Img from "@/assets/images/portfolio/4by4/02.jpg"
import portfolio5Img from "@/assets/images/portfolio/4by4/05.jpg"


type RelatedType = {
  title: string
  category: string
  image: StaticImageData
}

export const relatedData: RelatedType[] = [
  {
    title: "Mobile app development",
    category: "UI/UX design",
    image: portfolio1Img,
  },
  {
    title: "Digital marketing overhaul",
    category: "Marketing",
    image: portfolio2Img,
  },
  {
    title: "TechWave",
    category: "Animation",
    image: portfolio5Img,
  },
  {
    title: "Mobile app development",
    category: "UI/UX design",
    image: portfolio1Img,
  },
] 