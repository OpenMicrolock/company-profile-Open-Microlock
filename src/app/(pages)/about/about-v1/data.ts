import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team4 from '@/assets/images/team/04.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team5 from '@/assets/images/team/05.jpg'
import { StaticImageData } from 'next/image'

export type TeamType = {
  name: string
  role: string
  image: StaticImageData
  icon: string[]
}

export const teamData: TeamType[] = [
  {
    name: "Emma Watson",
    role: "Co-Founder / CEO",
    image: team1,
icon: ['bi-facebook', 'bi-twitter-x', 'bi-instagram']
  },
  {
    name: "Allen Smith",
    role: "Finance",
    image: team2,
    icon: ['bi-facebook', 'bi-twitter-x', 'bi-instagram']
  },
  {
    name: "Louis Ferguson",
    role: "Recruiting",
    image: team4,
    icon: ['bi-facebook', 'bi-twitter-x']
  },
  {
    name: "Frances Guerrero",
    role: "Product Manager",
    image: team3,
    icon: ['bi-facebook', 'bi-instagram']
  },
  {
    name: "Amanda Reed",
    role: "Solution Engineer",
    image: team5,
    icon: ['bi-twitter-x', 'bi-instagram']
  }
]