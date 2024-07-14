type Dream = {
    createdAt: string;
    updatedAt: string;
    text: string;
}

type Bullet = {
    createdAt: string;
    updatedAt: string;
    position: string;
    starred: boolean;
    text: string;
}

export type Entry = {
    createdAt: string;
    updatedAt: string;
    date: string;
    dreams: Array<Dream>;
    bullets: Array<Bullet>;
}