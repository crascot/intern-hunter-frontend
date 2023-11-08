export interface MenuType {
    links: linksType[],
    changeMenuActive: () => void
}

type linksType = {
    text: string,
    link: string
}