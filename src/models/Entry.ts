import { Bullet, Dream, EntryType } from "src/types/Entries";
import { JournalisticItem } from "./JournalisticItem";

export class Entry implements JournalisticItem{
    createdAt: Date;
    updatedAt: Date;
    date: string;
    dreams: Array<Dream>
    bullets: Array<string>
    

    constructor(entry: EntryType){
        this.createdAt = new Date(entry.createdAt);
        this.updatedAt = new Date(entry.updatedAt);
        this.date = entry.date;
        this.dreams = entry.dreams;
        this.bullets = entry.bullets.map((bullet) => {
            return bullet.text;
        });
    }

    toTSMD(): Array<Object> {
        return [
            {
                h1: this.date
            },
            {
                h2: 'Dreams',
            },
            {
                text: this.dreams[0]
            },
            {
                h2: 'Bullets'
            },
            {
                ul: this.bullets
            }
        ]
    }
}