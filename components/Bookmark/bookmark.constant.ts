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

export const BookmarkHeader: IBookmarkHeader = {
    title: "Bookmarks",
    description: "I'm sharing the content I liked, discovered, or learned throughout the day here."
}

export const Bookmark: IBookmark[] = [
    {
        head: "Week 1",
        time: "08.15.2023",
        hero: [
            {
                badge: "Frontend",
                title: "React.js Documents",
                url: "test",
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
        head: "Week 2",
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
