import React from "react";
import Typography from "@/components/typography";
import {Font} from "@/components/typography/fonts.ts";

export class Procedure {
    static HEADING = (level: number, content: string): React.ReactNode => {
        const fontMap: Record<number,Font> = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
        };

        return (
            <Typography
                key={content}
                level={fontMap[level] || "p"}
                value={content}
            >
            </Typography>
    );
    };

    static PARAGRAPH = (content: string): React.ReactNode => {
        return <Typography
            key={content}
            level={"p"}
            value={content}
        >
        </Typography>;
    };

    static LIST_ORDERED = (content: string): React.ReactNode => {
        return <li><Typography level="p" value={content}></Typography></li>;
    };

    static LIST_UNORDERED = (content: string): React.ReactNode => {
        return <li><Typography level="p" value={content}></Typography></li>;
    };
}
