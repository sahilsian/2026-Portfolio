class Main {

    Env:Map<MSymbol, Function> | void;
    Reference:Map<string, MSymbol>;

    constructor() {
        this.Env = this.build();
    }

    private build(): Map<MSymbol, Function> | void {
        //const env = new Map<MarkdownSymbol, Function>()

        const refs = new Map<string, Function>([
            ["HEADING", Procedure.HEADING],
            ["BODY", Procedure.BODY]
        ])

        for (const [name, process] of refs) {
            console.log(name, process)
        }
    }

    // GlobalReferencingEnvironment = new Map<MarkdownSymbol, Function>([
    //     [new MarkdownSymbol("HEADING"),  Procedure.HEADING()]
    // ]);

}