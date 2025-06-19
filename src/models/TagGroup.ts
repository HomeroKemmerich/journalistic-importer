import { JournalisticTagGroup } from "src/types/Tags";
import { frontmatter, h2, tsMarkdown, ul } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class TagGroup extends JournalisticEntity {
    constructor(tagGroup: JournalisticTagGroup) {
        super(
            new Date(tagGroup.created_dts),
            new Date(tagGroup.updated_dts),
            tagGroup.name,
            "TagGroups"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
                starred: tagGroup.starred,
                pinned: tagGroup.pinned,
                tags: tagGroup.tags
            })
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 