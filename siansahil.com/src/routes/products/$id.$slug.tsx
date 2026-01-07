import {createFileRoute} from '@tanstack/react-router'
import {queryProduct} from "@/lib/graphQL/gqlClient.ts";
import ProductRenderer from "@/components/renderers/productRenderer";

export const Route = createFileRoute('/products/$id/$slug')({
  component: RouteComponent,
    loader: async ({context, params}) => {
        const { id, slug } = params;
        const product = await context.queryClient.ensureQueryData({
            queryFn: async () => {
                return await queryProduct({ data: { documentId: id } })
            },
            queryKey: ["product", id, slug]
        })

        return {
            product: product.product
        }
    }
})

function RouteComponent() {
    const { product } = Route.useLoaderData()
    return <div>
        <ProductRenderer
            type={"product"}
            product={product}
        >

        </ProductRenderer>
    </div>
}
