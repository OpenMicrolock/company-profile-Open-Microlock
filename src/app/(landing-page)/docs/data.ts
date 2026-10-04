import { StaticImageData } from "next/image"
import team1 from "@/assets/images/team/01.jpg"
import team3 from "@/assets/images/team/03.jpg"
import team4 from "@/assets/images/team/04.jpg"
import blog1 from "@/assets/images/blog/4by3/01.jpg"
import blog2 from "@/assets/images/blog/4by3/02.jpg"
import blog3 from "@/assets/images/blog/4by3/03.jpg"
import blog4 from "@/assets/images/blog/4by3/04.jpg"



type StepsType = {
  phase: string
  title: string
  description: string
}

type TestimonialsType = {
  image: StaticImageData
  rating: number
  description: string
  name: string
  position: string
}

type BlogType = {
  image: StaticImageData
  title: string
  description: string

}

export const stepsData: StepsType[] = [
  {
    phase: "Phase 1",
    title: "Sign up and secure your account",
    description: "Create an account using your email or phone number. Complete the straightforward verification process to ensure your account is protected. Follow the simple verification process to secure your account. This ensures a personalized and seamless banking experience."
  },
  {
    phase: "Phase 2",
    title: "Enter your personal and financial details",
    description: "Provide the necessary information to set up your profile. This ensures a personalized and seamless banking experience tailored to your needs. This ensures a personalized and seamless banking experience."
  },
  {
    phase: "Phase 3",
    title: "Explore the full range of banking features",
    description: "Discover all the app’s functionalities, from instant money transfers to convenient bill payments, and start managing your finances with ease and efficiency. This ensures a personalized and seamless banking experience. Follow the simple verification process to secure your account."
  }
]

export const testimonialsData: TestimonialsType[] = [
  {
    image: team1,
    name: 'Emma Watson',
    description: "I've been using this app for over a year now, and it has made managing my finances so much easier. The user interface is incredibly intuitive.",
    position: 'UI/UX Designer',
    rating: 4.5
  },
  {
    image: team4,
    name: 'Louis Ferguson',
    description: "The app is fast, reliable, and customer support is always there when I need help. Highly recommended!",
    position: 'Web Developer',
    rating: 4.5
  },
  {
    image: team3,
    name: 'Jacqueline Miller',
    description: "The budgeting tools in this app have helped me save more and spend wisely.",
    position: 'Product designer',
    rating: 5
  },
]

export const blogData : BlogType[] = [
  {
    image: blog1,
    title: 'Tips for secure online banking',
    description: 'Learn essential tips to keep your online banking experience safe and secure.'
  },
  {
    image: blog2,
    title: 'The future of digital banking',
    description: 'Explore the latest trends in digital banking and how they are shaping the future.'
  },
  {
    image: blog3,
    title: 'How to maximize your savings with our app',
    description: 'Discover practical strategies to save more money using the features of our app.'
  },
  {
    image: blog4,
    title: 'Understanding mobile payment solutions',
    description: 'Get a comprehensive overview of mobile payment solutions and how they work.'
  },
]