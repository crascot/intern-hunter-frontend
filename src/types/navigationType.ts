export interface NavigationType {
    links: linksType[],
    current: string
}

type linksType = {
    text: string,
    link: string
}