import { StaticImageData } from "next/image"
import developmentImg from '@/assets/images/services/3d-icon/development.png'
import marketingImg from '@/assets/images/services/3d-icon/marketing.png'
import brandImg from '@/assets/images/services/3d-icon/brand.png'
import databaseImg from '@/assets/images/services/3d-icon/database.png'
import consultingImg from '@/assets/images/services/3d-icon/consulting.png'
import appDevImg from '@/assets/images/services/3d-icon/app-dev.png'

export type ServiceType = {
  title: string
  icon: StaticImageData
  features: string[]
  badge?: string
}

export const serviceData: ServiceType[] = [
  {
    title: "Web design & Development",
    icon: developmentImg,
    features: [
      "Custom website design",
      "E-commerce solutions",
      "Website maintenance and support"
    ],
  },
  {
    title: "Digital marketing solutions",
    icon: marketingImg,
    features: [
      "Fundamentals of SEO",
      "Social media marketing",
      "Pay-Per-Click"
    ],
  },
  {
    title: "Brand strategy & Identity",
    icon: brandImg,
    badge: "New",
    features: [
      "Logo design",
      "Brand strategy",
      "Visual identity"
    ],
  },
  {
    title: "Database analysis",
    icon: databaseImg,
    features: [
      "Data collection and management",
      "Data analysis",
      "Reporting and visualization"
    ],
  },
  {
    title: "Consulting services",
    icon: consultingImg,
    features: [
      "Business strategy",
      "Technology consulting",
      "Operational improvement"
    ],
  },
  {
    title: "Mobile app development",
    icon: appDevImg,
    features: [
      "Custom app design & development",
      "Cross-Platform solutions",
      "Usability testing"
    ],
  }
]