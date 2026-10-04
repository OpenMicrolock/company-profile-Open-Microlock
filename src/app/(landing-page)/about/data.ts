import { StaticImageData } from "next/image"
import logo1 from "@/assets/images/client/logo-gray/01.svg"
import logo2 from "@/assets/images/client/logo-gray/02.svg"
import logo3 from "@/assets/images/client/logo-gray/03.svg"
import logo4 from "@/assets/images/client/logo-gray/04.svg"
import logo5 from "@/assets/images/client/logo-gray/05.svg"
import logo6 from "@/assets/images/client/logo-gray/06.svg"
import logo7 from "@/assets/images/client/logo-gray/07.svg"
import logo8 from "@/assets/images/client/logo-gray/08.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight2 from "@/assets/images/client/logo-light/02.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight4 from "@/assets/images/client/logo-light/04.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"
import logoLight6 from "@/assets/images/client/logo-light/06.svg"
import logoLight7 from "@/assets/images/client/logo-light/07.svg"
import logoLight8 from "@/assets/images/client/logo-light/08.svg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark2 from "@/assets/images/client/logo-dark/02.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark4 from "@/assets/images/client/logo-dark/04.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoDark6 from "@/assets/images/client/logo-dark/06.svg"
import logoDark7 from "@/assets/images/client/logo-dark/07.svg"
import logoDark8 from "@/assets/images/client/logo-dark/08.svg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatar2 from "@/assets/images/avatar/02.jpg"
import avatar6 from "@/assets/images/avatar/06.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar5 from "@/assets/images/avatar/05.jpg"
import avatar8 from "@/assets/images/avatar/08.jpg"
import avatar1 from "@/assets/images/avatar/01.jpg"

type ClientType = {
  logo: StaticImageData
  logoLight: StaticImageData
  logoDark: StaticImageData
}

type CompanyType = {
  title: string
  description: string
}

export type ReviewType = {
 name : string
 userName: string
 avatar: StaticImageData
 date: string
 testimonial: string
} 

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
  {
    logo: logo7,
    logoDark: logoDark7,
    logoLight: logoLight7
  },
  {
    logo: logo8,
    logoDark: logoDark8,
    logoLight: logoLight8
  },
]

export const companyData: CompanyType[] = [
  {
    title: "2024 - Exploring New Opportunities",
    description: "With a vision for the future, we are excited to explore new opportunities, expand our services, and continue delivering exceptional visual solutions that inspire and engage."
  },
  {
    title: "2022 - Reaching New Heights",
    description: "Our commitment to quality and innovation continued to drive our growth and solidify our position as industry leaders."
  },
  {
    title: "2020 - Adapting and Innovating",
    description: "This year marked a significant pivot towards digital solutions, ensuring we stayed at the forefront of industry trends embracing new collaboration tools."
  },
  {
    title: "2014 - Industry Recognition",
    description: "These accolades not only highlighted our capabilities but also motivated us to continue pushing the boundaries of design."
  },
  {
    title: "2008 - The Beginning",
    description: "It was founded with a vision to revolutionize the visual design industry. Starting as a small team of passionate designers, we set out to deliver creative solutions that make a difference."
  }

]

export const reviewData : ReviewType[] = [

      {
        name: "Jacqueline Miller",
        userName: "@jaqmilr56",
        avatar: avatar9,
        date: "Feb 22, 2024",
        testimonial: "Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive."
      },
      {
        name: "Louis Ferguson",
        userName: "@fregulois2589",
        avatar: avatar2,
        date: "Jan 28, 2024",
        testimonial: "Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no."
      },
      {
        name: "Samuel Bishop",
        userName: "@samshop",
        avatar: avatar6,
        date: "Jan 28, 2024",
        testimonial: "Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed."
      },
      {
        name: "Emma Watson",
        userName: "@Emson589",
        avatar: avatar4,
        date: "Jan 21, 2024",
        testimonial: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
      },
      {
        name: "Allen Smith",
        userName: "@smith4u",
        avatar: avatar5,
        date: "Jan 21, 2024",
        testimonial: "Working with this team has been an absolute pleasure. They took the time to understand our vision and delivered beyond our expectations. The creativity and professionalism they bring to the table are unmatched."
      },
      {
        name: "Michael Davis",
        userName: "@Davischhotu",
        avatar: avatar8,
        date: "Jan 21, 2024",
        testimonial: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
      },
      {
        name: "Sarah Brown",
        userName: "@Brownmunde",
        avatar: avatar1,
        date: "Jan 21, 2024",
        testimonial: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
      },
      {
        name: "Allen Smith",
        userName: "@smith4u",
        avatar: avatar8,
        date: "Jan 21, 2024",
        testimonial: "Working with this team has been an absolute pleasure. They took the time to understand our vision and delivered beyond our expectations. The creativity and professionalism they bring to the table are unmatched."
      },
      {
        name: "Michael Davis",
        userName: "@Davischhotu",
        avatar: avatar2,
        date: "Jan 21, 2024",
        testimonial: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
      }
]