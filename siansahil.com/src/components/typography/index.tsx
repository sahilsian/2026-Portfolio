import { getFontStyles, type Font } from "./fonts";

type Alignments = "left" | "center" | "right" | "justify";

interface TypographyProps {
    value?: string;
    level?: Font;
    alignment?: Alignments;
    underline?: boolean;
    inactive?: boolean
}

const Typography = ({
                        value = "This is a default value.",
                        level = "p",
                        alignment = "left",
                        underline,
                        inactive
                    }: TypographyProps) => {

    const fontClasses = getFontStyles(level);

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    }[alignment];

    return (
        <div className={`${fontClasses} ${alignmentClasses} ${underline && "underline"} ${inactive && "opacity-75"}`}>
            {value}
        </div>
    );
};

export default Typography;
