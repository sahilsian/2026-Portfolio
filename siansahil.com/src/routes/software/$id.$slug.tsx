import { createFileRoute } from '@tanstack/react-router'
import {querySoftwareProduct} from "@/lib/graphQL/gqlClient.ts";
import ProductRenderer from "@/components/renderers/productRenderer";

export const Route = createFileRoute('/software/$id/$slug')({
    component: RouteComponent,
    loader: async ({context, params}) => {
        const { id, slug } = params;
        const software = await context.queryClient.ensureQueryData({
            queryFn: async () => {
                return await querySoftwareProduct({ data: { documentId: id } })
            },
            queryKey: ["software", id, slug]
        })

        return {
            software: software.software
        }
    }
})

function RouteComponent() {
    const { software } = Route.useLoaderData()
    return <div>
        <ProductRenderer
            type={"software"}
            product={software}
        >

        </ProductRenderer>
    </div>
}
