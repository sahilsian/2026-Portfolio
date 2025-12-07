import Collection from "@/components/layouts/collection";

interface CollectionRendererProps {
    blocks?: any[]
    collection: any[]
}

// Collection Factory
const CollectionRenderer = ({blocks, collection}: CollectionRendererProps) => {
    return <div>

        {blocks?.map((block) => {
            switch (block?.variation.variation) {
                case "collection": {
                    return <Collection
                        key={block.id}
                        title={block.title}
                        description={block.description}
                        collection={collection}
                    ></Collection>
                }
            }
        })}
    </div>
}

export default CollectionRenderer
