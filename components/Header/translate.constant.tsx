export interface ITrnaslate {
     title: string | null,
     href: string | null,
     isActive: boolean;
}

const Translate = (locales: string): ITrnaslate[] => {
     return [
          {
               title: "TR",
               href: "tr",
               isActive: locales === "tr",
          },
          {
               title: "EN",
               href: "en",
               isActive: locales === "en",
          }
     ]
}

export default Translate