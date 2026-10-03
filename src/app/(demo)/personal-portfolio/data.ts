import { StaticImageData } from "next/image"
import blog3 from "@/assets/images/blog/4by4/03.jpg"
import blog1 from "@/assets/images/blog/4by4/01.jpg"
import blog6 from "@/assets/images/blog/4by4/06.jpg"
import blog5 from "@/assets/images/blog/4by4/05.jpg"


type ExpertiseType = {
  title: string
  description: string
  icon: string
  bgColor: string
}

type BlogType = {
  title: string,
  date: string,
  readTime: string,
  image: StaticImageData,
}

export const expertiseData: ExpertiseType[] = [
  {
    title: "Web application development",
    description: "Building robust and scalable web applications tailored to your business processes.",
    icon: "bi:pc-display",
    bgColor: "bg-warning",
  },
  {
    title: "UI/UX design",
    description: "I focus on creating interfaces that are both visually appealing and easy to use.",
    icon: "bi:vector-pen",
    bgColor: "bg-pink",
  },
  {
    title: "Web maintenance & support",
    description: "From regular updates to troubleshooting and security checks",
    icon: "bi:globe2",
    bgColor: "bg-info",
  },
  {
    title: "E-commerce solutions",
    description: "Powerful e-commerce platforms that drive sales and enhance the shopping experience.",
    icon: "bi:cart-check",
    bgColor: "bg-success",
  }
]

export const blogData: BlogType[] = [
  {
    title: "10 essential tips for crafting a stunning website",
    date: "Aug 28, 2024",
    readTime: "5 min read",
    image: blog3,
  },
  {
    title: "The future of UI/UX design: trends to watch in 2024",
    date: "Aug 18, 2024",
    readTime: "5 min read",
    image: blog1,
  },
  {
    title: "Behind the scenes of my latest web project",
    date: "Aug 12, 2024",
    readTime: "5 min read",
    image: blog6,
  },
  {
    title: "How to optimize your website for SEO in 2024",
    date: "Aug 12, 2024",
    readTime: "5 min read",
    image: blog5,
  }
]