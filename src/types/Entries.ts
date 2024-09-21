export type Dream = {
    createdAt: string;
    updatedAt: string;
    text: string;
}

export type Bullet = {
    createdAt: string;
    updatedAt: string;
    position: string;
    starred: boolean;
    text: string;
}

export type EntryType = {
    createdAt: string;
    updatedAt: string;
    date: string;
    dreams: Array<Dream>;
    bullets: Array<Bullet>;
}