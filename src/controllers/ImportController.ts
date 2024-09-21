import { App, Notice } from "obsidian";
import { JournalisticExport } from "src/types/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportView } from "src/views/ImportView";
import { ImportModel } from "../providers/ImportService";

export class ImportController {
    view: ImportView;
    model: ImportModel;

    constructor(app: App){
        this.view = new ImportView(app, this);
        this.model = new ImportModel(app);
    }

    public start(){
        this.view.open();
    }
}