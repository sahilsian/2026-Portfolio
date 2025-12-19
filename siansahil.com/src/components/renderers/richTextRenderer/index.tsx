

interface RichTextRendererProps {
    richText: string;
}

const RichTextRenderer = ({richText}:RichTextRendererProps) => {


    return <div>{richText}</div>
}

export default RichTextRenderer