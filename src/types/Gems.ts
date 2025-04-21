export type Goal = {
    created_dts: string;
    updated_dts: string;
    title: string;
    priority: number;
}

export type Gem = {
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

export type Idea = {
    created_dts: string;
    updated_dts: string;
    date: string;
    shortDescription: string;
    longDescription: string;
}
