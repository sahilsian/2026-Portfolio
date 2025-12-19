import {createFileRoute} from '@tanstack/react-router'
import {queryArtCollection, queryArtwork} from "@/lib/graphQL/gqlClient.ts";
import CollectionRenderer from "@/components/renderers/collectionRenderer";

export const Route = createFileRoute('/art/')({
  component: RouteComponent,
    loader: async ({context}) => {
        const artLayout = await context.queryClient.ensureQueryData({
            queryFn: queryArtwork,
            queryKey: ["artLayout"]
        })
        const art = await context.queryClient.ensureQueryData({
            queryFn: queryArtCollection,
            queryKey: ["art"]
        })
        return {art: art.arts, artLayout: artLayout.artLayout}
    }
})

function RouteComponent() {
    const { art, artLayout } = Route.useLoaderData()
    const blocks:any[] = [
        artLayout.collection
    ]

  return <div>
      <CollectionRenderer collection={art} blocks={blocks}></CollectionRenderer>
  </div>
}
