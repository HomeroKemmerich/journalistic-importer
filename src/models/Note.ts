import { JournalisticNote } from "src/types/Notes";
import { frontmatter, h2, p, tsMarkdown } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class Note extends JournalisticEntity {
    constructor(note: JournalisticNote) {
        super(
            new Date(note.created_dts),
            new Date(note.updated_dts),
            note.title,
            "Notes"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
                tags: note.labels
            }),
            p(note.text)
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 