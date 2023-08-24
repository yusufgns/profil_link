export interface IWork {
    title: string | null,
    description: string | null,
}

export interface IWorkPage {
    introduction : string | null
}

export interface IWorkDetail {
    image: string | null,
    title: string | null,
    description: string | null,
    start_time: string | number | null,
    end_time: string | number | null,
    id: string | number,
    work_page?: IWorkPage | null
}

export const Work = (): IWorkDetail[] => {
    return [
        {
            description: "Wordigo",
            title: "Wordigo",
            end_time: "01 Jun",
            image: "",
            start_time: "01 Jun",
            id: "wordigo",
            work_page: {
                introduction: "wordigo"
            }
        },
        {
            description: "Link Tier",
            title: "Link Tier",
            end_time: "01 Jun",
            image: "",
            start_time: "01 Jun",
            id: "linktier",
            work_page: {
                introduction: "linktier"
            }
        }
    ]
}

export const WorkHeader: IWork = {
    description: "There is more detailed information about the projects I have worked on.",
    title: "WORKS"
}