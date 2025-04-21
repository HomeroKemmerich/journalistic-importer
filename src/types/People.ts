export type Person = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    name: string;
    root: boolean;
}

export type PersonGroup = {
    created_dts: string;
    updated_dts: string;
    starred: boolean;
    name: string;
    people: Array<string>;
}