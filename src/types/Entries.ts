export type Dream = {
    created_dts: string;
    updated_dts: string;
    text: string;
}

export type Bullet = {
    created_dts: string;
    updated_dts: string;
    position: string;
    starred: boolean;
    text: string;
}

export type EntryType = {
    created_dts: string;
    updated_dts: string;
    date: string;
    dreams: Array<Dream>;
    bullets: Array<Bullet>;
}