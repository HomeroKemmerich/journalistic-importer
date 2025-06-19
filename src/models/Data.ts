import { JournalisticExportData } from "src/types/JournalisticExport";
import { Entry } from "./Entry";
import { Gem } from "./Gem";
import { Goal } from "./Goal";

export class JournalisticData {
    entries: Entry[];
    goals: Goal[];
    gems: Gem[];

    constructor(data: JournalisticExportData){
        this.entries = data.entries.map(entry => new Entry(entry));
        this.goals = data.goals.map(goal => new Goal(goal));
        this.gems = data.gems.map(gem => new Gem(gem));
    }

}