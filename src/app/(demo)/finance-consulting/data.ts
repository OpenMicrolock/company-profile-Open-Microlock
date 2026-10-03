import { StaticImageData } from "next/image"
import financeImg from "@/assets/images/services/finance/01.jpg"
import finance3Img from "@/assets/images/services/finance/03.jpg"
import finance2Img from "@/assets/images/services/finance/02.jpg"
import finance4Img from "@/assets/images/services/finance/04.jpg"
import team1 from "@/assets/images/team/01.jpg"
import team2 from "@/assets/images/team/02.jpg"
import team4 from "@/assets/images/team/04.jpg"
import team3 from "@/assets/images/team/03.jpg"
import logo1Dark from "@/assets/images/client/logo-dark/01.svg"
import logo2Dark from "@/assets/images/client/logo-dark/02.svg"
import logo3Dark from "@/assets/images/client/logo-dark/03.svg"
import logo4Dark from "@/assets/images/client/logo-dark/04.svg"
import logo5Dark from "@/assets/images/client/logo-dark/05.svg"
import logo6Dark from "@/assets/images/client/logo-dark/06.svg"
import logo7Dark from "@/assets/images/client/logo-dark/07.svg"
import logo8Dark from "@/assets/images/client/logo-dark/08.svg"
import logo9Dark from "@/assets/images/client/logo-dark/09.svg"
import logo10Dark from "@/assets/images/client/logo-dark/10.svg"
import logo11Dark from "@/assets/images/client/logo-dark/11.svg"
import logo1Light from "@/assets/images/client/logo-light/01.svg"
import logo2Light from "@/assets/images/client/logo-light/02.svg"
import logo3Light from "@/assets/images/client/logo-light/03.svg"
import logo4Light from "@/assets/images/client/logo-light/04.svg"
import logo5Light from "@/assets/images/client/logo-light/05.svg"
import logo6Light from "@/assets/images/client/logo-light/06.svg"
import logo7Light from "@/assets/images/client/logo-light/07.svg"
import logo8Light from "@/assets/images/client/logo-light/08.svg"
import logo9Light from "@/assets/images/client/logo-light/09.svg"
import logo10Light from "@/assets/images/client/logo-light/10.svg"
import logo11Light from "@/assets/images/client/logo-light/11.svg"


type CoreValueType = {
  icon: string
  title: string
  description: string
  variant: string
}

type IndustriesType = {
  image: StaticImageData
  title: string
  description: string
}

export type TeamType = {
  image: StaticImageData
  name: string
  role: string
}

export type ClientsType = {
 light: StaticImageData
 dark: StaticImageData
}

export const coreValueData: CoreValueType[] = [
  {
    icon: 'bi-rocket-takeoff-fill',
    title: 'Integrity',
    description: 'We uphold the highest standards of integrity in all our actions.',
    variant: 'text-success'
  },
  {
    icon: 'bi-person-lines-fill',
    title: 'Client approach',
    description: 'Your needs and goals are at the heart of everything we do.',
    variant: 'text-pink'
  },
  {
    icon: 'bi-award',
    title: 'Excellence',
    description: 'Our experts are dedicated to delivering the highest quality services.',
    variant: 'text-info'
  },
  {
    icon: 'bi-fire',
    title: 'Innovation',
    description: 'Embracing innovation to lead in the dynamic financial landscape.',
    variant: 'text-purple'
  },
]

export const industriesData: IndustriesType[] = [
  {
    image: financeImg,
    title: "Healthcare industry",
    description: "Our team provides specialized financial consulting for healthcare providers, ensuring sustainable.",
  },
  {
    image: finance3Img,
    title: "Real estate sector",
    description: "From property management to development projects, we deliver expert financial advice to maximize.",
  },
  {
    image: finance2Img,
    title: "Manufacturing industry",
    description: "Our financial experts understand the unique challenges of the manufacturing sector industry.",
  },
  {
    image: finance4Img,
    title: "Retail sector",
    description: "We support retail businesses with comprehensive financial services, including inventory management.",
  }

]

export const teamData: TeamType[] = [

  {
    name: "Jane Doe",
    role: "Chief Financial Officer",
    image: team1,
  },
  {
    name: "Michael Brown",
    role: "Investment Strategist",
    image: team2,

  },
  {
    name: "Louis Ferguson",
    role: "Tax Specialist",
    image: team4,

  },
  {
    name: "Amanda Reed",
    role: "Senior Financial Advisor",
    image: team3,
  }


]

export const clientData: ClientsType[] = [

  {
    light: logo1Dark,
    dark: logo1Light
  },
  {
    light: logo7Dark,
    dark: logo7Light
  },
  {
    light: logo8Dark,
    dark: logo8Light
  },
  {
    light: logo2Dark,
    dark: logo2Light
  },
  {
    light: logo3Dark,
    dark: logo3Light
  },
  {
    light: logo4Dark,
    dark: logo4Light
  },
  {
    light: logo5Dark,
    dark: logo5Light
  },
  {
    light: logo11Dark,
    dark: logo11Light
  },
  {
    light: logo10Dark,
    dark: logo10Light
  },
  {
    light: logo6Dark,
    dark: logo6Light
  }

]