import { ExportData, ExportInfo, JournalisticExport } from "src/types/JournalisticExport";
import { Entry } from './Entry';

export class JournalisticExportModel {
    private info: ExportInfo
    private data: ExportData

    constructor () {

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

    public getEntries(): Entry[] {
        return this.data.entries.map(entry => {
            return new Entry(entry);
        })
    }


}