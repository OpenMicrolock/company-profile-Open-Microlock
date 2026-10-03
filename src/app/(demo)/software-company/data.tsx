import { StaticImageData } from "next/image"
import logo1 from "@/assets/images/client/logo-gray/01.svg"
import logo2 from "@/assets/images/client/logo-gray/02.svg"
import logo3 from "@/assets/images/client/logo-gray/03.svg"
import logo4 from "@/assets/images/client/logo-gray/04.svg"
import logo5 from "@/assets/images/client/logo-gray/05.svg"
import logo6 from "@/assets/images/client/logo-gray/06.svg"
import logo7 from "@/assets/images/client/logo-gray/07.svg"
import logo8 from "@/assets/images/client/logo-gray/08.svg"
import logo9 from "@/assets/images/client/logo-gray/09.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight2 from "@/assets/images/client/logo-light/02.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight4 from "@/assets/images/client/logo-light/04.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"
import logoLight6 from "@/assets/images/client/logo-light/06.svg"
import logoLight7 from "@/assets/images/client/logo-light/07.svg"
import logoLight8 from "@/assets/images/client/logo-light/08.svg"
import logoLight9 from "@/assets/images/client/logo-light/09.svg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark2 from "@/assets/images/client/logo-dark/02.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark4 from "@/assets/images/client/logo-dark/04.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoDark6 from "@/assets/images/client/logo-dark/06.svg"
import logoDark7 from "@/assets/images/client/logo-dark/07.svg"
import logoDark8 from "@/assets/images/client/logo-dark/08.svg"
import logoDark9 from "@/assets/images/client/logo-dark/09.svg"
import avatar9 from "@/assets/images/avatar/09.jpg"
import avatar10 from "@/assets/images/avatar/10.jpg"
import avatar4 from "@/assets/images/avatar/04.jpg"
import avatar7 from "@/assets/images/avatar/07.jpg"
import avatar1 from "@/assets/images/avatar/01.jpg"
import { ReactNode } from "react"

type ClientType = {
  logo: StaticImageData
  logoLight: StaticImageData
  logoDark: StaticImageData
}
type Client2Type = {
  name: string
  avatar: StaticImageData
  testimonial: string
  rating: number
  role: string
}

export type ServiceType = {
  icon: ReactNode
  title: string
  description: string
  variant: string
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
  {
    logo: logo9,
    logoDark: logoDark9,
    logoLight: logoLight9
  },
]

