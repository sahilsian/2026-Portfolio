import {createFileRoute} from '@tanstack/react-router'
import {queryArtProduct} from "@/lib/graphQL/gqlClient.ts";
import ProductRenderer from "@/components/renderers/productRenderer";

export const Route = createFileRoute('/art/$id/$slug')({
  component: RouteComponent,
    loader: async ({context, params}) => {
        const { id, slug } = params;
        const art = await context.queryClient.ensureQueryData({
            queryFn: async () => {
                return await queryArtProduct({ data: { documentId: id } })
            },
            queryKey: ["art", id, slug]
        })

        return {
            art: art.art
        }
    }
})

function RouteComponent() {
    const { art } = Route.useLoaderData()
    return <div>
        <ProductRenderer
            type={"art"}
            product={art}
        >

        </ProductRenderer>
    </div>
}
