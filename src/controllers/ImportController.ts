import { App, Notice } from "obsidian";
import { Entry } from "src/models/Entry";
import { ImportView } from "src/views/ImportView";
import { JournalisticExportModel } from "../models/JournalisticExportModel";

export class AppController {

    constructor(
        private app: App,
        private journalisticExportModel: JournalisticExportModel,
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
        const entries = this.journalisticExportModel.getEntries();

        if (entries.length === 0) {
            new Notice('No entries found');
            return;
        }

        this.writeFiles(entries);
    }

    private writeFiles(entities: Entry[]): void{
        this.app.vault.createFolder('entries')
        entities.forEach(entry => {
            const file = entry.getFileContent();
            const fileName = entry.getFileName();

            this.app.vault.create(fileName, file)
                .then(() => {
                    new Notice(`File ${fileName} created`);
                })
                .catch((error) => {
                    new Notice(`Error creating file ${fileName}: ${error}`);
                });
        })
    }
}