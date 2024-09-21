import { App } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";

export class ImportModel {
    private journalisticExport: JournalisticExport;

    constructor(private app: App){
    }

    public getJournalisticExport(): JournalisticExport {
        return this.journalisticExport;
    }

    public setJournalisticExport(journalisticExport: JournalisticExport): void {
        this.journalisticExport = journalisticExport;
    }
}