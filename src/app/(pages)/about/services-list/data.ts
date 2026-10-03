import { StaticImageData } from "next/image"
import services1 from "@/assets/images/services/4by3/01.jpg"
import services2 from "@/assets/images/services/4by3/02.jpg"
import services3 from "@/assets/images/services/4by3/03.jpg"
import services4 from "@/assets/images/services/4by3/04.jpg"


type ServicesType = {
title: string
image : StaticImageData
description: string
features: string[]
isCenter?: boolean
}

export const servicesData: ServicesType[] = [
  {
    title: "Digital marketing solutions",
    image: services1,
    description: "Digital marketing is the art and science of reaching, and influencing through online channels.",
    features: [
      "SEO marketing",
      "Data scraping",
      "Facebook marketing",
      "Email marketing",
      "Social marketing"
    ],

  },
  {
    title: "Brand strategy & identity",
    image: services2,
    description: "Develop comprehensive brand strategies including market research, positioning.",
    features: [
      "Logo design",
      "Brand strategy",
      "Visual identity",
      "Video animation"
    ],
    isCenter: true
  },
  {
    title: "Web design & development",
    image: services3,
    description: "Provide ongoing maintenance, updates, and technical support to ensure websites.",
    features: [
      "Custom website design",
      "E-commerce solutions",
      "Maintenance and support"
    ],
  },
  {
    title: "Database analysis",
    image: services4,
    description: "Implement systems for collecting data from various sources to ensure accuracy and reliability.",
    features: [
      "Data collection",
      "Data management",
      "Reporting",
      "Visualization"
    ],
    isCenter: true
  }

]