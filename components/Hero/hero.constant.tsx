import React, { ReactElement } from "react"
import { MailIcon, Github, Linkedin, X } from "lucide-react"


export interface ISocial {
    icon: ReactElement,
    href?: string | null
}

export interface IHero {
    socialMedia: ISocial
}

export interface IHeroMe {
    map(arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode,
    cv: string | null
}

export const Hero = (): IHero[] => {
    return [
        {
            socialMedia: {
                href: "https://github.com/yusufgns",
                icon: <Github className="w-5 h-5 text-[#8C99AF] hover:text-black transition-colors" />
            }
        },
        {
            socialMedia: {
                href: "https://www.linkedin.com/in/yusufgunes/",
                icon: <Linkedin className="w-5 h-5 text-[#8C99AF] hover:text-black transition-colors" />
            }
        },
        {
            socialMedia: {
                href: "https://twitter.com/yusugunes9",
                icon: <X className="w-5 h-5 text-[#8C99AF] hover:text-black transition-colors" />
            }
        },
        {
            socialMedia: {
                href: "mailto:gunesyusuf024@gmail.com",
                icon: <MailIcon className="w-5 h-5 text-[#8C99AF] hover:text-black transition-colors" />
            }
        }
    ]
}

export const HeroMe: IHeroMe = {
    cv: "https://flowcv.com/resume/atd01s4vv4",
    map: function (arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode {
        throw new Error("Function not implemented.")
    }
};
