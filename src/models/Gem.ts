import { title } from "process";
import { JournalisticGem } from "src/types/Gems";
import { frontmatter, h2, p, tsMarkdown } from "ts-markdown";

export class Gem extends JournalisticEntity {
    constructor(journalisticGem: JournalisticGem) {
        super(
            new Date(journalisticGem.created_dts),
            new Date(journalisticGem.updated_dts),
            `${journalisticGem.text.slice(0, 16)}...`,
            "Gems"
        );

        const markdownEntries = [
            frontmatter({
                title: journalisticGem.text,
                date: journalisticGem.date,
                type: journalisticGem.type,
                author: journalisticGem.author ? journalisticGem.author : "",
                source: journalisticGem.source ? journalisticGem.source : "",
                createdAt: this.createdAt.toISOString(),
            }),
            p(journalisticGem.text),
            h2('Notes'),
            p(journalisticGem.notes),
        ];

        if (journalisticGem.context) {
            markdownEntries.push(h2('Context'), p(journalisticGem.context));
        }

        this.content = tsMarkdown(markdownEntries);
    }
}