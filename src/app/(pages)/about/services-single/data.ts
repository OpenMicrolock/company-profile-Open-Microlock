
import avatar9 from '@/assets/images/avatar/09.jpg'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar7 from '@/assets/images/avatar/07.jpg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import { StaticImageData } from 'next/image'

type DetailBoxType = {
  title: string
  description: string
}

type ProcessType = {
  title: string
  description: string
}

type TestimonialsType = {
  rating: number
  description: string
  name: string
  role: string
  avatar: StaticImageData
}

export const detailBoxData: DetailBoxType[] = [
  {
    title: "Custom Design",
    description: "We create tailor-made websites that reflect your brand's identity and engage your audience."
  },
  {
    title: "Scalability",
    description: "Our solutions are built to grow with your business, ensuring long-term success."
  },
  {
    title: "Performance optimization",
    description: "We ensure fast loading times and smooth user experiences to boost."
  },
  {
    title: "SEO-friendly",
    description: "Our websites are optimized for search engines to help you rank higher and attract more traffic."
  }
]

export const processData: ProcessType[] = [
  {
    title: "Discovery & Planning",
    description: "We begin by understanding your business goals, target audience, and project requirements."
  },
  {
    title: "Design & Prototyping",
    description: "Our design team creates wireframes and prototypes based on the project plan."
  },
  {
    title: "Development",
    description: "In this phase, our developers bring the design to life using the latest technologies and best practices."
  },
  {
    title: "Testing & Launch",
    description: "Before going live, we conduct thorough testing to identify and fix any issues."
  }
]

export const testimonialsData: TestimonialsType[] = [
  {
    rating: 4.5,
    description: "Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.",
    name: "Jacqueline Miller",
    role: "Product designer",
    avatar: avatar9
  },
  {
    rating: 5,
    description: "Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.",
    name: "Louis Ferguson",
    role: "Web Developer",
    avatar: avatar10
  },
  {
    rating: 4.5,
    description: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.",
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar4
  },
  {
    rating: 4.5,
    description: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    name: "Allen Smith",
    role: "Manager",
    avatar: avatar7
  },
  {
    rating: 4.5,
    description: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.",
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar1
  }
]