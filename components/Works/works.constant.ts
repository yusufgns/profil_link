import { useTranslations } from "next-intl"
export interface IWork {
    title: string | null,
    description: string | null,
}

export interface IWorkPage {
    introduction: string | null,
    introduction_2: string | null,
}

export interface IWorkDetail {
    image: string | null,
    title: string | null,
    description: string | null,
    start_time: string | number | null,
    end_time: string | number | null,
    id: string | number,
    work_page?: IWorkPage | null,
    responsibilities: string | number,
    role: string | number,
}

export const Work = (): IWorkDetail[] => {
    const t = useTranslations("Works")
    return [
        {
            description: `${t("wordigo.description")}`,
            title: `${t("wordigo.title")}`,
            end_time: `${t("wordigo.end_time")}`,
            image: "",
            start_time: `${t("wordigo.start_time")}`,
            id: "wordigo",
            responsibilities: `${t("wordigo.responsibilities")}`,
            role: `${t("wordigo.role")}`,
            work_page: {
                introduction: `${t("wordigo.introduction")}`,
                introduction_2: `${t("wordig.introduction_2")}`
            }
        },
        {
            description: `${t("linktier.description")}`,
            title: `${t("linktier.title")}`,
            end_time: `${t("linktier.end_time")}`,
            image: "",
            start_time: `${t("linktier.start_time")}`,
            id: "linktier",
            responsibilities: `${t("linktier.responsibilities")}`,
            role: `${t("linktier.role")}`,
            work_page: {
                introduction: `${t("linktier.introduction")}`,
                introduction_2: `${t("linktier.introduction_2")}`
            }
        }
    ]
}

export const WorkHeader: IWork = {
    description: "There is more detailed information about the projects I have worked on.",
    title: "WORKS"
}