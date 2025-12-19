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
        home.hero,
        home.featurePrimary,
        home.featureSecondary,
        home.statement,
    ]
    return (
        <div>
            <BlockRenderer blocks={blocks} />
        </div>
  )
}
