import { StaticImageData } from "next/image"
import features1 from "@/assets/images/product/features/01.jpg"
import features2 from "@/assets/images/product/features/02.jpg"
import features3 from "@/assets/images/product/features/03.jpg"
import features4 from "@/assets/images/product/features/04.jpg"
import features5 from "@/assets/images/product/features/05.jpg"
import watches1Img from "@/assets/images/product/watches/01.png"
import watches2Img from "@/assets/images/product/watches/02.png"
import watches3Img from "@/assets/images/product/watches/03.png"
import watches4Img from "@/assets/images/product/watches/04.png"
import avatar1 from "@/assets/images/avatar/01.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar6 from "@/assets/images/avatar/06.jpg"

type ProductFeaturesType = {
  image: StaticImageData
  title: string
  description: string
}
type ProductFeatures2Type = {
  icon: string
  title: string
  description: string
  variant: string
}

export type ProductType = {
  name: string
  description: string
  popular?: boolean
  price: number
  image: StaticImageData
  old_price?: number
}

type TestimonialType = {
  name: string
  role: string
  avatar: StaticImageData
  review: string
}

export const productFeaturesData: ProductFeaturesType[] = [
  {
    title: "Advanced fitness tracking",
    description: "Helping you stay on top of your health and fitness goals every step of the way",
    image: features1
  },
  {
    title: "Heart rate Monitoring",
    description: "Monitor your heart rate in real-time",
    image: features2
  },
  {
    title: "GPS Navigation",
    description: "Helps you navigate and track your routes.",
    image: features3
  },
  {
    title: "Voice assistant",
    description: "Voice commands to set reminders, check the weather, and more.",
    image: features4
  },
  {
    title: "Connectivity",
    description: "Stay connected with your devices, using Bluetooth and Wi-Fi",
    image: features5
  }
]

export const productFeatures2Data: ProductFeatures2Type[] = [

  {
    icon: "bi:smartwatch",
    title: "High-resolution display",
    description: "Personalize your watch with a variety of designs and layouts.",
    variant: "text-primary"
  },
  {
    icon: "bi:app-indicator",
    title: "Smart notifications",
    description: "Receive calls, messages, and app notifications directly on your wrist",
    variant: "text-pink"
  },
  {
    icon: "bi:battery-full",
    title: "Long battery life",
    description: "Enjoy up to 7 days of battery life on a single charge.",
    variant: "text-success"
  },
  {
    icon: "bi:droplet-fill",
    title: "Water resistant design",
    description: "Waterproof up to 50 meters, perfect for swimming and showering",
    variant: "text-purple"
  },
  {
    icon: "bi:music-note-list",
    title: "Music control",
    description: "Personalize your watch with a variety of designs and layouts.",
    variant: "text-warning"
  }


]

export const productData: ProductType[] = [
  {
    name: "Apex Pro",
    description: "Perfect for athletes and tech enthusiasts alike.",
    price: 358,
    image: watches1Img,
  },
  {
    name: "Classic Fit v2",
    description: "Perfect for athletes and tech enthusiasts alike.",
    price: 275.00,
    popular: true,
    old_price: 320.00,
    image: watches2Img
  },
  {
    name: "Active Sport SE",
    description: "Stay connected and on top of your health goals with this watch.",
    price: 410,
    image: watches3Img,
  },
  {
    name: "Luxe Edition Ultra 2",
    description: "Perfect for athletes and tech enthusiasts alike.",
    price: 358,
    image: watches4Img,
  }
]

export const testimonialData: TestimonialType[] = [

  {
    name: "Jacqueline Miller",
    role: "Product designer",
    avatar: avatar1,
    review: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh."
  },
  {
    name: "Louis Ferguson",
    role: "Web Developer",
    avatar: avatar2,
    review: "Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive."
  },
  {
    name: "Samuel Bishop",
    role: "UI/UX designer",
    avatar: avatar6,
    review: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
  }

]