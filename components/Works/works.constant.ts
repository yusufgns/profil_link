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
    work_page?: IWorkPage | null
}

export const Work = (): IWorkDetail[] => {
    return [
        {
            description: "It was planned to facilitate language learning.",
            title: "Wordigo",
            end_time: "01 Jun",
            image: "",
            start_time: "01 Jun",
            id: "wordigo",
            work_page: {
                introduction: "Farklı bir dil öğrenmeye karar verdiğimizde ilk olarak o dil için eğitim alırız ve sonrasında çeşitli araştırmalar yaparız. Araştırmalar sonucunda dil seviyenizi geliştirmek için oyunlar, mesajlaşma uygulaması ve sosyal medya fenomenlerinin daha farklı önerileriyle karşılaşırız.",
                introduction_2: "Biz de insanların dil öğrenirken nelere ihtiyaç duyduklarını düşünerek bir proje geliştirmeye başladık. İlk adım olarak da her yerden erişebilecekleri bir sözlük yapısı kurgulayarak başladık ve adım adım insanların dil öğrenirken hayatlarını kolaylaştırmak için nelere ihtiyaç duyduklarını düşünerek bir yol haritası oluşturduk."
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
                introduction: "linktier",
                introduction_2: "linktier"
            }
        }
    ]
}

export const WorkHeader: IWork = {
    description: "There is more detailed information about the projects I have worked on.",
    title: "WORKS"
}