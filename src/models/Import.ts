import { JournalisticExport } from "src/models/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportController } from "../controllers/ImportController";
import { ImportService } from "../providers/ImportService";

export class Import {
    controller: ImportController;
    provider: ImportService;

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