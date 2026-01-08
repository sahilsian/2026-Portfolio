import { getFontStyles, type Font } from "./fonts";
import {getRichFontStyles} from "@/components/typography/richFonts.ts";

type Alignments = "left" | "center" | "right" | "justify";

interface TypographyProps {
    value?: string;
    level?: Font;
    alignment?: Alignments;
    underline?: boolean;
    inactive?: boolean;
    markdown?: boolean;
    highlighted?:boolean
}

const Typography = ({
                        value = "This is a default value.",
                        level = "p",
                        alignment = "left",
                        underline,
                        inactive,
                        markdown,
                        highlighted
                    }: TypographyProps) => {

    const fontClasses = markdown ? getRichFontStyles(level) : getFontStyles(level);

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    }[alignment];

    return (
        <div className={`${highlighted && "text-[#b88a1f]"} ${fontClasses} ${alignmentClasses} ${underline && "underline"} ${inactive && "opacity-75"}`}>
            {value}
        </div>
    );
};

export default Typography;
