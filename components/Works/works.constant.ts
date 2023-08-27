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
    image_banner: string | null,
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
            image: "https://private-user-images.githubusercontent.com/99817309/263526464-94355e7b-1c6e-40d6-8e5f-aada84a7ad59.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTMxMzczMTgsIm5iZiI6MTY5MzEzNzAxOCwicGF0aCI6Ii85OTgxNzMwOS8yNjM1MjY0NjQtOTQzNTVlN2ItMWM2ZS00MGQ2LThlNWYtYWFkYTg0YTdhZDU5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA4MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwODI3VDExNTAxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVjMTI5ODAxZDc0NGI0YzgyNDcwNGZiOGJhMTM5YTU0MWNhN2Q1MzBmNTIzNTI2NDQzOWExNjE3MjAyNDBhMTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.GL0euqSqa7J9HLSlVnEeLefCqYtOg2lG4BV0AeV0-Po",
            image_banner: "",
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
            image: "https://private-user-images.githubusercontent.com/99817309/263526336-627bbf8f-357b-47a7-a903-b74e81a11f24.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTMxMzcxNDIsIm5iZiI6MTY5MzEzNjg0MiwicGF0aCI6Ii85OTgxNzMwOS8yNjM1MjYzMzYtNjI3YmJmOGYtMzU3Yi00N2E3LWE5MDMtYjc0ZTgxYTExZjI0LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA4MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwODI3VDExNDcyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQyNjg0OWZhZmY4M2Y4MWQ3MzkwZDg2MmJlODZjMTE2YTkyNjgwZTYzMzNlY2JkMDJiY2QzYmZhYjIxNTkzN2MmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.lSEGrSjNOmdyvESXimhMOWRz27-U8GReUEL1Z-Z9STI",
            start_time: `${t("linktier.start_time")}`,
            image_banner: "",
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