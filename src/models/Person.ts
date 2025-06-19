import { JournalisticPerson } from "src/types/People";
import { frontmatter, h2, tsMarkdown } from "ts-markdown";
import JournalisticEntity from "./JournalisticEntity";

export class Person extends JournalisticEntity {
    constructor(person: JournalisticPerson) {
        super(
            new Date(person.created_dts),
            new Date(person.updated_dts),
            person.name,
            "People"
        );
        const markdownEntries = [
            frontmatter({
                created_at: this.getCreatedAt().toISOString(),
                updated_at: this.getUpdatedAt().toISOString(),
                starred: person.starred,
                root: person.root
            }),
        ];
        this.content = tsMarkdown(markdownEntries);
    }
} 