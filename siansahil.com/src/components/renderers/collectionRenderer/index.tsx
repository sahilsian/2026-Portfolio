import Collection from "@/components/layouts/collection";
import {PageInfoProps} from "@/components/layouts/collection/list.tsx";

interface CollectionRendererProps {
    blocks?: any[];
    collection: any[];
    type: string;
    pageInfo: PageInfoProps
}

// Collection Factory
const CollectionRenderer = ({blocks, collection, type, pageInfo}: CollectionRendererProps) => {
    return <div>
        {blocks?.map((block) => {
            switch (block?.variation.variation) {
                case "collection": {
                    // Standard Collection
                    return <Collection
                        type={type}
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        collection={collection}
                        pageInfo={pageInfo}
                    ></Collection>
                }
            }
        })}
    </div>
}

export default CollectionRenderer
