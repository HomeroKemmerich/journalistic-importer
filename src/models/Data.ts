import { JournalisticExportData } from "src/types/JournalisticExport";
import { Entry } from "./Entry";
import { Goal } from "./Goal";

export class JournalisticData {
    entries: Entry[];
    goals: Goal[];

    constructor(data: JournalisticExportData){
        this.entries = data.entries.map(entry => new Entry(entry));
        this.goals = data.goals.map(goal => new Goal(goal));
    }

}