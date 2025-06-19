import { JournalisticIdea } from "src/types/Gems";
import { frontmatter, h2, p, tsMarkdown } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class Idea extends JournalisticEntity {
    constructor(idea: JournalisticIdea) {
        super(
            new Date(idea.created_dts),
            new Date(idea.updated_dts),
            `${idea.shortDescription.slice(0, 16)}....md`,
            "Ideas"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
            }),
            h2(idea.shortDescription),
            p(idea.longDescription)
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 