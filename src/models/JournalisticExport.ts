type ExportInfo = {
    timestamp: string;
    journalisticVersion: string;
    exportVersion: number
}

type ExportData = {
    entries: Array<Object>;
    tags: Array<Object>;
    tagGroups: Array<Object>;
    people: Array<Object>;
    personGroups: Array<Object>;
    notes: Array<Object>;
    noteLabels: Array<Object>;
    goals: Array<Object>;
    gems: Array<Object>;
    ideas: Array<Object>;
}

export type JournalisticExport {
    info: ExportInfo;
    data: ExportData;
}