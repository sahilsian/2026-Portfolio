import { createFileRoute } from '@tanstack/react-router';
import { queryHome } from "@/lib/data/queries/queries.ts";
import BlockRenderer from "@/components/renderers/blockRenderer";
import {pageSEO} from "@/components/seo/interfaces.ts";

export const Route = createFileRoute('/')(
    {
        loader: async ({context}) => {
            try {
                const home = await context.queryClient.ensureQueryData({
                    queryKey: ['home'],
                    queryFn: queryHome
                })
                return {
                    home: home.home,
                    seo: home.home.seo
                }
            } catch (error) {
                console.error(error)
                return {
                    home: null
                }
            }

        },
        head: ({ loaderData }) => {
            const seo: pageSEO = loaderData?.seo ?? {
                title: 'Fluentclicks.com',
                description: 'Fluentclicks uses AI to generate leads that speak fluently to your business processes.',
                canonical: 'siansahil.com',
                OGImage: { url: '' },
            }

            return {

                meta: [
                    { title: seo.title },
                    { name: "description", content: seo.description},
                    // OPEN GRAPH
                    { property: 'og:title', content: seo.title },
                    { property: 'og:description', content: seo.description },
                    { property: 'og:image', content: seo.OGImage?.url || "" },
                    { property: 'og:type', content: "website" }
                ],
                links: [

                    { rel: 'canonical', href: seo.canonical }
                ],
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
