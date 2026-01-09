import { getFontStyles, type Font } from "./fonts";
import {getRichFontStyles} from "@/components/typography/richFonts.ts";
import { useMemo } from "react";

type Alignments = "left" | "center" | "right" | "justify";

interface TypographyProps {
    value?: string;
    level?: Font;
    alignment?: Alignments;
    underline?: boolean;
    inactive?: boolean;
    markdown?: boolean;
    highlighted?:boolean;
    secondary?: boolean;
    button?: boolean;
}

const Typography = ({
                        value = "This is a default value.",
                        level = "p",
                        alignment = "left",
                        underline,
                        inactive,
                        markdown,
                        highlighted,
                        secondary,
                        button
                    }: TypographyProps) => {

    const fontClasses = markdown ? getRichFontStyles(level) : getFontStyles(level);

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    }[alignment];

    const className = useMemo(() =>
            ` ${button && `text_button`}  ${highlighted ? `text_highlighted` : ''} ${secondary ? `text_secondary` : ''} ${fontClasses} ${alignmentClasses} ${underline ? "underline" : ""} ${inactive ? "opacity-75" : ""}`,
        [highlighted, secondary, fontClasses, alignmentClasses, underline, inactive]
    );

    return (
        <div className={className}>
            {value}
        </div>
    );
};

export default Typography;