import type { Font } from "./fonts";

// For rich text
export const RICH_FONT_STYLES_MAP: Record<Font, string> = {
    "1": "text-[2rem] lg:text-[4rem] font-medium leading-[1.2] font-serif",
    "2": "text-[1.8rem] lg:text-[2.5rem] leading-[1.2] mb-[0.5rem] font-normal font-serif",
    "3": "text-[1.5rem] font-medium font-serif",
    "4": "text-[1rem] font-medium leading-[1.4] font-serif",
    "5": "text-[0.9rem] font-medium leading-[1.5] font-serif",
    "6": "text-[0.8rem] font-medium leading-[1.5] font-serif",
    "p": "text-[0.95rem] md:text-[1.1rem] font-normal font-serif",
    "button": "text-[0.95rem] cursor-pointer font-normal font-serif underline",
};

export const getRichFontStyles = (value: Font) => RICH_FONT_STYLES_MAP[value] || "";
