import ProductLayout from "@/components/layouts/product";
import BlockRenderer from "@/components/renderers/blockRenderer";
import {Product} from "@/lib/graphQL/interfaces.ts";

interface ProductRendererProps {
    product: Product;
    blocks?: any[];
    type: string;
}

const ProductRenderer = ({blocks, product, type}:ProductRendererProps) => {
    return <div>
        <ProductLayout
            type={type}
            title={product.title}
            slug={product.slug}
            image={product.image}
            description={product.description}
            tabs={product.tabs}
        ></ProductLayout>
        <BlockRenderer blocks={blocks}></BlockRenderer>
    </div>

}

export default ProductRenderer