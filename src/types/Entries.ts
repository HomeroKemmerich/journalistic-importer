export type JournalisticDream = {
    created_dts: string;
    updated_dts: string;
    text: string;
}

export type JournalisticBullet = {
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
    dreams: Array<JournalisticDream>;
    bullets: Array<JournalisticBullet>;
}