import { App, Notice } from "obsidian";
import { ImportView } from "src/views/ImportView";
import { JournalisticExportModel } from "../models/JournalisticExportModel";

export class AppController {
    private view: ImportView;

    constructor(
        private app: App,
        private journalisticExportModel: JournalisticExportModel
    ) {
        this.view = new ImportView(app, this.onFileImport.bind(this));
    }

    public async start() {
        this.view.open();
        this.view.listenForFileInput();
    }

    public async onFileImport(): Promise<void> {
        const journalisticFile = this.view.getJournalisticFile();
        await this.parseFile(journalisticFile);
    }

    public async parseFile(file: File){
        const journalisticExport = await this.journalisticExportModel.fromJson(file);
        new Notice(journalisticExport.getInfo().journalisticVersion);
    }
}