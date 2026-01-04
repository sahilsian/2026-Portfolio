import { createFileRoute } from '@tanstack/react-router';
import { queryHome } from "@/lib/graphQL/gqlClient.ts";
import BlockRenderer from "@/components/renderers/blockRenderer";

export const Route = createFileRoute('/')(
    {
        loader: async ({context}) => {
            try {
                const home = await context.queryClient.ensureQueryData({
                    queryKey: ['home'],
                    queryFn: queryHome
                })

                return {
                    home: home.home
                }
            } catch (error) {
                console.error(error)
                return {
                    home: null
                }
            }

        },
        component: HomePage
    }
)

function HomePage() {
    const { home } = Route.useLoaderData();
    const blocks:any[] = [
        home.wrapper.hero,
        home.wrapper.art_primary,
        home.wrapper.art_secondary,
        home.wrapper.software_feature,
    ]
    return (
        <div>
            <BlockRenderer blocks={blocks} />
        </div>
  )
}
