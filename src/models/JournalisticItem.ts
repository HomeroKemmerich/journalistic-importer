export interface JournalisticItem {
    createdAt: Date;
    updatedAt: Date;

    toTSMD(): Array<Object>;

}