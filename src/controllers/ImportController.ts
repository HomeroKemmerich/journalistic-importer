import { App, Notice } from "obsidian";
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
        const data = this.journalisticExportModel.getData();

        this.writeFiles(data.getContent());
    }

    private writeFiles(entities: any[]): void{
        this.app.vault.createFolder('Journalistic');
        entities.forEach(entry => {
            const file = entry.getFileContent();
            const fileName = entry.getFileName();
            const folderName = entry.getFolderName();

            this.app.vault.createFolder(`Journalistic/${folderName}`);

            this.app.vault.create(`Journalistic/${fileName}`, file)
                .then(() => {
                    new Notice(`File ${fileName} created`);
                })
                .catch((error) => {
                    new Notice(`Error creating file ${fileName}: ${error}`);
                });
        })
    }
}