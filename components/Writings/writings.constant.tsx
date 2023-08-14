export interface Writing {
    href?: string | null,
    title: string | null,
    description: string | null,
    time: string | null
}

export const Writings = (): Writing[] => {
    return [
        {
            description: "TEST",
            time: "TEST",
            title: "TEST",
            href: "TEST"
        }
    ]
}
