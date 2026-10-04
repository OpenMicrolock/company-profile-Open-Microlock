import { StaticImageData } from "next/image"
import icons5 from "@/assets/images/client/icons/05.svg"
import icons11 from "@/assets/images/client/icons/11.svg"
import icons10 from "@/assets/images/client/icons/10.svg"
import icons4 from "@/assets/images/client/icons/04.svg"
import icons7 from "@/assets/images/client/icons/07.svg"
import icons8 from "@/assets/images/client/icons/08.svg"
import icons9 from "@/assets/images/client/icons/09.svg"
import icons1 from "@/assets/images/client/icons/01.svg"
import icons3 from "@/assets/images/client/icons/03.svg"


type IntegrationsType = {
name : string
category: string
icon: StaticImageData
description: string
}

export const integrationsData: IntegrationsType[] = [
  {
    name: "Graphlo",
    category: "Productivity",
    icon: icons5,
    description: "Integrate with Graphlo to streamline your customer relationship management. Sync contacts, automate workflows, and gain insights with powerful analytics.",
  },
  {
    name: "Vectra",
    category: "CRM",
    icon: icons11,
    description: "Seamless email marketing campaigns. Automate email sequences, manage subscriber lists, and track campaign performance.",
  },
  {
    name: "Signum",
    category: "Payment",
    icon: icons10,
    description: "Integrate Signum for secure and efficient payment processing. Accept payments, manage subscriptions, and track transactions effortlessly.",
  },
  {
    name: "Grapherz",
    category: "Streaming",
    icon: icons4,
    description: "Streamlined accounting and financial management. Track expenses, generate invoices, and manage payroll with ease.",
  },
  {
    name: "Imprintify",
    category: "Productivity",
    icon: icons7,
    description: "Imprintify to enhance team communication and collaboration. Receive notifications, share updates, and manage tasks directly within imprintify.",
  },
  {
    name: "Logique",
    category: "e-commerce",
    icon: icons8,
    description: "Connect with Logique to enhance your e-commerce operations. Sync inventory, manage orders, and track sales from one platform.",
  },
  {
    name: "Optimal",
    category: "CRM",
    icon: icons9,
    description: "Integrate with Optimal to streamline your customer relationship management. Sync contacts, automate workflows, and gain insights with powerful analytics.",
  },
  {
    name: "Artistry",
    category: "Payment",
    icon: icons1,
    description: "Manage support tickets, track customer interactions, and improve response times.",
  },
  {
    name: "Wayline",
    category: "Streaming",
    icon: icons3,
    description: "Sync with Wayline for enhanced project management. Organize tasks, collaborate with your team, and track project progress effortlessly.",
  }
]