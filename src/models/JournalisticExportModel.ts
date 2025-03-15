import { TSMarkdownService } from "src/services/TSMarkdownService";
import { ExportData, ExportInfo, JournalisticExport } from "src/types/JournalisticExport";

export class JournalisticExportModel {
    private info: ExportInfo
    private data: ExportData

    constructor (private readonly tsMarkdownService: TSMarkdownService) {

    }

    public async fromJson(file: File){
        const fileText = await file.text();
        const content: JournalisticExport = JSON.parse(fileText);

        this.data = content.data;
        this.info = content.info;

        return this;
    }

    public getInfo(): ExportInfo {
        return this.info;
    }

    public toMarkdown(){
        const pages = [];
        for (let entry in this.data.entries){
            
        }
    }

}