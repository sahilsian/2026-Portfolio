import { createFileRoute } from '@tanstack/react-router'
import { querySoftwareProduct} from "@/lib/gqlClient.ts";
import ProductLayout from "@/components/layouts/product";

export const Route = createFileRoute('/software/$id/$slug')({
    component: RouteComponent,
    loader: async ({context, params}) => {
        const { id, slug } = params;
        const software = await context.queryClient.ensureQueryData({
            queryFn: () => querySoftwareProduct(id),
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
        <ProductLayout
            type={"software"}
            title={software.title}
            slug={software.slug}
            image={software.image}
            description={software.description}
            tabs={software.tabs.tab}
        />
    </div>
}
