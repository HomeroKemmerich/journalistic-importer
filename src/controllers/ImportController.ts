import { App, Notice } from "obsidian";
import { ImportView } from "src/views/ImportView";
import { JournalisticExportModel } from "../models/JournalisticExport";

export class AppController {
    private view: ImportView;

    constructor(
        private app: App,
        private model: JournalisticExportModel
    ) {
        this.view = new ImportView(app, this);
    }

    public async start() {
        this.view.open();
        this.view.listenForFileInput();
    }

    public async fileImported() {
        const journalisticFile = this.view.getJournalisticFile();
        await this.parseFile(journalisticFile);
    }

    public async parseFile(file: File){
        await this.model.fromJson(file);
        new Notice(this.model.getInfo().journalisticVersion)
    }
}