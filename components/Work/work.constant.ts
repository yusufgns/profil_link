export interface IFeature {
    title: string;
    href?: string;
    description: string;
    time: string;
    id: string | number;
    image: string | null
}

export interface IFeatureHeader {
    title: string
}

export const Feature = (): IFeature[] => {
    return [
        {
            title: "Link Tier",
            href: "/",
            description: "TEST",
            time: "Jan 2022 - Dec 2022",
            id: "linktier",
            image: ""
        },
        {
            title: "Wordigo",
            href: "/",
            description: "TEST",
            time: "Jan 2022 - Dec 2022",
            id: "wordigo",
            image: ""
        },
        {
            title: "Lorem Ipsum",
            href: "/",
            description: "TEST",
            time: "Jan 2022 - Dec 2022",
            id: "test1",
            image: ""
        },
        {
            title: "Lorem Ipsum",
            href: "/",
            description: "TEST",
            time: "Jan 2022 - Dec 2022",
            id: "test2",
            image: ""
        }
    ]
}

export const FeatureHeader: IFeatureHeader = {
    title: "WORKS"
}