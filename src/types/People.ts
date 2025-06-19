export type JournalisticPerson = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    name: string;
    root: boolean;
}

export type JournalisticPersonGroup = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    name: string;
    people: Array<string>;
}