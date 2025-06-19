import { EntryType } from "src/types/Entries";
import { JournalisticGem, JournalisticGoal, JournalisticIdea } from "src/types/Gems";
import { JournalisticNote, JournalisticNoteLabel } from "src/types/Notes";
import { JournalisticPerson, JournalisticPersonGroup } from "src/types/People";
import { JournalisticTag, JournalisticTagGroup } from "src/types/Tags";

export type JournalisticExportInfo = {
    timestamp: string;
    journalisticVersion: string;
    exportVersion: number
}

export type JournalisticExportData = {
    entries: Array<EntryType>;
    tags: Array<JournalisticTag>;
    tagGroups: Array<JournalisticTagGroup>;
    people: Array<JournalisticPerson>;
    personGroups: Array<JournalisticPersonGroup>;
    notes: Array<JournalisticNote>;
    noteLabels: Array<JournalisticNoteLabel>;
    goals: Array<JournalisticGoal>;
    gems: Array<JournalisticGem>;
    ideas: Array<JournalisticIdea>;
}

export type JournalisticExport = {
    info: JournalisticExportInfo;
    data: JournalisticExportData;
}