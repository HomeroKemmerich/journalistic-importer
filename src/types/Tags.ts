export type Tag = {
    createdAt: string;
    updatedAt: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    doMore: boolean;
    doLess: boolean;
}

export type TagGroup = {
    createdAt: string;
    updatedAt: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    tags: Array<string>;
}

export type NoteLabel = {
    createdAt: string;
    updatedAt: string;
    name: string;
}