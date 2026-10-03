import { StaticImageData } from "next/image"
import rocketImg from '@/assets/images/elements/rocket.png'
import thunderImg from '@/assets/images/elements/thunder.png'
import fireImg from '@/assets/images/elements/fire.png'
import blog1Img from '@/assets/images/blog/4by3/01.jpg'
import blog2Img from '@/assets/images/blog/4by3/02.jpg'
import blog3Img from '@/assets/images/blog/4by3/03.jpg'
import blog4Img from '@/assets/images/blog/4by3/04.jpg'

type PricingPlanType = {
  icon: StaticImageData
  name: string
  price: number
  features: string[]
}

type PricingType = {
  duration: 'month' | 'year'
  plans: PricingPlanType[]
}

type BlogType = {
  image: StaticImageData
  title: string
  type: string
  author: string
}

export const pricingData: PricingType[] = [
  {
    duration: "month",
    plans: [
      {
        icon: rocketImg,
        name: 'Starter plan',
        price: 25,
        features: ['Customizable features', '5 user accounts', 'Customizable features', '10 GB storage', 'Email support']
      },
      {
        icon: thunderImg,
        name: 'Professional plan',
        price: 49,
        features: ['Access to basic features', '15 user accounts', 'Customizable features', '50 GB storage', 'Email support', 'Dedicated account manager']
      },
      {
        icon: fireImg,
        name: 'Enterprise plan',
        price: 89,
        features: ['Access to basic features', '30 user accounts', 'Customizable features', '100 GB storage', 'Email support', 'Dedicated account manager']
      }
    ]
  },
  {
    duration: "year",
    plans: [
      {
        icon: rocketImg,
        name: 'Starter plan',
        price: 20,
        features: ['Customizable features', '5 user accounts', 'Customizable features', '10 GB storage', 'Email support']
      },
      {
        icon: thunderImg,
        name: 'Professional plan',
        price: 39,
        features: ['Access to basic features', '15 user accounts', 'Customizable features', '50 GB storage', 'Email support', 'Dedicated account manager']
      },
      {
        icon: rocketImg,
        name: 'Enterprise plan',
        price: 40,
        features: ['Access to basic features', '30 user accounts', 'Customizable features', '100 GB storage', 'Email support', 'Dedicated account manager']
      }
    ]
  },
]

export const blogData: BlogType[] = [
  {
    type: "Lifestyle",
    image: blog1Img,
    title: "Harnessing the power of real-time analytics",
    author: "Carolyn Ortiz",
  },
  {
    type: "Research",
    image: blog2Img,
    title: "The ultimate guide to customizable reports",
    author: "Louis Ferguson",
  },
  {
    type: "Research",
    image: blog3Img,
    title: "Sleek and Responsive - Designing with Bootstrap and Folio",
    author: "Carolyn Ortiz",
  },
  {
    type: "Design",
    image: blog4Img,
    title: "Interactive Web Design with Bootstrap and Themesdesginer",
    author: "Louis Ferguson",
  }
]