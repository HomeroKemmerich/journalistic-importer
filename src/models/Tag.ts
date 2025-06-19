import { JournalisticTag } from "src/types/Tags";
import { frontmatter, h2, tsMarkdown } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class Tag extends JournalisticEntity {
    constructor(tag: JournalisticTag) {
        super(
            new Date(tag.created_dts),
            new Date(tag.updated_dts),
            `${tag.name}.md`,
            "Tags"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
                starred: tag.starred,
                pinned: tag.pinned,
                do: tag.doMore ? "more" : tag.doLess ? "less" : "",
                tags: `#${tag.name}`
            }),
            h2(tag.name)
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 