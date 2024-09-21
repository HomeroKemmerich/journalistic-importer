import { App, Notice } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportView } from "src/views/ImportView";
import { ImportModel } from "../models/ImportModel";

export class ImportController {
    private view: ImportView;
    private model: ImportModel;

    constructor(app: App){
        this.view = new ImportView(app, this);
        this.model = new ImportModel(app);
    }

    public openModal(){
        this.view.open();
    }

    public async importFiles(files: FileListOrNull){
        if(files === null){
            new Notice('Invalid file');
            return;
        }

        //TODO: parse JSON file and add it to the model

        return;
    }
}