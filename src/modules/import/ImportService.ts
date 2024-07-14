import { JournalisticExport } from "src/models/JournalisticExport";

export class ImportService {
    public read(file: string){
        const journalisticExport: JournalisticExport = JSON.parse(file);
        return journalisticExport; 
    }
}