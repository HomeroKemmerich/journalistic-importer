export type Person = {
    createdAt: string;
    updatedAt: string;
    starred: boolean;
    name: string;
    root: boolean;
}

export type PersonGroup = {
    createdAt: string;
    updatedAt: string;
    starred: boolean;
    name: string;
    people: Array<string>;
}