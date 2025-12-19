// Sahil Sian 2025

import {useMemo} from "react";

const useMarkdownParser = (markdown:string) => {
    const output = useMemo(() => {
        const html;

        const tokenizer = new Tokenizer(markdown);

        return html
    }, [markdown])

    return output
}

export default useMarkdownParser