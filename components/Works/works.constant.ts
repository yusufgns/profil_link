export interface IWork {
    title: string | null,
    description: string | null,
}

export interface IWorkDetail {
    image: string | null,
    title: string | null,
    description: string | null,
    start_time: string | number | null,
    end_time: string | number | null,
    id: string | number
}

export const Work: IWorkDetail[] = [
    {
        description: "Link Tier",
        title: "Link Tier",
        end_time: "01 Jun",
        image: "",
        start_time: "01 Jun",
        id: "linktier"
    },
    {
        description: "Wordigo",
        title: "Wordigo",
        end_time: "01 Jun",
        image: "",
        start_time: "01 Jun",
        id: "wordigo"
    }
]

export const WorkHeader: IWork = {
    description: "There is more detailed information about the projects I have worked on.",
    title: "Works"
}