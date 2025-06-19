abstract class JournalisticEntity {
    protected createdAt: Date;
    protected updatedAt: Date;
    protected fileName: string;
    protected folderName: string;
    protected filePath: string;
    protected content: string;

    constructor(createdAt: Date, updatedAt: Date, fileName: string, folderName: string) {
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.fileName = fileName;
        this.folderName = folderName;
        this.filePath = `${folderName}/${fileName}`;
    }

    public getFileName(): string {
        return this.fileName;
    }
    public getFolderName(): string {
        return this.folderName;
    }
    public getFilePath(): string {
        return this.filePath;
    }
    public getContent(): string {
        return this.content;
    }
    public getCreatedAt(): Date {
        return this.createdAt;
    }
    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public setFileName(fileName: string): void {
        this.fileName = fileName;
        this.filePath = `${this.folderName}/${this.fileName}`;
    }
}