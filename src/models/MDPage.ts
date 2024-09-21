export class MarkdownPage {
    frontmatter: Object;
    body: Object;

    constructor(frontmatter: Object, content: Object){
        this.frontmatter = frontmatter;
        this.body = content;
    }

    public write(){
    }
}