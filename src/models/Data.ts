import { JournalisticExportData } from "src/types/JournalisticExport";
import { Entry } from "./Entry";
import { Gem } from "./Gem";
import { Goal } from "./Goal";
import { Idea } from "./Idea";
import { Note } from "./Note";
import { NoteLabel } from "./NoteLabel";
import { Person } from "./Person";
import { PersonGroup } from "./PersonGroup";
import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

export class JournalisticData {
    entries: Entry[];
    goals: Goal[];
    gems: Gem[];
    notes: Note[];
    noteLabels: NoteLabel[];
    tags: Tag[];
    tagGroups: TagGroup[];
    people: Person[];
    personGroups: PersonGroup[];
    ideas: Idea[];

    constructor(data: JournalisticExportData) {
        this.entries = data.entries.map(entry => new Entry(entry));
        this.goals = data.goals.map(goal => new Goal(goal));
        this.gems = data.gems.map(gem => new Gem(gem));
        this.notes = data.notes.map(note => new Note(note));
        this.noteLabels = data.noteLabels.map(label => new NoteLabel(label));
        this.tags = data.tags.map(tag => new Tag(tag));
        this.tagGroups = data.tagGroups.map(group => new TagGroup(group));
        this.people = data.people.map(person => new Person(person));
        this.personGroups = data.personGroups.map(group => new PersonGroup(group));
        this.ideas = data.ideas.map(idea => new Idea(idea));
    }
}