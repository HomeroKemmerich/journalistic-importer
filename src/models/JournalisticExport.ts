import { Entry } from "src/types/Entries";
import { Gem, Goal, Idea } from "src/types/Gems";
import { Note } from "src/types/Notes";
import { Person, PersonGroup } from "src/types/People";
import { NoteLabel, Tag, TagGroup } from "src/types/Tags";

type ExportInfo = {
    timestamp: string;
    journalisticVersion: string;
    exportVersion: number
}

type ExportData = {
    entries: Array<Entry>;
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

export type JournalisticExport {
    info: ExportInfo;
    data: ExportData;
}