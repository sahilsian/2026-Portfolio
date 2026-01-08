import { getFontStyles, type Font } from "./fonts";
import {getRichFontStyles} from "@/components/typography/richFonts.ts";
import {useStyles} from "@/hooks/useStyles.ts";
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

    const styles = useStyles()

    const fontClasses = markdown ? getRichFontStyles(level) : getFontStyles(level);

    const alignmentClasses = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
    }[alignment];
    console.log(styles.textButtonHex)
    const className = useMemo(() =>
            ` ${button && `text-[${styles.textButtonHex}]`} text-[${styles.textPrimaryHex}] ${highlighted ? `text-[${styles.secondaryHex}]` : ''} ${secondary ? `text-[${styles.textSecondaryHex}]` : ''} ${fontClasses} ${alignmentClasses} ${underline ? "underline" : ""} ${inactive ? "opacity-75" : ""}`,
        [styles.textPrimaryHex, styles.secondaryHex, styles.textSecondaryHex, highlighted, secondary, fontClasses, alignmentClasses, underline, inactive]
    );

    return (
        <div className={className}>
            {value}
        </div>
    );
};

export default Typography;