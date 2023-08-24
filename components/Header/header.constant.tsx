export interface IHeader {
  title: string;
  href?: string;
}

const Headers = (): IHeader[] => {
    return [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Works",
            href: "/works"
        },
        {
            title: "Bookmarks",
            href: "/bookmarks"
        }
    ]
}

export default Headers