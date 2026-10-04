import { StaticImageData } from "next/image"
import team3 from "@/assets/images/team/3by4/03.jpg"
import team2 from "@/assets/images/team/3by4/02.jpg"
import team4 from "@/assets/images/team/3by4/04.jpg"
import team6 from "@/assets/images/team/3by4/06.jpg"
import team1 from "@/assets/images/team/3by4/01.jpg"
import team8 from "@/assets/images/team/3by4/08.jpg"
import team5 from "@/assets/images/team/3by4/05.jpg"
import team7 from "@/assets/images/team/3by4/07.jpg"


type TeamType = {
  name: string
  role: string
  image: StaticImageData
  social: string[]
}

export const teamData: TeamType[] = [
  {
    name: "Emma Watson",
    role: "Founder",
    image: team3,
    social: ['bi-instagram', 'bi-linkedin']
  },
  {
    name: "Allen Smith",
    role: "Co-Founder",
    image: team2,
    social: ['bi-facebook' ,'bi-instagram', 'bi-linkedin']
  },
  {
    name: "Louis Ferguson",
    role: "Creative Director",
    image: team4,
    social: ['bi-facebook', 'bi-linkedin']
  },
  {
    name: "Emily Johnson",
    role: "Marketing Strategist",
    image: team6,
    social: ['bi-linkedin' ,'bi-instagram', 'bi-twitter-x']
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: team1,
    social: ['bi-instagram', 'bi-twitter-x']
  },
  {
    name: "Sarah Davis",
    role: "Content Specialist",
    image: team8,
    social: ['bi-facebook' ,'bi-instagram', 'bi-twitter-x']
  },
  {
    name: "Samuel Bishop",
    role: "Product designer",
    image: team5,
    social: ['bi-facebook' ,'bi-instagram']

  },
  {
    name: "Alex Green",
    role: "Account Manager",
    image: team7,
    social: ['bi-facebook' ,'bi-instagram', 'bi-twitter-x']
  }
]