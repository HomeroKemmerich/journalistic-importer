export type JournalisticGoal = {
    created_dts: string;
    updated_dts: string;
    title: string;
    priority: number;
}

export type JournalisticGem = {
    created_dts: string;
    updated_dts: string;
    date: string;
    type: string;
    text: string;
    notes: string;
    source?: string;
    author?: string;
    context?: string; 
}

export enum GemType {
    Excerpt = 'Excerpt',
    Fact = 'Fact',
    Lesson = 'Lesson',
    Quote = 'Quote',
    Thought = 'Thought'
}

export type JournalisticIdea = {
    created_dts: string;
    updated_dts: string;
    date: string;
    shortDescription: string;
    longDescription: string;
}
