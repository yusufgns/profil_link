import { useTranslations } from "next-intl";

export interface IBookmarkHeader {
    title: string,
    description: string | null
}

export interface IBookmark {
    hero: IBookmarkDetailt[],
    head: string,
    time: string | number,
}

export interface IBookmarkDetailt {
    title: string,
    badge: string | null,
    url?: string | null,
    time: string | number
}


export const BookmarkHeader = (): IBookmarkHeader => {
    const t = useTranslations("Bookmarks")
    return {
        title: `${t("title")}`,
        description: `${t("description")}`
    }
}

export const Bookmark = (): IBookmark[] => {
    const t = useTranslations("Bookmarks")
    return [
        {
            head: `${t("week")} 1`,
            time: "08.15.2023",
            hero: [
                {
                    badge: "Frontend",
                    title: "React.js Documents",
                    url: "EMPTY",
                    time: "08.15.2023"
                },
                {
                    badge: "Frontend",
                    title: "React.js Documents",
                    url: "test.com",
                    time: "08.15.2023"
                },
            ]
        },
        {
            head: `${t("week")} 2`,
            time: "01.15.2023",
            hero: [
                {
                    badge: "Frontend",
                    title: "React.js Documents",
                    url: "test.com",
                    time: "08.15.2023"
                },
            ]
        },
    ]
}
