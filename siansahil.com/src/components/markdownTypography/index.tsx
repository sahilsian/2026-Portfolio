import React, { PropsWithChildren } from "react";
import { getRichFontStyles } from "@/components/typography/richFonts.ts";
import { InlineToken, TokenType } from "@/lib/markdown/tokenizer";
import { Link } from "@tanstack/react-router";
import { Font } from "@/components/typography/fonts.ts";

interface MarkdownTypographyProps extends PropsWithChildren {
    level: Font;
    inlineTokens?: InlineToken[];
}

const isExternalLink = (href?: string) =>
    href?.startsWith('http://') || href?.startsWith('https://');

const renderToken = (token: InlineToken, index: number): React.ReactNode => {
    const linkClass = "text-blue-600 hover:underline";

    switch (token.type) {
        case TokenType.LINK:
            if (isExternalLink(token.link_href)) {
                return (
                <a
                    key={index}
                href={token.link_href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                    >
                    {token.value}
            </a>
            );
            }
            return (
                <Link
                    key={index}
                    to={token.link_href!}
                    className={linkClass}
                >
                    {token.value}
                </Link>
            );
        case TokenType.TEXT:
        default:
            return <React.Fragment key={index}>{token.value}</React.Fragment>;
    }
};

export const MarkdownTypography: React.FC<MarkdownTypographyProps> = ({
                                                                          level,
                                                                          inlineTokens = [],
                                                                      }) => {
    const styles = getRichFontStyles(level);

    const Tag = (['1', '2', '3', '4', '5', '6'].includes(level)
        ? `h${level}`
        : 'p') as keyof React.JSX.IntrinsicElements;

    if (inlineTokens.length === 0) {
        return <Tag className={styles} />;
    }

    return (
        <Tag className={styles}>
            {inlineTokens.map(renderToken)}
        </Tag>
    );
};