import { ExportData, ExportInfo, JournalisticExport } from "src/types/JournalisticExport";

export class JournalisticExportModel {
    private info: ExportInfo
    private data: ExportData

    public async fromJson(file: File){
        const fileText = await file.text();
        const content: JournalisticExport = JSON.parse(fileText);

        this.data = content.data;
        this.info = content.info;
    }

    public getInfo(): ExportInfo {
        return this.info;
    }

}