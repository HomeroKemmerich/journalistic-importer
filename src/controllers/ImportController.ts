import { App, Notice } from "obsidian";
import { ImportView } from "src/views/ImportView";
import { JournalisticExport } from "../models/JournalisticExportModel";

export class AppController {

    private journalisticImporterView: ImportView;

    constructor(
        private app: App,
        private journalisticExport: JournalisticExport,
    ) {
        this.journalisticImporterView = new ImportView(
            this.app,
            this.onFileImport.bind(this),
            this.onImportClicked.bind(this)
        );
    }

    public async start() {
        this.journalisticImporterView.open();
        this.journalisticImporterView.listenForFileInput();
    }

    public async onFileImport(): Promise<void> {
        try {
            const journalisticFile = this.journalisticImporterView.getJournalisticFile();
            this.journalisticExport = new JournalisticExport();
            await this.journalisticExport.fromJson(journalisticFile);
        } catch (error) {
            new Notice(error.message)
        }
    }

    public async onImportClicked(): Promise<void> {
        try {
            if (!this.journalisticExport.getData()) {
                new Notice('No data loaded. Please, select a file first.');
                return;
            }
            this.journalisticImporterView.close();
            this.app.vault.createFolder('Journalistic');
            const exportData = this.journalisticExport.export();
            for (const key of Object.keys(exportData)) {
                this.app.vault.createFolder(`Journalistic/${key}`);
                for (const item of exportData[key]) {
                    try {
                        console.log(`Creating file: Journalistic/${key}/${item.getFileName()}`);
                        this.app.vault.create(`Journalistic/${key}/${item.getFileName()}`, item.getContent());
                    } catch (error) {
                        console.error(`Error creating ${item.getFileName()} in  ${key}`)
                    }
                }
            }
            new Notice('Data imported successfully');
        } catch (error) {
            new Notice('Error importing data: ' + error);
        }
    }
}
