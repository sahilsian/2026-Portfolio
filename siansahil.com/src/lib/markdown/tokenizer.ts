
// Markdown tokenizer/lexer
// Regex generated using claude

export class Tokenizer {
    markdown:string
    line:number
    constructor(markdown:string) {
        this.markdown = markdown
        this.line = 1;
    }

    tokenize(): Token[] {
        const tokens:Token[] = [];
        const lines = this.markdown.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            const token = this.createToken(line)

            if(token) {
                tokens.push(token)
            }
        }

        return tokens
    }

    createToken(line:string): Token | null {
        const type = this.tokenSearch(line)

        switch(type) {
            case "HEADING": {
                return this.createHeadingToken(line)
            }
            case "LIST_ORDERED": {
                return this.createOrderedListToken(line)
            }
            case "LIST_UNORDERED": {
                return this.createUnorderedListToken(line)
            }
            case "PARAGRAPH": {
                return this.createParagraphToken(line)
            }
            default: {
                return null
            }
        }
    }

    tokenSearch(line: string) {
        if(line.match(/^#{1,6}\s+/)) {
            return TokenType.HEADING
        }
        if(line.match(/^[-*+]\s+/)) {
            return TokenType.LIST_UNORDERED
        }
        if(line.match(/^\d+\.\s+/)) {
            return TokenType.LIST_ORDERED
        }

        return TokenType.PARAGRAPH
    }

    createHeadingToken(line:string):Token {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        return {
            type: TokenType.HEADING,
            text_level: match![1].length,
            value: match![2],
            line: this.line,
            column: 0
        };
    }

    createOrderedListToken(line:string):Token {
        const match = line.match(/^\d+\.\s+(.+)$/);
        return {
            type: TokenType.LIST_ORDERED,
            value: match![1],
            line: this.line,
            column: 0
        };
    }

    createUnorderedListToken(line:string):Token {
        const match = line.match(/^[-*+]\s+(.+)$/)
        return {
            type: TokenType.LIST_UNORDERED,
            value: match![1],
            line: this.line,
            column: 0
        };
    }

    createParagraphToken(line:string):Token {
        return {
            type: TokenType.PARAGRAPH,
            value: line,
            line: this.line,
            column: 0
        };
    }

}


export enum TokenType {
    HEADING = "HEADING",
    PARAGRAPH = "PARAGRAPH",
    BOLD = "BOLD",
    ITALIC = "ITALIC",
    LIST_ORDERED = "LIST_ORDERED",
    LIST_UNORDERED = "LIST_UNORDERED",
    LINK = "LINK",
    TEXT = "TEXT",
    EOF = "EOF"
}

export interface Token {
    type: TokenType,
    value: string,
    text_level?: number;
    link_href?: string;
    image_alt?: string;
    image_src?: string;
    line: number;
    column: number;
}