import { JournalisticExportInfo, JournalisticExportType } from "src/types/JournalisticExport";
import { JournalisticData } from "./Data";

export class JournalisticExport {
    private info: JournalisticExportInfo;
    private data: JournalisticData;

    constructor (file: File) {
        this.fromJson(file);
    }

    public async fromJson(file: File): Promise<void> {
        const fileText = await file.text();
        const content: JournalisticExportType = JSON.parse(fileText);
        this.info = content.info;
        this.data = new JournalisticData(content.data);
    }

    public getInfo(): JournalisticExportInfo {
        return this.info;
    }

    public getData(): JournalisticData {
        return this.data;
    }

    public import(): void {

    }

}