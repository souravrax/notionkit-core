import {
    Heading1BlockObjectResponse,
    TextRichTextItemResponse,
} from "./notionBlocks/types";

type NotionComponentType =
    | "bookmark"
    | "breadcrumb"
    | "bulletedListItem"
    | "callout"
    | "childDatabase"
    | "childPage"
    | "codeBlock"
    | "column"
    | "columnList"
    | "divider"
    | "embed"
    | "equation"
    | "file"
    | "heading1"
    | "heading2"
    | "heading3"
    | "image"
    | "linkPreview"
    | "linkToPage"
    | "numberedListItem"
    | "paragraph"
    | "pdf"
    | "quote"
    | "syncedBlock"
    | "table"
    | "tableOfContents"
    | "tableRow"
    | "template"
    | "toDo"
    | "toggle"
    | "video"
    | "inlineText"
    | "inlineBold"
    | "inlineItalic"
    | "inlineStrikethrough"
    | "inlineUnderline"
    | "inlineCode"
    | "inlineColor"
    | "inlineHighlight"
    | "inlineLink"
    | "inlineEquation"
    | "inlineMention";

export type NotionKitInlineComponents<T> = {
    text: (
        text: string,
        color: TextRichTextItemResponse["annotations"]["color"]
    ) => T;
    equation: (
        expression: string,
        color: TextRichTextItemResponse["annotations"]["color"]
    ) => T;
} & NotionKitAnnotations<T>;

export type NotionKitAnnotations<T> = {
    link: (element: T, href: string) => T;
    bold: (element: T) => T;
    italic: (element: T) => T;
    underline: (element: T) => T;
    code: (element: T) => T;
    strikethrough: (element: T) => T;
};

export type NotionKitBlockComponents<T> = {
    heading1: (
        elements: Array<T | null>,
        props?: Heading1BlockObjectResponse
    ) => T;
};

export type NotionKitComponents<T> = {
    block: NotionKitBlockComponents<T>;
    inline: NotionKitInlineComponents<T>;
};

export type NotionKitOptions = {};
