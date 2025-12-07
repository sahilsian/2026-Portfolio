import { createFileRoute } from '@tanstack/react-router'
import { queryArtProduct} from "@/lib/gqlClient.ts";
import ProductLayout from "@/components/layouts/product";

export const Route = createFileRoute('/art/$id/$slug')({
  component: RouteComponent,
    loader: async ({context, params}) => {
        const { id, slug } = params;
        const art = await context.queryClient.ensureQueryData({
            queryFn: () => queryArtProduct(id),
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
        <ProductLayout
            type={"art"}
            title={art.title}
            slug={art.slug}
            image={art.image}
            description={art.description}
            tabs={art.tabs.tab}
        />
    </div>
}
