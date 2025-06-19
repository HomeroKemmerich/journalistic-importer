export type JournalisticNote = {
    created_dts: string;
    updated_dts: string;
    date: string;
    title: string;
    text: string;
    labels: Array<string>
}
export type JournalisticNoteLabel = {
    created_dts: string;
    updated_dts: string;
    name: string;
}