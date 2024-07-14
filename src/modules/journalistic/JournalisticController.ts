import { Notice } from "obsidian";
import { JournalisticService } from "./JournalisticService";

export class JournalisticController {
    constructor(private journalisticService: JournalisticService){}

    public async find(files: FileList){

        if(!files || files.length < 1){
            throw new Error('No files selected')
        }

        const file = target.files![0];

        try {
            const content = (await file.text());
            const journalisticExport = JSON.parse(content);
            
            this.journalisticService.read(journalisticExport);

        } catch(error) {
            new Notice(error.message)
        }
    }
}