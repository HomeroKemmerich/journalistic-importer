import { blockquote, h1, h2, MarkdownEntry, MarkdownEntryOrPrimitive, tsMarkdown } from "ts-markdown";

export class TSMarkdownService {
    constructor () {}

    public toMarkdown(mdObject: MarkdownEntryOrPrimitive[]){
        return tsMarkdown(mdObject);
    }

    public h1(text: string) {
        return h1(text);
    }

    public h2(text: string) {
        return h2(text);
    }

    public h3(text: string) {
        return h2(text);
    }

    public blockquote(text: string) {
        return blockquote(text)
    }

    public frontmatter(data: Object){
        
    }
}