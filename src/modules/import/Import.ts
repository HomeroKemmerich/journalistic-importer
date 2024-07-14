import { JournalisticExport } from "src/models/JournalisticExport";
import { Module } from "src/models/Module";
import { FileListOrNull } from "src/types/Types";
import { ImportController } from "./ImportController";
import { ImportService } from "./ImportService";

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