import { App, Notice } from "obsidian";
import { ImportView } from "src/views/ImportView";
import { JournalisticExport } from "../models/JournalisticExportModel";

export class AppController {

    constructor(
        private app: App,
        private journalisticExportModel: JournalisticExport,
        private journalisticImporterView = new ImportView(
            app, 
            this.onFileImport.bind(this),
            this.onImportClicked.bind(this)
        )
    ) {
    }

    public async start() {
        this.journalisticImporterView.open();
        this.journalisticImporterView.listenForFileInput();
    }

    public async onFileImport(): Promise<void> {
        const journalisticFile = this.journalisticImporterView.getJournalisticFile();
        await this.journalisticExportModel.fromJson(journalisticFile)
    }

    public async onImportClicked(): Promise<void> {
        const data = this.journalisticExportModel.getData();
    }

    private writeFiles(entities: any[]): void{
        this.app.vault.createFolder('Journalistic');
        
    }
}