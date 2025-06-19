import { JournalisticPersonGroup } from "src/types/People";
import { frontmatter, h2, tsMarkdown, ul } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class PersonGroup extends JournalisticEntity {
    constructor(group: JournalisticPersonGroup) {
        super(
            new Date(group.created_dts),
            new Date(group.updated_dts),
            `${group.name}.md`,
            "PersonGroups"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
                people: group.people.map(person => `[[${person}]]`)
            })
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 