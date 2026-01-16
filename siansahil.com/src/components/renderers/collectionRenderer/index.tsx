import CollectionLayout from "@/layouts/collection";
import {PageInfoProps} from "@/components/pagination";

interface CollectionRendererProps {
    blocks?: any[];
    collection: any[];
    type: string;
    pageInfo: PageInfoProps
    categories: CollectionCategory[]
}

export interface CollectionCategory {
    category: { name: string }
    layoutTitle: string
    layoutDescription: string
}

// Collection Factory
const CollectionRenderer = ({collection, type, pageInfo, categories}: CollectionRendererProps) => {
    return <CollectionLayout
            type={type}
            collection={collection}
            pageInfo={pageInfo}
            categories={categories}
        ></CollectionLayout>
}

export default CollectionRenderer
