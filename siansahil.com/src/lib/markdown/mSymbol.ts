class MSymbol {
    readonly symbol: Symbol;

    constructor(name: string) {
        this.symbol = Symbol(name);
    }

    toString(): string {
        return this.symbol.toString();
    }

    static create(name: string): MSymbol {
        return new MSymbol(name);
    }

    static symbolToString(symbol: Symbol): string {
        return symbol.toString();
    }
}