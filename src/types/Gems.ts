export type Goal = {
    createdAt: string;
    updatedAt: string;
    title: string;
    priority: number;
}

export type Gem = {
    createdAt: string;
    updatedAt: string;
    date: string;
    type: GemType;
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
    createdAt: string;
    updatedAt: string;
    date: string;
    shortDescription: string;
    longDescription: string;
}
