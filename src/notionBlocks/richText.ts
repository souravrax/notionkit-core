import { NotionKitInlineComponents } from "../types";
import { RichTextItemResponse } from "./types";

// type WrapperType<T> = NotionAnnotations<T>[keyof NotionAnnotations<T>];

export function check<T>(check: boolean, A: T, B: T): T {
    return check ? A : B;
}

export default function richText<T>(
    richText: RichTextItemResponse,
    inlineComponents: NotionKitInlineComponents<T>
): T | null {
    if (richText.type == "mention") return null;
    let baseComponent =
        richText.type == "text"
            ? inlineComponents.text(
                  richText.text.content,
                  richText.annotations.color
              )
            : inlineComponents.equation(
                  richText.equation.expression,
                  richText.annotations.color
              );

    baseComponent = check<T>(
        richText.annotations.bold,
        inlineComponents.bold(baseComponent),
        baseComponent
    );

    baseComponent = check<T>(
        richText.annotations.code,
        inlineComponents.code(baseComponent),
        baseComponent
    );
    baseComponent = check<T>(
        richText.annotations.italic,
        inlineComponents.italic(baseComponent),
        baseComponent
    );
    baseComponent = check<T>(
        richText.annotations.strikethrough,
        inlineComponents.strikethrough(baseComponent),
        baseComponent
    );
    baseComponent = check<T>(
        richText.annotations.underline,
        inlineComponents.underline(baseComponent),
        baseComponent
    );

    return richText.href !== null
        ? inlineComponents.link(baseComponent, richText.href)
        : baseComponent;
}
