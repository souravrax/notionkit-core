import heading1 from "./notionBlocks/heading1";
import { BlockObjectResponse } from "./notionBlocks/types";
import { NotionKitComponents, NotionKitOptions } from "./types";

export function render<T = unknown>(
    blocks: BlockObjectResponse[],
    components: NotionKitComponents<T>,
    options?: NotionKitOptions
): Array<T | null> {
    return blocks.map((block) => {
        switch (block.type) {
            case "heading_1":
                return heading1<T>(block, components.block, components.inline);
            // break;
            default:
                return null;
        }
    });
}
