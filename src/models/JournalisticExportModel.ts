import { JournalisticExport, JournalisticExportData, JournalisticExportInfo } from "src/types/JournalisticExport";
import { JournalisticData } from "./Data";
import { Entry } from './Entry';

export class JournalisticExportModel {
    private info: JournalisticExportInfo;
    private data: JournalisticData;

    constructor () {

    }

    public async fromJson(file: File){
        const fileText = await file.text();
        const content: JournalisticExport = JSON.parse(fileText);

        this.data = new JournalisticData(content.data);
        this.info = content.info;

        return this;
    }

    public getInfo(): JournalisticExportInfo {
        return this.info;
    }

    public getData(): JournalisticData {
        return this.data;
    }


}