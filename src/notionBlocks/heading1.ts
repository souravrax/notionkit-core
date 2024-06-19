import { NotionKitBlockComponents, NotionKitInlineComponents } from "../types";
import richText from "./richText";
import { Heading1BlockObjectResponse } from "./types";

export default function heading1<T>(
    block: Heading1BlockObjectResponse,
    blockComponents: NotionKitBlockComponents<T>,
    inlineComponents: NotionKitInlineComponents<T>
): T {
    const elements: Array<T | null> = block.heading_1.rich_text.map(
        (document) => richText(document, inlineComponents)
    );
    return blockComponents["heading1"](elements, block);
}
