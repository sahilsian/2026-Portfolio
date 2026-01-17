import ProductLayout from "@/layouts/product";
import BlockRenderer from "@/components/renderers/blockRenderer";
import {Product} from "@/lib/data/interfaces.ts";

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
            dateCreated={product.dateCreated}
            material={product.material}
        ></ProductLayout>
        <BlockRenderer blocks={blocks}></BlockRenderer>
    </div>

}

export default ProductRenderer