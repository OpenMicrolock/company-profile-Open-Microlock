import { StaticImageData } from "next/image"
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatar10 from "@/assets/images/avatar/10.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar7 from "@/assets/images/avatar/07.jpg"
import avatar1 from "@/assets/images/avatar/01.jpg"


type SellingType = {
  icon: string
  icon_color: string
  title: string
}

type JobListType = {
  title: string
  location: string
  department: string
}

type ReviewType = {
name: string
role: string
avatar: StaticImageData
rating: number
description: string
}

export const sellingData: SellingType[] = [
  {
    icon: "bi:people",
    icon_color: "text-pink",
    title: "Collaborative culture",
  },
  {
    icon: "bi:bullseye",
    icon_color: "text-purple",
    title: "Competitive benefits",
  },
  {
    icon: "bi:boxes",
    icon_color: "text-success",
    title: "Impactful projects",
  },
  {
    icon: "bi:fire",
    icon_color: "text-primary",
    title: "Community focused",
  },
  {
    icon: "bi:gem",
    icon_color: "text-info",
    title: "Cutting-Edge technology",
  },
  {
    icon: "bi:layers",
    icon_color: "text-warning",
    title: "Inspiring leadership",
  }
]

export const jonListData: JobListType[] = [
  {
    title: "Sales account executive",
    location: "London",
    department: "Sales",
  },
  {
    title: "General office manager",
    location: "Remote work",
    department: "Software development",
  },
  {
    title: "Machine learning specialist",
    location: "New York",
    department: "Design",
  },
  {
    title: "Senior product manager",
    location: "London",
    department: "Sales",
  }
]

export const reviewData: ReviewType[] = [
  {
    name: "Jacqueline Miller",
    role: "Product designer",
    avatar: avatar9,
    rating: 4.5,
    description: "Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive."
  },
  {
    name: "Louis Ferguson",
    role: "Web Developer",
    avatar: avatar10,
    rating: 5,
    description: "Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no."
  },
  {
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar4,
    rating: 4.5,
    description: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
  },
  {
    name: "Allen Smith",
    role: "Manager",
    avatar: avatar7,
    rating: 4.5,
    description: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
  },
  {
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar1,
    rating: 4.5,
    description: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
  }
]