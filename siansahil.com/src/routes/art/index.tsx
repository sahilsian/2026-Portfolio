import {createFileRoute} from '@tanstack/react-router'
import {queryArtCollection, queryArtwork} from "@/lib/graphQL/gqlClient.ts";
import CollectionRenderer from "@/components/renderers/collectionRenderer";
import {STANDARD_PAGINATION} from "@/lib/graphQL/queries.ts";

export const Route = createFileRoute('/art/')({
    validateSearch: (search: Record<string, unknown>) => {
        return {
            page: search.page ? Number(search.page) : undefined,
            pageSize: search.pageSize ? Number(search.pageSize) : undefined,
        }
    },
    component: RouteComponent,
    loaderDeps: ({ search: { page, pageSize } }) => ({ page, pageSize }),
    loader: async ({context,  deps: { page, pageSize } }) => {
        const pagination = {
            page: page ?? STANDARD_PAGINATION.pagination.page,
            pageSize: pageSize ?? STANDARD_PAGINATION.pagination.pageSize,
        }


        const artLayout = await context.queryClient.ensureQueryData({
            queryFn: queryArtwork,
            queryKey: ["artLayout"]
        })
        const art = await context.queryClient.fetchQuery({
            queryFn: () => queryArtCollection({
                data: {pagination}
            }),
            queryKey: ["art"]
        })
        return {art: art.arts_connection, artLayout: artLayout.artLayout}
    }
})

function RouteComponent() {
    const { art, artLayout } = Route.useLoaderData()
    console.log(art)
    const blocks:any[] = [
        artLayout.collection
    ]

  return <div>
      <CollectionRenderer
          type={"art"}
          pageInfo={art.pageInfo}
          collection={art.nodes}
          blocks={blocks}>
      </CollectionRenderer>
  </div>
}
