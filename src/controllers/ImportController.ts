import { App, Notice } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportView } from "src/views/ImportView";
import { ImportModel } from "../models/ImportModel";

export class AppController {
    private view: ImportView;
    private model: ImportModel;

    private files: FileListOrNull;

    public getFiles(): FileListOrNull {
        return this.files;
    }

    public setFiles(files: FileListOrNull): void {
        this.files = files;
    }

    constructor(app: App) {
        this.view = new ImportView(app, this);
        this.model = new ImportModel(app);
    }

    public start() {
        this.view.open();
    }

    public parseFiles(): void {
    }
}