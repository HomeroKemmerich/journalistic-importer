import { JournalisticExport } from "src/types/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportController } from "../controllers/ImportController";
import { ImportModel } from "../providers/ImportService";

export class Import {
    controller: ImportController;
    provider: ImportModel;

    constructor(journalisticExport: FileListOrNull){
        const _journalisticExport = this.read(journalisticExport)
        this.write(_journalisticExport);
    }

    read(journalisticExport: FileListOrNull): Promise<JournalisticExport | undefined>{
        return this.controller.read(journalisticExport);
    }

    write(journalisticExport: JournalisticExport): void{
        
    }
}