import { getFontStyles, type Font } from "./fonts";
import {getRichFontStyles} from "@/components/typography/richFonts.ts";

type Alignments = "left" | "center" | "right" | "justify";

interface TypographyProps {
    value?: string;
    level?: Font;
    alignment?: Alignments;
    underline?: boolean;
    inactive?: boolean;
    rich?: boolean;
}

const Typography = ({
                        value = "This is a default value.",
                        level = "p",
                        alignment = "left",
                        underline,
                        inactive,
                        rich
                    }: TypographyProps) => {

    const fontClasses = rich ? getRichFontStyles(level) : getFontStyles(level);

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
