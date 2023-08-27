import { useTranslations } from "next-intl";
export interface IHeader {
    title: string;
    href?: string;
}

export interface IMe {
    avatar: string | null,
    name: string | null
}

export const Me = (): IMe => {
    const t = useTranslations('Header')
    return {
        avatar: "https://avatars.githubusercontent.com/u/99817309?s=400&u=9d0d061c3894f58e53c39aa8ed1b8a0bee470110&v=4",
        name: `${t('name')}`
    }
}

const Headers = (): IHeader[] => {
    return [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Works",
            href: "/works"
        },
        {
            title: "Bookmarks",
            href: "/bookmarks"
        }
    ]
}

export default Headers