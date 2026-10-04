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
    title: "Flash the ESP32 firmware",
    description: "Set your Wi-Fi credentials and a secret token in the source code, then build and upload the firmware with PlatformIO."
  },
  {
    phase: "Phase 2",
    title: "Connect the lock to your network",
    description: "The device tries your Wi-Fi first. If it cannot connect within 15 seconds, it starts its own access point."
  },
  {
    phase: "Phase 3",
    title: "Control it from the DARMI app",
    description: "Open the app to lock, unlock, and check status. Change the default token before you use the device in a real setting."
  }
]

export const testimonialsData: TestimonialsType[] = [
  {
    image: team1,
    name: 'Community member',
    description: "[Placeholder] Replace with a real quote from a firmware contributor.",
    position: 'Firmware contributor',
    rating: 4.5
  },
  {
    image: team4,
    name: 'Community member',
    description: "[Placeholder] Replace with a real quote from a DARMI user.",
    position: 'DARMI user',
    rating: 4.5
  },
  {
    image: team3,
    name: 'Community member',
    description: "[Placeholder] Replace with a real quote from a smart home builder.",
    position: 'Smart home builder',
    rating: 5
  },
]

export const blogData : BlogType[] = [
  {
    image: blog1,
    title: 'Securing your ESP32 smart lock',
    description: 'Learn how to change the default token and keep your lock traffic safe on a trusted network.'
  },
  {
    image: blog2,
    title: 'Building an open source smart home',
    description: 'See how the project fits together, from ESP32 firmware to the DARMI app.'
  },
  {
    image: blog3,
    title: 'Connecting lamps and other devices',
    description: 'Discover how to extend the platform to lamps, doors, and other smart home devices.'
  },
  {
    image: blog4,
    title: 'How the local HTTP API works',
    description: 'Get an overview of the lock, unlock, and status endpoints, and how they are authenticated.'
  },
]