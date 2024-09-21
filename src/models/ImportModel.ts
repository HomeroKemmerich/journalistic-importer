import { App } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";

export class ImportModel {
    private journalisticExport: JournalisticExport;

    constructor(private app: App){
    }
}