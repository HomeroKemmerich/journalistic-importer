import { EntryType } from "src/types/Entries";
import { Gem, Goal, Idea } from "src/types/Gems";
import { Note } from "src/types/Notes";
import { Person, PersonGroup } from "src/types/People";
import { NoteLabel, Tag, TagGroup } from "src/types/Tags";

export type ExportInfo = {
    timestamp: string;
    journalisticVersion: string;
    exportVersion: number
}

export type ExportData = {
    entries: Array<EntryType>;
    tags: Array<Tag>;
    tagGroups: Array<TagGroup>;
    people: Array<Person>;
    personGroups: Array<PersonGroup>;
    notes: Array<Note>;
    noteLabels: Array<NoteLabel>;
    goals: Array<Goal>;
    gems: Array<Gem>;
    ideas: Array<Idea>;
}

export type JournalisticExport = {
    info: ExportInfo;
    data: ExportData;
}