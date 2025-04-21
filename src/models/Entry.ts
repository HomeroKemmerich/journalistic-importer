import { frontmatter, h1, h2, p, tsMarkdown, ul } from 'ts-markdown';
import { Bullet, Dream, EntryType } from '../types/Entries';

export class Entry implements EntryType, JournalisticEntity {
    bullets: Bullet[];
    created_dts: string;
    date: string;
    dreams: Dream[];
    updated_dts: string;
    
    constructor(entry: EntryType) {
        this.bullets = entry.bullets;
        this.created_dts = entry.created_dts;
        this.date = entry.date;
        this.dreams = entry.dreams;
        this.updated_dts = entry.updated_dts;
    }

    getFileContent(): any {

        const markdownEntries = [
            frontmatter({
                created_at: this.created_dts,
                updated_at: this.updated_dts,
            }),
            h2('Bullets'),
            ul(this.bullets),
        ]

        if (this.dreams.length > 0) {
            markdownEntries.push(
                h2('Dreams'),
                ul(this.dreams),
            )
        }

        return tsMarkdown(markdownEntries);
    }
    
    getFileName(): string {
        return `entries/${this.date}.md`;
    }

}