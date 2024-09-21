import { JournalisticExport } from "src/types/JournalisticExport";

export class ImportModel {
    private content: JournalisticExport;

    public read(file: string){
        this.content = JSON.parse(file); 
    }

    public write(journalisticExport: JournalisticExport): boolean {
        
    }
}