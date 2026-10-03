import { StaticImageData } from "next/image"

import blog1 from '@/assets/images/blog/4by4/01.jpg'
import blog2 from '@/assets/images/blog/4by4/02.jpg'
import blog3 from '@/assets/images/blog/4by4/03.jpg'
import blog4 from '@/assets/images/blog/4by4/04.jpg'

type BlogType = {
  title: string,
  category: string,
  author: string,
  readTime: string,
  image: StaticImageData,
  variant: string
}

export const blogData: BlogType[] = [
  {
    title: "The Power of Gratitude: Cultivating Joy and Abundance",
    category: "Technology",
    author: "Carolyn Ortiz",
    readTime: "5 min read",
    image: blog1,
    variant: 'bg-primary'
  },
  {
    title: "5 investment doubts you should clarify",
    category: "Lifestyle",
    author: "Amanda Reed",
    readTime: "10 min read",
    image: blog2,
    variant: 'bg-info',
  },
  {
    title: "Mastering Responsive Web Design with Bootstrap",
    category: "Design",
    author: "Joan Wallace",
    readTime: "7 min read",
    image: blog3,
    variant: 'bg-purple'
  },
  {
    title: "Effortless Web Development with Folio",
    category: "Marketing",
    author: "Lori Stevens",
    readTime: "12 min read",
    image: blog4,
    variant: 'bg-pink'
  }
]