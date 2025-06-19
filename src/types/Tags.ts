export type JournalisticTag = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    doMore: boolean;
    doLess: boolean;
}

export type JournalisticTagGroup = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    pinned: boolean;
    name: string;
    tags: Array<string>;
}
