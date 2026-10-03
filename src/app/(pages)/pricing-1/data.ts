import { StaticImageData } from "next/image"
import logo1 from "@/assets/images/client/logo-gray/01.svg"
import logo2 from "@/assets/images/client/logo-gray/02.svg"
import logo3 from "@/assets/images/client/logo-gray/03.svg"
import logo4 from "@/assets/images/client/logo-gray/04.svg"
import logo5 from "@/assets/images/client/logo-gray/05.svg"
import logo6 from "@/assets/images/client/logo-gray/06.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight2 from "@/assets/images/client/logo-light/02.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight4 from "@/assets/images/client/logo-light/04.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"
import logoLight6 from "@/assets/images/client/logo-light/06.svg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark2 from "@/assets/images/client/logo-dark/02.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark4 from "@/assets/images/client/logo-dark/04.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoDark6 from "@/assets/images/client/logo-dark/06.svg"


type FaqType = {
  question: string
  answer: string
  eventKey: string
}

type ClientType = {
  logo: StaticImageData
  logoLight: StaticImageData
  logoDark: StaticImageData
}

type PricingPlanType = {
  icon: string
  title: string
  subTitle: string
  price: number
  features: string[]
  popular?: boolean
}

type PricingType = {
  duration: 'month' | 'year'
  plans: PricingPlanType[]
}

export const faqData: FaqType[] = [
  {
    eventKey: 'heading-1',
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback."
  },
  {
    eventKey: 'heading-2',
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites."
  },
  {
    eventKey: 'heading-3',
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required."
  },
  {
    eventKey: 'heading-4',
    question: "How does customer support work?",
    answer: "Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively."
  }
]

export const clientData: ClientType[] = [
  {
    logo: logo1,
    logoDark: logoDark1,
    logoLight: logoLight1
  },
  {
    logo: logo2,
    logoDark: logoDark2,
    logoLight: logoLight2
  },
  {
    logo: logo3,
    logoDark: logoDark3,
    logoLight: logoLight3
  },
  {
    logo: logo4,
    logoDark: logoDark4,
    logoLight: logoLight4
  },
  {
    logo: logo5,
    logoDark: logoDark5,
    logoLight: logoLight5
  },
  {
    logo: logo6,
    logoDark: logoDark6,
    logoLight: logoLight6
  },
]

export const pricingData : PricingType[] = [
  {
    duration: 'month',
    plans: [
      {
        icon: 'bi:lightning-charge-fill',
        title: 'Basic plan',
        subTitle: 'Basic feature for up to 10 users',
        price: 25,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages']
      },
      {
        icon: 'bi:send-fill',
        title: 'Standard plan',
        subTitle: 'Basic feature for up to 50 users ',
        price: 59,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages', 'Landing pages Web widgets', 'Customizable features']
      },
      {
        icon: 'bi:rocket-takeoff-fill',
        title: 'Enterprise plan',
        subTitle: 'Basic feature for up to 80 users',
        price: 99,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages', 'Landing pages Web widgets', 'Customizable features', '24/7 dedicated Support'],
        popular: true
      },
    ]
  },
  {
    duration: 'year',
    plans: [
      {
        icon: 'bi:lightning-charge-fill',
        title: 'Basic plan',
        subTitle: 'Basic feature for up to 10 users',
        price: 20,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages']
      },
      {
        icon: 'bi:send-fill',
        title: 'Standard plan',
        subTitle: 'Basic feature for up to 50 users ',
        price: 45,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages', 'Landing pages Web widgets', 'Customizable features']
      },
      {
        icon: 'bi:rocket-takeoff-fill',
        title: 'Enterprise plan',
        subTitle: 'Basic feature for up to 80 users',
        price: 75,
        features: ['Up to 05 users monthly', 'Free 5 host domain', 'Google docs style editors', 'Support for 30+ languages', 'Landing pages Web widgets', 'Customizable features', '24/7 dedicated Support'],
        popular: true
      },
    ]
  },
]