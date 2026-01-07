export type ButtonType = "primary" | "secondary";

export const getButtonType = (type: ButtonType): string => {
    const common = "px-8 rounded-full py-2 flex items-center gap-2 cursor-pointer transition-colors duration-300 outline-none";

    const variant = {
        primary: "border bg-[#191515] text-white",
        secondary: "border border-[#C2D6EE]",
    }[type];

    return `${common} ${variant}`;
};
