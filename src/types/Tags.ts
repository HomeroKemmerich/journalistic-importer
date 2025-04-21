export type Tag = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    doMore: boolean;
    doLess: boolean;
}

export type TagGroup = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    tags: Array<string>;
}

export type NoteLabel = {
    created_dts: string;
    updated_dts: string;
    name: string;
}