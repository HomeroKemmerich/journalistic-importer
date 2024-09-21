import { Notice } from "obsidian";
import { JournalisticExport } from "src/models/JournalisticExport";
import { FileListOrNull } from "src/types/Types";
import { ImportService } from "../providers/ImportService";

export class ImportController {
    constructor(private journalisticService: ImportService){}

    public async read(files: FileListOrNull): Promise<JournalisticExport | undefined>{
        try {
            
            if(!files || files.length < 1){
                throw new Error('No files selected');
            }

            const file = files![0];
            const content = (await file.text());
            
            const journalisticExport = this.journalisticService.read(content);

            return journalisticExport;

        } catch(error) {
            new Notice(error.message)
        }
    }

    public async write( journalisticExport: JournalisticExport): Promise<boolean> {
        try{
            const wrote = this.journalisticService.write(journalisticExport);
            return wrote;
        } catch(error){
            new Notice(error);
        }
    }
}