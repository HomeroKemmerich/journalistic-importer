import { Notice } from "obsidian";
import { JournalisticExportInfo, JournalisticExportType } from "src/types/JournalisticExport";
import { JournalisticData } from "./Data";
import JournalisticEntity from "./JournalisticEntity";

export class JournalisticExport {
    private info: JournalisticExportInfo;
    private data: JournalisticData;

    constructor() {
    }

    public async fromJson(file: File): Promise<void> {
        try {
            const fileText = await file.text();
            const content: JournalisticExportType = JSON.parse(fileText);
            this.info = content.info;
            this.data = new JournalisticData(content.data);
        } catch (error) {
            throw new Error(`Error reading data from JSON: ${error}`)
        }
    }

    public getInfo(): JournalisticExportInfo {
        return this.info;
    }

    public getData(): JournalisticData {
        return this.data;
    }

    public export(): Record<string, JournalisticEntity[]> {
        if (!this.data) {
            throw new Error('Data not loaded. Call fromJson() first.')
        }
        return this.data.asRecord();
    }

}