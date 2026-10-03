import { StaticImageData } from "next/image"
import rocketImg from "@/assets/images/elements/rocket.png"
import fireImg from "@/assets/images/elements/fire.png"
import thunderImg from "@/assets/images/elements/thunder.png"



type PricingType = {
  icon: StaticImageData
  title: string
  price: string
  subTitle: string
  popular?: boolean
  features: string[]
}

type FaqType = {
id: string
question: string
answer: string
}

export const pricingData: PricingType[] = [
  {
    icon: rocketImg,
    title: 'Basic plan',
    price: '$59',
    subTitle: 'Ideal for small teams, the Basic plan manages up to 10 projects.',
    features: ['Customizable features', '5 user accounts', 'Customizable features', '10 GB storage', 'Email support']
  },
  {
    icon: fireImg,
    title: 'Professional plan',
    price: '$99',
    subTitle: 'Get priority email support and access to premium templates for a more comprehensive solution.',
    features: ['Access to basic features', '15 user accounts', 'Customizable features', '50 GB storage', 'Dedicated account manager']
  },
  {
    icon: thunderImg,
    title: 'Enterprise plan',
    price: 'Custom',
    subTitle: 'For businesses with unique requirements, our Custom Plan delivers a fully personalized experience.',
    features: ['Unlimited projects', 'Custom reporting and analytics', 'Dedicated account manager', 'Tailored support and consulting', 'Personalized onboarding and training'],
    popular: true
  },
]

export const faqData: FaqType[] = [
  {
    id: "heading-1",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback."
  },
  {
    id: "heading-2",
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites."
  },
  {
    id: "heading-3",
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required."
  },
  {
    id: "heading-4",
    question: "How does customer support work?",
    answer: "Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively."
  },
  {
    id: "heading-5",
    question: "Are there any setup fees?",
    answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee. We provide a range of tools, guides, and best practices to help you create designs, websites."
  }
]