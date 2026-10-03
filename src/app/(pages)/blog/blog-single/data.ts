import blog2 from '@/assets/images/blog/4by3/02.jpg'
import blog4 from '@/assets/images/blog/4by3/04.jpg'
import blog3 from '@/assets/images/blog/4by3/03.jpg'
import blog1 from '@/assets/images/blog/4by3/01.jpg'
import { StaticImageData } from 'next/image'

type BlogRelatedType = {
  title: string
  category: string
  date: string
  image: StaticImageData
}

export const blogRelatedData: BlogRelatedType[] = [
  {
    title: "Techniques to captivate your audience",
    category: "Design",
    date: "June 28, 2024",
    image: blog2,
  },
  {
    title: "Tips for improving your website's visibility",
    category: "Research",
    date: "July 15, 2024",
    image: blog4,
  },
  {
    title: "Never underestimate the influence",
    category: "Research",
    date: "July 15, 2024",
    image: blog3,
  },
  {
    title: "Techniques to captivate your audience",
    category: "Design",
    date: "June 28, 2024",
    image: blog1,
  },
]