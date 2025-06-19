import { frontmatter, h1, h2, p, tsMarkdown, ul } from 'ts-markdown';
import { EntryType, JournalisticBullet, JournalisticDream } from '../types/Entries';
import JournalisticEntity from "./JournalisticEntity";

export class Entry extends JournalisticEntity {
    private date: string;
    private bullets: JournalisticBullet[];
    private dreams: JournalisticDream[];

    constructor(entry: EntryType) {
        super(
            new Date(entry.created_dts),
            new Date(entry.updated_dts),
            entry.date,
            'Entries',
        )

        this.date = entry.date;
        this.bullets = entry.bullets;
        this.dreams = entry.dreams;

        const markdownEntries = [
            frontmatter({
                created_at: this.createdAt.toISOString(),
                updated_at: this.updatedAt.toISOString(),
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

        this.content = tsMarkdown(markdownEntries);
    }

}