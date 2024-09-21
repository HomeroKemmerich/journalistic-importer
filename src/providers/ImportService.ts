import { App } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";

export class ImportModel {
    app: App;

    constructor(app: App){
        this.app = app;
    }
}