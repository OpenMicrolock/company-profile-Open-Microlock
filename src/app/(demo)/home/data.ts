import { StaticImageData } from "next/image"
import logo1 from "@/assets/images/client/logo-gray/01.svg"
import logo2 from "@/assets/images/client/logo-gray/02.svg"
import logo3 from "@/assets/images/client/logo-gray/03.svg"
import logo4 from "@/assets/images/client/logo-gray/04.svg"
import logo5 from "@/assets/images/client/logo-gray/05.svg"
import logo6 from "@/assets/images/client/logo-gray/06.svg"
import logoLight1 from "@/assets/images/client/logo-light/01.svg"
import logoLight2 from "@/assets/images/client/logo-light/02.svg"
import logoLight3 from "@/assets/images/client/logo-light/03.svg"
import logoLight4 from "@/assets/images/client/logo-light/04.svg"
import logoLight5 from "@/assets/images/client/logo-light/05.svg"
import logoLight6 from "@/assets/images/client/logo-light/06.svg"
import logoDark1 from "@/assets/images/client/logo-dark/01.svg"
import logoDark2 from "@/assets/images/client/logo-dark/02.svg"
import logoDark3 from "@/assets/images/client/logo-dark/03.svg"
import logoDark4 from "@/assets/images/client/logo-dark/04.svg"
import logoDark5 from "@/assets/images/client/logo-dark/05.svg"
import logoDark6 from "@/assets/images/client/logo-dark/06.svg"

type ClientType = {
  logo: StaticImageData
  logoLight: StaticImageData
  logoDark: StaticImageData
} 

export const clientData : ClientType[] = [
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
]