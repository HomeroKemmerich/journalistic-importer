import { JournalisticGoal } from "src/types/Gems";
import { frontmatter, tsMarkdown } from "ts-markdown";

export class Goal extends JournalisticEntity {
    title: string;
    priority: number;

    constructor(goalData: JournalisticGoal) {
        super(
            new Date(goalData.created_dts),
            new Date(goalData.updated_dts),
            goalData.title,
            'goals',
            ''
        );
        this.title = goalData.title;
        this.priority = goalData.priority;

        const markdownEntries = [
            frontmatter({
                created_at: this.createdAt.toISOString(),
                updated_at: this.updatedAt.toISOString(),
                priority: this.priority,
            })
        ]

        this.content = tsMarkdown(markdownEntries);
    }
}