export const serviceData: ServiceType[] = [
  {
    icon: (<svg width={40} height={40} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5587 22.5601C22.1315 22.9872 22.1315 23.6797 22.5587 24.1068C22.9858 24.534 23.6782 24.534 24.1054 24.1068L22.5587 22.5601ZM29.1654 17.5001L29.9387 18.2735C30.1439 18.0684 30.2591 17.7902 30.2591 17.5001C30.2591 17.2101 30.1439 16.9318 29.9387 16.7268L29.1654 17.5001ZM24.1054 10.8934C23.6782 10.4663 22.9858 10.4663 22.5587 10.8934C22.1315 11.3205 22.1315 12.0131 22.5587 12.4402L24.1054 10.8934ZM12.4388 12.4402C12.8659 12.0131 12.8659 11.3205 12.4388 10.8934C12.0116 10.4663 11.3191 10.4663 10.892 10.8934L12.4388 12.4402ZM5.83203 17.5001L5.05863 16.7268C4.85352 16.9318 4.73828 17.2101 4.73828 17.5001C4.73828 17.7902 4.85352 18.0684 5.05863 18.2735L5.83203 17.5001ZM10.892 24.1068C11.3191 24.534 12.0116 24.534 12.4388 24.1068C12.8659 23.6797 12.8659 22.9872 12.4388 22.5601L10.892 24.1068ZM13.5304 27.408C13.3644 27.9887 13.7007 28.5941 14.2816 28.7601C14.8623 28.926 15.4677 28.5897 15.6336 28.0089L13.5304 27.408ZM21.467 7.59226C21.6329 7.01144 21.2966 6.40607 20.7158 6.24012C20.1351 6.07416 19.5297 6.41049 19.3638 6.99131L21.467 7.59226ZM24.1054 24.1068L29.9387 18.2735L28.392 16.7268L22.5587 22.5601L24.1054 24.1068ZM29.9387 16.7268L24.1054 10.8934L22.5587 12.4402L28.392 18.2735L29.9387 16.7268ZM10.892 10.8934L5.05863 16.7268L6.60543 18.2735L12.4388 12.4402L10.892 10.8934ZM5.05863 18.2735L10.892 24.1068L12.4388 22.5601L6.60543 16.7268L5.05863 18.2735ZM15.6336 28.0089L21.467 7.59226L19.3638 6.99131L13.5304 27.408L15.6336 28.0089Z" fill="currentColor" />
    </svg>),
    title: 'Software development',
    description: 'Transform your unique ideas into reality with our services.',
    variant: 'bg-pink'
  },
  {
    icon: (<svg width={35} height={35} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99982 16.6666C7.03588 17.5593 6.0539 18.0056 5.66258 18.5624C5.05648 19.4249 5.05648 20.5749 5.66258 21.4374C6.0539 21.9943 7.03588 22.4406 8.99982 23.3333M8.99982 16.6666C7.03588 15.7739 6.0539 15.3276 5.66258 14.7707C5.05648 13.9083 5.05648 12.7583 5.66258 11.8958C6.0539 11.339 7.03588 10.8926 8.99982 9.99994L18.1376 5.84636C18.951 5.47673 19.3575 5.29189 19.7868 5.25519C19.9285 5.24306 20.0711 5.24306 20.2128 5.25519C20.6421 5.29189 21.0486 5.47673 21.862 5.84636L30.9998 9.99994C32.9638 10.8926 33.9457 11.339 34.337 11.8958C34.9432 12.7583 34.9432 13.9083 34.337 14.7707C33.9457 15.3276 32.9638 15.7739 30.9998 16.6666M8.99982 16.6666L18.1376 20.8203C18.951 21.1898 19.3575 21.3746 19.7868 21.4114C19.9285 21.4234 20.0711 21.4234 20.2128 21.4114C20.6421 21.3746 21.0486 21.1898 21.862 20.8203L30.9998 16.6666M8.99982 23.3333C7.03588 24.2259 6.0539 24.6723 5.66258 25.2291C5.05648 26.0916 5.05648 27.2416 5.66258 28.1041C6.0539 28.6609 7.03588 29.1073 8.99982 29.9999L18.1376 34.1536C18.951 34.5231 19.3575 34.7079 19.7868 34.7448C19.9285 34.7568 20.0711 34.7568 20.2128 34.7448C20.6421 34.7079 21.0486 34.5231 21.862 34.1536L30.9998 29.9999C32.9638 29.1073 33.9457 28.6609 34.337 28.1041C34.9432 27.2416 34.9432 26.0916 34.337 25.2291C33.9457 24.6723 32.9638 24.2259 30.9998 23.3333M8.99982 23.3333L18.1376 27.4869C18.951 27.8564 19.3575 28.0413 19.7868 28.0781C19.9285 28.0901 20.0711 28.0901 20.2128 28.0781C20.6421 28.0413 21.0486 27.8564 21.862 27.4869L30.9998 23.3333M30.9998 16.6666C32.9638 17.5593 33.9457 18.0056 34.337 18.5624C34.9432 19.4249 34.9432 20.5749 34.337 21.4374C33.9457 21.9943 32.9638 22.4406 30.9998 23.3333" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>),
    title: 'Consultancy & Strategy',
    description: 'Our experienced consultants work closely with you to assess.',
    variant: 'bg-purple'
  },
  {
    icon: (<svg width={40} height={40} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9076 8.95361L11.4613 10.3868C10.8209 10.5554 10.5007 10.6396 10.2575 10.8362C10.1776 10.9008 10.1047 10.9737 10.0401 11.0536C9.84355 11.2968 9.75929 11.617 9.59077 12.2574L6.51585 23.9421C5.73018 26.9276 5.33735 28.4204 5.95407 29.3682C6.14829 29.6667 6.40282 29.9212 6.7013 30.1154C7.64911 30.7322 9.14189 30.3393 12.1274 29.5536L23.8121 26.4787C24.4525 26.3102 24.7727 26.2259 25.0159 26.0294C25.0958 25.9648 25.1687 25.8919 25.2333 25.812C25.4299 25.5688 25.5141 25.2486 25.6827 24.6082L27.1159 19.1619M16.9076 8.95361L27.1159 19.1619M16.9076 8.95361L19.4264 6.43477C20.1997 5.66143 20.5864 5.27475 21.0544 5.20063C21.2056 5.17669 21.3595 5.17669 21.5107 5.20063C21.9787 5.27475 22.3654 5.66143 23.1387 6.43477L29.6347 12.9308C30.4081 13.7041 30.7947 14.0908 30.8689 14.5588C30.8928 14.71 30.8928 14.8639 30.8689 15.0151C30.7947 15.4831 30.4081 15.8698 29.6347 16.6431L27.1159 19.1619" stroke="currentColor" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.9023 21.1742C13.8452 20.1171 13.8452 18.4032 14.9023 17.3461C15.9595 16.2889 17.6734 16.2889 18.7305 17.3461C19.7876 18.4032 19.7876 20.1171 18.7305 21.1742C17.6734 22.2313 15.9595 22.2313 14.9023 21.1742ZM14.9023 21.1742L11.0742 25.0023" stroke="currentColor" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round" />
    </svg>),
    title: 'UX/UI design',
    description: 'Talented designers combine creativity with user-centric design.',
    variant: 'bg-warning'
  },
  {
    icon: (<svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5V8.33333M20 5C15.8579 5 12.1079 6.67893 9.3934 9.3934M20 5C24.1418 5 27.8917 6.67875 30.6062 9.39295M9.3934 9.3934C6.67893 12.1079 5 15.8579 5 20M9.3934 9.3934L11.7488 11.7488M30.6062 9.39295C33.3208 12.1074 35 15.8576 35 20M30.6062 9.39295L28.2492 11.75M5 20H8.33333M5 20C5 24.1418 6.67875 27.8917 9.39295 30.6062M9.39295 30.6062C12.1074 33.3208 15.8576 35 20 35M9.39295 30.6062L11.75 28.2492M35 20H31.6667M35 20C35 24.1422 33.321 27.8922 30.6067 30.6067M30.6067 30.6067C27.8922 33.321 24.1422 35 20 35M30.6067 30.6067L28.248 28.248M20 35V31.6667M19.9993 17.5C21.38 17.5 22.5 18.6193 22.5 20C22.5 21.3807 21.3807 22.5 20 22.5C18.6193 22.5 17.5 21.3803 17.5 19.9997C17.5 18.6193 18.619 17.5 19.9993 17.5ZM19.9993 17.5V12.9167" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>),
    title: 'Quality assurance',
    description: 'From functional testing to performance testing, our meticulous.',
    variant: 'bg-primary'
  },
  {
    icon: (<svg width={40} height={40} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.79167 24.1979V24.1979C6.64783 24.1979 5.5866 23.5194 5.2982 22.4125C5.02201 21.3525 4.875 20.2403 4.875 19.0938C4.875 11.845 10.7513 5.96875 18 5.96875C25.2487 5.96875 31.125 11.845 31.125 19.0938C31.125 20.2403 30.978 21.3525 30.7018 22.4125C30.4134 23.5194 29.3522 24.1979 28.2083 24.1979V24.1979M25.2917 30.0313V30.0313C26.9025 30.0313 28.2083 28.7254 28.2083 27.1146V21.2813C28.2083 19.6704 26.9025 18.3646 25.2917 18.3646V18.3646C23.6808 18.3646 22.375 19.6704 22.375 21.2813V27.1146C22.375 28.7254 23.6808 30.0313 25.2917 30.0313ZM10.7083 30.0313V30.0313C12.3192 30.0313 13.625 28.7254 13.625 27.1146V21.2813C13.625 19.6704 12.3192 18.3646 10.7083 18.3646V18.3646C9.0975 18.3646 7.79167 19.6704 7.79167 21.2813V27.1146C7.79167 28.7254 9.0975 30.0313 10.7083 30.0313Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>),
    title: 'Maintenance & Support',
    description: 'Keep your software running smoothly with our maintenance.',
    variant: 'bg-success'
  },
]

export const client2data: Client2Type[] = [

  {
    name: "Jacqueline Miller",
    role: "Product designer",
    avatar: avatar9,
    rating: 4.5,
    testimonial: "Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive."
  },
  {
    name: "Louis Ferguson",
    role: "Web Developer",
    avatar: avatar10,
    rating: 5,
    testimonial: "Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no."
  },
  {
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar4,
    rating: 4.5,
    testimonial: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
  },
  {
    name: "Allen Smith",
    role: "Manager",
    avatar: avatar7,
    rating: 4.5,
    testimonial: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience."
  },
  {
    name: "Emma Watson",
    role: "UI/UX designer",
    avatar: avatar1,
    rating: 4.5,
    testimonial: "Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal."
  }


]